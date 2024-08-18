import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL } from '../../../Config';

const RequestForm = ({ toggleModal,getCards }) => {
  
  const [card, setcard] = useState({
    title: '',
    description: ''
  });

  const HandleChange = (e) => {

    e.preventDefault();
    const { name, value } = e.target;

    setcard((prev) => {
      return {...prev,[name]:value}
    })
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`${BASE_URL}/cards`,{card})
      .then((res) => {
        if (res.status === 201) {
          toggleModal()
          getCards();
      }
      
      })
      .catch((err) => {
      console.log(err);
      
    })
    
  }

  return (
      <div className='fixed inset-0 backdrop-blur-sm z-10'>
          <div className=' bg-slate-400  flex items-center justify-center w-2/5 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 rounded-md'>
          <form>
                  <h1 className='text-xl font-semibold text-center'>New card</h1>
                  <div className='flex flex-col mt-5'>
            <input
              className='py-3 px-2 w-96'
              type="text"
              name='title'
              placeholder='Title'
              value={card.title}
              onChange={(e) => HandleChange(e)}
             
            />
            <textarea

              className='py-3 px-2 w-96 mt-3'
              type="text"
              name="description"
              placeholder='Description'
              value={card.description}
              id="desc"
              onChange={(e) => HandleChange(e)} />

                  </div>
          <div className='w-full flex gap-2'>
            <button className='w-1/2 mt-12 bg-slate-200 font-semibold uppercase text-sm py-3 mb-2' onClick={toggleModal}>Cancel</button>
            <button className='w-1/2 mt-12 bg-slate-200 font-semibold uppercase text-sm py-3 mb-2' onClick={(e)=>HandleSubmit(e)}>submit</button>
          </div>
          </form>
          </div>
         
    </div>
  )
}

export default RequestForm