import React, { useState, useEffect, RefObject, useRef } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const useOnClickOutside = (
        ref: RefObject<HTMLElement>,
        handler: (event: MouseEvent | TouchEvent) => void
      ): void => {
        useEffect(() => {
          const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
              return;
            }
            handler(event);
          };
      
          document.addEventListener('mousedown', listener);
          document.addEventListener('touchstart', listener);
      
          return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
          };
        }, [ref, handler]);
      };

    useOnClickOutside(ref, () => setIsMenuOpen(false));


    return (
        <nav ref={ref}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">

                    <div className="flex space-x-7">
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-4 px-2 text-gray-300 hover:text-gray-400">Home</a>
                            <a href="#" className="py-4 px-2 text-gray-300 hover:text-gray-400">About</a>
                            <a href="#" className="py-4 px-2 text-gray-300 hover:text-gray-400">Services</a>
                            <a href="#" className="py-4 px-2 text-gray-300 hover:text-gray-400">Contact</a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 black hover:orange"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-150 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Services</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
