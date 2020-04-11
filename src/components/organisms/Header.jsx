import React, { useState } from 'react'

import { Nav } from '../molecules'
import { Badge } from '../atoms'

const Header = () => {

  const [isOpen, setOpen] = useState(true)

  return (
    <header className="md:flex md:justify-between md:items-center md:px-4 md:py-3">

      <div className="flex items-center justify-between px-4 py-3 md:p-0">
        <div>
          <img className="h-6" src="/img/logo-full.svg" alt="Logo" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!isOpen)} className="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {
                isOpen
                  ? <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                  : <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              }
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden lg:block lg:flex-shrink lg:ml-20">
        <a href="#" className="block px-2 py-1 text-gray-900 font-semibold hover:bg-gray-300">
          Funded cleanup
        <Badge text="73 895,02 KG" />
        </a>
      </div>

      <Nav isOpen={isOpen} />

    </header>
  )
}

export default Header