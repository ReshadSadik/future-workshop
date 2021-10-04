import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div class="bg-gray-400 font-sans leading-normal tracking-normal">
        <nav class="flex items-center justify-between flex-wrap  p-6 bg-purple-700 fixed w-full z-10 top-0">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <a
              class="text-purple-200 font-extrabold no-underline hover:text-white hover:no-underline"
              href="/"
            >
              <span class="text-2xl pl-2">
                <i class="em em-grinning"></i> Brand McBrandface
              </span>
            </a>
          </div>

          <div class="block lg:hidden">
            <button
              id="nav-toggle"
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
            id="nav-content"
          >
            <ul class="list-reset lg:flex justify-center flex-1 items-center">
              <li class="mr-3">
                <Link
                  class="inline-block font-bold  py-2 px-4 text-white "
                  to="/home"
                >
                  HOME
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  class="inline-block font-bold text-white   py-2 px-4"
                  to="/services"
                >
                  SERVICES
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
              <li class="mr-3">
                <Link
                  class="inline-block font-bold text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
