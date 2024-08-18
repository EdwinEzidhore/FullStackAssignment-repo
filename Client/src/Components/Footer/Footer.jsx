import React from 'react'

const Footer = () => {
  return (
      <div className='bg-black flex '>
          <footer className='container relative flex mx-auto px-5 py-24 text-white'>
              <div className='w-1/3 '>
                  <h2 className='text-xl font-semibold mb-4'>Abstract</h2>
                  <nav className='list-none'>
                      <li><span>Branch</span></li>
                  </nav>
              </div>
              <div className='w-1/3 '>
                  <h2 className='text-xl font-semibold mb-4'>Resources</h2>
                  <nav className='list-none'>
                      <li><span>Blog</span></li>
                      <li><span>Help Center</span></li>
                      <li><span>Release Notes</span></li>
                      <li><span>status</span></li>

                  </nav>
              </div>
              <div className='w-1/3 '>
                  <h2 className='text-xl font-semibold mb-4'>Community</h2>
                  <nav className='list-none'>
                      <li><span>Twitter</span></li>
                      <li><span>LinkedIn</span></li>
                      <li><span>Facebook</span></li>
                      <li><span>Dribble</span></li>
                      <li><span>Podcast</span></li>

                  </nav>
              </div>
              <div className='w-1/3 '>
                  <h2 className='text-xl font-semibold mb-4'>Company</h2>
                  <nav className='list-none'>
                      <li><span>About Us</span></li>
                      <li><span>Careers</span></li>
                      <li><span>Legal</span></li>

                  </nav>

                  <div className='mt-5'>
                      <h2 className='text-xl font-semibold mb-2'>ContactUs</h2>
                      <span>info@abstract.com</span>
                  </div>
              </div>
              
              <div className='absolute right-0  bottom-12'>
                  <div>
                  <span>@Copyright 2022</span><br />
                      <span>Abstract Studio Design, Inc.</span>
                      <br />
                  <span>All rights reserved</span>
                  </div>
                 
              </div>
          </footer>
    </div>
  )
}

export default Footer