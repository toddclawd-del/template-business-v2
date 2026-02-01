'use client'

import { useEffect, useCallback, useState } from 'react'

/**
 * Booking Integration Types
 */
export type BookingProvider = 
  | 'calendly' 
  | 'cal' 
  | 'acuity' 
  | 'openTable' 
  | 'resy' 
  | 'fresha' 
  | 'square' 
  | 'booksy' 
  | 'vagaro' 
  | 'custom'

export interface BookingConfig {
  enabled?: boolean
  provider?: BookingProvider
  embedUrl?: string
  eventTypeSlug?: string
  buttonText?: string
  buttonStyle?: 'primary' | 'secondary' | 'ghost'
  openInModal?: boolean
  prefillName?: boolean
  prefillEmail?: boolean
  hideGdprBanner?: boolean
  primaryColor?: string
}

export interface BookingButtonProps {
  config: BookingConfig
  className?: string
  /** Override button text */
  text?: string
  /** Visitor info for pre-filling (Calendly/Cal) */
  visitor?: {
    name?: string
    email?: string
  }
  /** Custom onClick handler (called before opening booking) */
  onClick?: () => void
  /** Children to render inside button (overrides text) */
  children?: React.ReactNode
}

// Declare Calendly types
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: {
        url: string
        prefill?: { name?: string; email?: string }
        utm?: Record<string, string>
      }) => void
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        prefill?: { name?: string; email?: string }
      }) => void
    }
    Cal?: (action: string, ...args: unknown[]) => void
  }
}

/**
 * BookingButton Component
 * 
 * A flexible booking button that handles multiple booking providers.
 * Automatically loads required scripts and handles modal/popup behavior.
 * 
 * @example
 * ```tsx
 * // From Sanity data
 * <BookingButton config={settings.booking} />
 * 
 * // With overrides
 * <BookingButton 
 *   config={settings.booking} 
 *   text="Schedule a Call"
 *   className="my-custom-class"
 * />
 * ```
 */
export function BookingButton({
  config,
  className = '',
  text,
  visitor,
  onClick,
  children,
}: BookingButtonProps) {
  const [scriptsLoaded, setScriptsLoaded] = useState(false)
  
  const {
    enabled = true,
    provider,
    embedUrl,
    eventTypeSlug,
    buttonText = 'Book Now',
    buttonStyle = 'primary',
    openInModal = true,
    prefillName,
    prefillEmail,
    hideGdprBanner,
    primaryColor,
  } = config

  // Load provider-specific scripts
  useEffect(() => {
    if (!enabled || !provider) return

    const loadScript = (src: string, id: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
          resolve()
          return
        }
        const script = document.createElement('script')
        script.id = id
        script.src = src
        script.async = true
        script.onload = () => resolve()
        script.onerror = reject
        document.head.appendChild(script)
      })
    }

    const loadStyles = (href: string, id: string): void => {
      if (document.getElementById(id)) return
      const link = document.createElement('link')
      link.id = id
      link.rel = 'stylesheet'
      link.href = href
      document.head.appendChild(link)
    }

    const initScripts = async () => {
      try {
        if (provider === 'calendly' && openInModal) {
          loadStyles(
            'https://assets.calendly.com/assets/external/widget.css',
            'calendly-styles'
          )
          await loadScript(
            'https://assets.calendly.com/assets/external/widget.js',
            'calendly-script'
          )
        } else if (provider === 'cal' && openInModal) {
          await loadScript(
            'https://app.cal.com/embed/embed.js',
            'cal-script'
          )
        }
        setScriptsLoaded(true)
      } catch (error) {
        console.error('Failed to load booking scripts:', error)
        setScriptsLoaded(true) // Fallback to link behavior
      }
    }

    initScripts()
  }, [enabled, provider, openInModal])

  // Build the full booking URL
  const getBookingUrl = useCallback((): string => {
    if (!embedUrl) return '#'
    
    let url = embedUrl
    
    // Append event type slug for Calendly/Cal
    if (eventTypeSlug) {
      url = url.replace(/\/?$/, `/${eventTypeSlug}`)
    }
    
    // Add Calendly parameters
    if (provider === 'calendly') {
      const params = new URLSearchParams()
      if (hideGdprBanner) params.set('hide_gdpr_banner', '1')
      if (primaryColor) params.set('primary_color', primaryColor.replace('#', ''))
      const paramString = params.toString()
      if (paramString) {
        url += (url.includes('?') ? '&' : '?') + paramString
      }
    }
    
    return url
  }, [embedUrl, eventTypeSlug, provider, hideGdprBanner, primaryColor])

  // Handle button click
  const handleClick = useCallback((e: React.MouseEvent) => {
    onClick?.()
    
    if (!enabled || !embedUrl) return
    
    const bookingUrl = getBookingUrl()
    
    // Handle modal/popup behavior
    if (openInModal && scriptsLoaded) {
      if (provider === 'calendly' && window.Calendly) {
        e.preventDefault()
        const prefill: { name?: string; email?: string } = {}
        if (prefillName && visitor?.name) prefill.name = visitor.name
        if (prefillEmail && visitor?.email) prefill.email = visitor.email
        
        window.Calendly.initPopupWidget({
          url: bookingUrl,
          prefill: Object.keys(prefill).length > 0 ? prefill : undefined,
        })
        return
      }
      
      if (provider === 'cal' && window.Cal) {
        e.preventDefault()
        // Cal.com modal
        const calOptions: Record<string, unknown> = {
          calLink: embedUrl?.replace('https://cal.com/', '') || '',
        }
        if (prefillName && visitor?.name) calOptions.name = visitor.name
        if (prefillEmail && visitor?.email) calOptions.email = visitor.email
        
        window.Cal('modal', calOptions)
        return
      }
    }
    
    // Default: let the link navigate naturally
  }, [
    enabled, embedUrl, getBookingUrl, openInModal, scriptsLoaded,
    provider, prefillName, prefillEmail, visitor, onClick,
  ])

  // Don't render if disabled or no URL
  if (!enabled) return null
  if (!embedUrl && !children) {
    return (
      <span className={`opacity-50 cursor-not-allowed ${className}`}>
        {text || buttonText}
      </span>
    )
  }

  // Button style classes
  const styleClasses: Record<string, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    ghost: 'btn-ghost',
  }

  const buttonClasses = `${styleClasses[buttonStyle] || styleClasses.primary} ${className}`.trim()

  return (
    <a
      href={getBookingUrl()}
      onClick={handleClick}
      className={buttonClasses}
      target={openInModal ? undefined : '_blank'}
      rel={openInModal ? undefined : 'noopener noreferrer'}
      role="button"
      aria-label={text || buttonText}
    >
      {children || text || buttonText}
    </a>
  )
}

/**
 * BookingEmbed Component
 * 
 * Embeds a booking widget inline on the page.
 * Useful for dedicated booking pages or sections.
 */
export interface BookingEmbedProps {
  config: BookingConfig
  className?: string
  height?: string | number
}

export function BookingEmbed({ config, className = '', height = 630 }: BookingEmbedProps) {
  const { enabled = true, provider, embedUrl, eventTypeSlug, hideGdprBanner, primaryColor } = config

  useEffect(() => {
    if (!enabled || !embedUrl) return

    // Load Calendly widget script for inline embeds
    if (provider === 'calendly') {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [enabled, provider, embedUrl])

  if (!enabled || !embedUrl) {
    return (
      <div className={`bg-gray-100 rounded-lg p-8 text-center ${className}`}>
        <p className="text-gray-500">Booking widget not configured</p>
      </div>
    )
  }

  // Build full URL
  let fullUrl = embedUrl
  if (eventTypeSlug) {
    fullUrl = fullUrl.replace(/\/?$/, `/${eventTypeSlug}`)
  }
  if (provider === 'calendly') {
    const params = new URLSearchParams()
    if (hideGdprBanner) params.set('hide_gdpr_banner', '1')
    if (primaryColor) params.set('primary_color', primaryColor.replace('#', ''))
    const paramString = params.toString()
    if (paramString) {
      fullUrl += (fullUrl.includes('?') ? '&' : '?') + paramString
    }
  }

  // Calendly inline widget
  if (provider === 'calendly') {
    return (
      <div
        className={`calendly-inline-widget ${className}`}
        data-url={fullUrl}
        style={{ minWidth: '320px', height: typeof height === 'number' ? `${height}px` : height }}
      />
    )
  }

  // Cal.com inline widget
  if (provider === 'cal') {
    return (
      <iframe
        src={fullUrl}
        className={className}
        style={{ width: '100%', height: typeof height === 'number' ? `${height}px` : height, border: 'none' }}
        title="Book an appointment"
      />
    )
  }

  // Generic iframe for other providers
  return (
    <iframe
      src={fullUrl}
      className={className}
      style={{ width: '100%', height: typeof height === 'number' ? `${height}px` : height, border: 'none' }}
      title="Book an appointment"
      loading="lazy"
    />
  )
}

export default BookingButton
