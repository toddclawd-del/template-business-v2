'use client'

import { useEffect, useState } from 'react'

/**
 * Payment Integration Types
 */
export type PaymentProvider =
  | 'stripe'
  | 'stripeLink'
  | 'square'
  | 'paypal'
  | 'gumroad'
  | 'lemonsqueezy'
  | 'paddle'
  | 'custom'

export interface PaymentConfig {
  enabled?: boolean
  provider?: PaymentProvider
  // Stripe
  stripePricingTableId?: string
  stripePublishableKey?: string
  stripeCustomerSessionClientSecret?: string
  // Generic checkout
  checkoutUrl?: string
  // PayPal
  paypalButtonId?: string
  // Gumroad
  gumroadProductId?: string
  // LemonSqueezy
  lemonSqueezyOverlay?: boolean
  // Display
  buttonText?: string
  buttonStyle?: 'primary' | 'secondary' | 'ghost'
  openInNewTab?: boolean
}

/**
 * StripePricingTable Component
 * 
 * Renders the Stripe Pricing Table web component.
 * Requires a Pricing Table ID and Publishable Key from Stripe Dashboard.
 */
export interface StripePricingTableProps {
  pricingTableId: string
  publishableKey: string
  customerSessionClientSecret?: string
  className?: string
}

export function StripePricingTable({
  pricingTableId,
  publishableKey,
  customerSessionClientSecret,
  className = '',
}: StripePricingTableProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Load Stripe Pricing Table script
    const existingScript = document.querySelector('script[src*="stripe.com/v3/pricing-table.js"]')
    if (existingScript) {
      setLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://js.stripe.com/v3/pricing-table.js'
    script.async = true
    script.onload = () => setLoaded(true)
    document.head.appendChild(script)

    return () => {
      // Don't remove - might be used by other components
    }
  }, [])

  if (!pricingTableId || !publishableKey) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-500">Stripe Pricing Table not configured</p>
        <p className="text-gray-400 text-sm mt-2">
          Add your Pricing Table ID and Publishable Key in Sanity
        </p>
      </div>
    )
  }

  // Custom element props must be passed as attributes
  const tableProps: Record<string, string> = {
    'pricing-table-id': pricingTableId,
    'publishable-key': publishableKey,
  }
  if (customerSessionClientSecret) {
    tableProps['customer-session-client-secret'] = customerSessionClientSecret
  }

  return (
    <div className={className}>
      {!loaded && (
        <div className="animate-pulse bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <p className="text-gray-400">Loading pricing...</p>
        </div>
      )}
      {loaded && (
        // @ts-expect-error - stripe-pricing-table is a custom element
        <stripe-pricing-table {...tableProps} />
      )}
    </div>
  )
}

/**
 * PaymentButton Component
 * 
 * Renders a checkout button for non-Stripe payment providers.
 */
export interface PaymentButtonProps {
  config: PaymentConfig
  className?: string
  text?: string
  children?: React.ReactNode
  onClick?: () => void
}

export function PaymentButton({
  config,
  className = '',
  text,
  children,
  onClick,
}: PaymentButtonProps) {
  const {
    enabled = true,
    provider,
    checkoutUrl,
    gumroadProductId,
    lemonSqueezyOverlay = true,
    buttonText = 'Get Started',
    buttonStyle = 'primary',
    openInNewTab = false,
  } = config

  useEffect(() => {
    // Load Gumroad overlay script if needed
    if (provider === 'gumroad' && gumroadProductId) {
      const existingScript = document.querySelector('script[src*="gumroad.com/js/gumroad.js"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://gumroad.com/js/gumroad.js'
        script.async = true
        document.head.appendChild(script)
      }
    }

    // Load LemonSqueezy script if needed
    if (provider === 'lemonsqueezy' && lemonSqueezyOverlay) {
      const existingScript = document.querySelector('script[src*="lemon.lemonsqueezy.com"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://assets.lemonsqueezy.com/lemon.js'
        script.async = true
        document.head.appendChild(script)
      }
    }
  }, [provider, gumroadProductId, lemonSqueezyOverlay])

  if (!enabled) return null

  if (!checkoutUrl && provider !== 'gumroad') {
    return (
      <span className={`opacity-50 cursor-not-allowed ${className}`}>
        {text || buttonText}
      </span>
    )
  }

  // Style classes
  const styleClasses: Record<string, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  }
  const buttonClasses = `${styleClasses[buttonStyle] || styleClasses.primary} ${className}`.trim()

  // Handle Gumroad overlay
  if (provider === 'gumroad' && gumroadProductId) {
    return (
      <a
        href={checkoutUrl || `https://gum.co/${gumroadProductId}`}
        className={`gumroad-button ${buttonClasses}`}
        onClick={onClick}
        data-gumroad-product-id={gumroadProductId}
      >
        {children || text || buttonText}
      </a>
    )
  }

  // Handle LemonSqueezy overlay
  if (provider === 'lemonsqueezy' && lemonSqueezyOverlay && checkoutUrl) {
    return (
      <a
        href={checkoutUrl}
        className={`lemonsqueezy-button ${buttonClasses}`}
        onClick={onClick}
        data-lemon-checkout
      >
        {children || text || buttonText}
      </a>
    )
  }

  // Default link behavior
  return (
    <a
      href={checkoutUrl || '#'}
      className={buttonClasses}
      onClick={onClick}
      target={openInNewTab ? '_blank' : undefined}
      rel={openInNewTab ? 'noopener noreferrer' : undefined}
    >
      {children || text || buttonText}
    </a>
  )
}

/**
 * PaymentEmbed Component
 * 
 * Smart component that renders the appropriate payment UI based on config.
 * - Stripe: Renders pricing table
 * - Others: Renders checkout button
 */
export interface PaymentEmbedProps {
  config: PaymentConfig
  className?: string
  /** For non-Stripe: override button text */
  buttonText?: string
  /** For non-Stripe: custom button content */
  children?: React.ReactNode
}

export function PaymentEmbed({
  config,
  className = '',
  buttonText,
  children,
}: PaymentEmbedProps) {
  const { enabled = true, provider, stripePricingTableId, stripePublishableKey, stripeCustomerSessionClientSecret } = config

  if (!enabled) return null

  // Render Stripe Pricing Table
  if (provider === 'stripe' && stripePricingTableId && stripePublishableKey) {
    return (
      <StripePricingTable
        pricingTableId={stripePricingTableId}
        publishableKey={stripePublishableKey}
        customerSessionClientSecret={stripeCustomerSessionClientSecret}
        className={className}
      />
    )
  }

  // For other providers, render a button
  return (
    <PaymentButton config={config} className={className} text={buttonText}>
      {children}
    </PaymentButton>
  )
}

export default PaymentEmbed
