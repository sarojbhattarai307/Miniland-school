'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/common/Navbar'
import Main from '@/components/common/Main'
import Footer from '@/components/common/Footer'


const HomePage = () => {
  
  const[isOpen, setIsOpen]  = useState(false)
  
  const checkMenuStat = () =>{
    setIsOpen(!isOpen)
    
  }

 

  return (
    <div className="min-h-screen bg-[#EBEBD3]">

<Navbar checkMenuStat={checkMenuStat}/>
<Main />
<Footer />

      </div>
  );
};

export default HomePage;
