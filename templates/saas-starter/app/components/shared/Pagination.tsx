'use client'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  // Show limited pages with ellipsis
  const getVisiblePages = () => {
    if (totalPages <= 5) return pages
    
    if (currentPage <= 3) {
      return [...pages.slice(0, 4), '...', totalPages]
    }
    
    if (currentPage >= totalPages - 2) {
      return [1, '...', ...pages.slice(totalPages - 4)]
    }
    
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
  }

  return (
    <nav className="flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg text-sm font-medium
                   text-gray-600 hover:text-gray-900 hover:bg-gray-100
                   dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
      >
        ← Previous
      </button>
      
      <div className="flex items-center gap-1">
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors
              ${page === currentPage 
                ? 'bg-primary-600 text-white' 
                : page === '...'
                  ? 'cursor-default text-gray-400'
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
              }`}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg text-sm font-medium
                   text-gray-600 hover:text-gray-900 hover:bg-gray-100
                   dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
      >
        Next →
      </button>
    </nav>
  )
}
