import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { BASE_URL } from '../../../Config'

const Card = ({cards}) => {


  useEffect(() => {
    setCards(cards)
  },[cards])
  
  const [Cards, setCards] = useState(cards);

  
  
  const getSingleCard = (card) => {
    const { title } = card;
    
    
    axios.get(`${BASE_URL}/cards/${title}`).then((res) => {
      if (res.status == 200) {
        setCards(res.data.card);
        
          }
          
    })
      .catch((err) => {
      console.log(err);
      
    })
  }



    return (
      <>
        {
        Cards && Cards.map((card,index) => (
            <div className='bg-slate-100 rounded-md  border border-slate-300 ' onClick={()=>getSingleCard(card)}key={index}>
              <h2 className='border-b border-slate-300 px-3 py-2 font-semibold text-lg'>{ card.title}</h2>
              <p className='px-3 pt-2 pb-6 text-slate-500 font-semibold text-sm'>{card.description}</p>
            </div>
          
          ))
        }
            
        </>
      
  )
}

export default Card