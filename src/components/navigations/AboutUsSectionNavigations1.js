import React from 'react';

export default function AboutUsSectionNavigations1() {
    return (
        <React.Fragment>
            <>
                <section>
  <nav className="px-4 sm:px-10 py-4 bg-white">
    <div className="relative flex items-center justify-between">
      <div className="w-auto">
        <a className="inline-block" href="#">
          <img src="https://static.shuffle.dev/uploads/files/89/891aed3d3e1847e9f17b379d6d326119edf7f96f/medara-small.png" alt />
        </a>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
        <ul className="flex items-center">
          <li className="font-heading mr-12 text-base"><a className="hover:text-black" href="/aboutus">About</a></li>
          <li className="font-heading mr-12 text-base"><a className="hover:text-black" href="/technology">Technology</a></li>
          <li className="font-heading mr-12 text-base"><a className="hover:text-black" href="/news">News</a></li>
          <li className="font-heading mr-12 text-base"><a className="hover:text-black" href="/forpatients">For Patients</a></li>
        </ul>
      </div>
      <div className="w-auto hidden lg:block"><a className="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" href="#">Contact</a></div>
      <div className="w-auto lg:hidden">
        <button className="inline-flex w-14 h-14 justify-center items-center bg-gray-50 hover:bg-gray-100 rounded-full">
          <svg width={20} height={10} viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9H1M19 1H1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <div className="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80" />
    <nav className="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
      <div className="flex flex-col px-6 h-full">
        <a className="inline-block ml-4 mb-7" href="#">
          <img src="acros-assets/logo/logo-acros-black.svg" alt />
        </a>
        <ul className="w-full mb-auto pb-16">
          <li><a className="font-heading block text-base font-medium py-4 px-6 hover:bg-green-50 rounded-sm" href="#">Home</a></li>
          <li><a className="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="#">About</a></li>
          <li><a className="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="#">Company</a></li>
          <li><a className="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="#">Services</a></li>
          <li><a className="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="#">Testimonials</a></li>
          <li><a className="font-heading block text-base py-4 px-6 hover:bg-green-50 rounded-sm" href="#">Contact</a></li>
        </ul>
        <div className="w-full">
          <a className="block w-full py-4 px-4 mb-4 text-center font-heading font-medium text-base hover:text-green-500 border border-gray-900 hover:border-green-500 rounded-sm transition duration-200" href="#">Log in</a><a className="block w-full py-4 px-4 mb-8 text-center font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" href="#">Sign up</a>
          <p className="pl-2 text-sm">2022 © Shuffle</p>
        </div>
      </div>
    </nav>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

