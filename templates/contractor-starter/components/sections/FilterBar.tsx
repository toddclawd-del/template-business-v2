'use client'

interface FilterBarProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function FilterBar({ categories, activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap border-2 transition-all duration-200 ${
            activeCategory === category
              ? 'bg-primary-600 text-white border-primary-600 shadow-md shadow-primary-600/20'
              : 'border-primary-200 text-primary-600 hover:border-primary-400'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
