import { useState, useEffect } from 'react'
import { HiSearch } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { FiCommand } from 'react-icons/fi'
import { motion } from 'framer-motion'
import useSound from 'use-sound'

export default function CommandPalette({ navigation }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setIsOpen(true)
      }
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const [ThemeSound] = useSound('/static/sounds/open.mp3', { volume: 0.5 })

  const filterednavigation = query
    ? navigation.pages.filter((page) => page.name.toLowerCase().includes(query.toLowerCase()))
    : navigation.pages

  return (
    <>
      <motion.button
        className="ml-2 mr-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1 ring-gray-400 transition-all duration-200 ease-in-out hover:bg-gray-300 hover:ring-1 dark:bg-gray-700 dark:ring-gray-300 dark:hover:bg-gray-600"
        type="button"
        aria-label="Command palette"
        animate={{
          rotate: isOpen ? 360 : 0,
        }}
        transition={{ duration: 0.1, ease: 'easeIn' }}
        onClick={() => {
          toggleIcon()
          ThemeSound()
        }}
      >
        <FiCommand className="text-gray-700 dark:text-gray-300" />
      </motion.button>

      {/* Command Palette Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative mx-auto mt-20 max-w-xl p-6">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl ring-1 ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:ring-gray-700">
              {/* Search Header */}
              <div className="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-4 dark:border-gray-700 dark:bg-gray-900">
                <HiSearch className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="ml-3 flex-1 border-0 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 dark:text-gray-100 dark:placeholder-gray-400"
                  placeholder="Search pages..."
                  autoFocus
                />
                <div className="rounded bg-gray-200 px-2 py-1 text-xs text-gray-400 dark:bg-gray-700 dark:text-gray-500">
                  ⌘K
                </div>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {filterednavigation.length > 0 ? (
                  filterednavigation.map((page, index) => (
                    <button
                      key={page.name}
                      onClick={() => {
                        setIsOpen(false)
                        router.push(page.href)
                      }}
                      className="w-full border-b border-gray-100 px-4 py-3 text-left transition-colors duration-150 last:border-b-0 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-2 w-2 rounded-full bg-primary-color-500 dark:bg-primary-color-400"></div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">
                            {page.name}
                          </div>
                        </div>
                        <div className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                          {index + 1}
                        </div>
                      </div>
                      {page.repo && (
                        <div className="mt-1 ml-5 text-sm text-gray-500 dark:text-gray-400">
                          {page.repo}
                        </div>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <div className="mb-2 text-gray-500 dark:text-gray-400">
                      {query ? 'No results found' : 'Start typing to search...'}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      Try searching for: Home, Projects, About, Contact
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500">
                <div className="flex items-center justify-between">
                  <span>
                    Press{' '}
                    <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs dark:bg-gray-700">
                      Esc
                    </kbd>{' '}
                    to close
                  </span>
                  <span className="font-medium text-primary-color-500 dark:text-primary-color-400">
                    {filterednavigation.length} page{filterednavigation.length !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
