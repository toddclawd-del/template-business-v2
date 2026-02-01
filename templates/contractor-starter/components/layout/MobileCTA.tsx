'use client'

import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'
import { COMPANY } from '@/lib/data'

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] p-4 flex gap-3 md:hidden">
      <a 
        href={`tel:${COMPANY.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      <Link 
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
      >
        <MessageSquare className="w-5 h-5" />
        Get Quote
      </Link>
    </div>
  )
}
