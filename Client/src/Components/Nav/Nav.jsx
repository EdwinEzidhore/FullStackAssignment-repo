import React from 'react'

const Nav = ({toggleModal}) => {


  return (
      <div className='bg-black'>
          <div className='container flex justify-around mx-auto py-5 text-white'>
              <div>
                  <div className='flex'>
                      <div className='border-r border-slate-300 px-2 font-semibold'><h1 >Abstract</h1></div>
                      <div className='px-2 font-semibold text-slate-200'><h1>Help Center</h1></div>
                  </div>
              </div>

              <div>
                  <button className='outline outline-stone-600 bg-stone-800 rounded-sm px-4 py-1 text-sm font-semibold text-slate-200' onClick={toggleModal}>Submit a request</button>
              </div>
          </div>
    </div>
  )
}

export default Nav