import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import Card from '../Components/Card/Card'
import RequestForm from '../Components/Modal/RequestForm'
import axios from 'axios'
import { BASE_URL } from '../../Config'
import EmptyItem from '../Components/Error/EmptyItem'
import { FaArrowRightLong } from "react-icons/fa6";

const Support = () => {

    const [toggleModal, settoggleModal] = useState(false);
    const [Cards, setCards] = useState([])
    const [searchInput, setsearchInput] = useState('')
    const [searchResults, setsearchResults] = useState([])

    useEffect(() => {
        getCards();
    }, []);

    
    

    const getCards = () => {
        axios.get(`${BASE_URL}/cards`)
            .then((res) => {
                if (res.status === 200) {
                    setCards(res.data.card);
                //    console.log('testing');
                   
                }
                
            })
            .catch((err) => {
            console.log(err);
            
        })
    }

    const toggleOnChange = () => {
        settoggleModal(!toggleModal)
    };

    useEffect(() => {
        HandleInputChange();
    }, [searchInput]);

    

    const HandleInputChange = () => {
        let cards = [...Cards];
        cards = cards.filter((card) => {
            return searchInput && card && card.title.toLowerCase().includes(searchInput)
         
        });        
        setsearchResults(cards);
    };

    const handleSearchClick = (card) => {
        setCards([card]) 
    }
    
    const searchButtonclick = () => {
      setCards(searchResults)
    }
  return (
      <div className=''>
          <Nav toggleModal={ toggleOnChange} />
          <div className='h-screen'>
              <div className='header flex items-center justify-center bg-[#d8dbec]'>
                  <div className='w-fit'>
                      <div className='mt-12 px-12'><h1 className='text-5xl'>How can we help?</h1></div>
                      <div className='relative mt-8 mb-24 '>
                          <input className=' px-3 py-3 w-full overflow-hidden ' placeholder='search' type="search" name="search" id="search" onChange={(e) => setsearchInput(e.target.value)} />
                          <div
                              className='absolute right-0 top-0 bottom-0 cursor-pointer m-1 bg-white px-3 place-content-center'
                              onClick={searchButtonclick}
                          >
                          <FaArrowRightLong />
                          </div>
                          {
                              searchInput.length >0 && Cards.length>0 && <div className='absolute  -bottom-14 w-full h-24 overflow-scroll translate-y-1/2 bg-slate-100 pl-5 pt-2 text-slate-600'>
                              {searchResults.map((card, index) => (
                                  <div className='mb-2 cursor-pointer' onClick={()=>handleSearchClick(card)} key={index}>
                                       <span className='font-semibold tracking-wide'>{card.title }</span>
                                  </div>
                                 
                              ))}
                          </div>
                          }
                         

                      </div>
                  </div>
              </div>

              <div className='container mx-auto grid grid-rows-1 grid-cols-2 w-fit gap-5 mt-12 overflow-y-auto'>
                  {Cards.length > 0 ? <Card cards={Cards} /> : <EmptyItem/>}
                 
              </div>
              {toggleModal && <RequestForm toggleModal={toggleOnChange} getCards={ getCards} />}
             
          </div>
          <Footer/>
</div>
  )
}

export default Support