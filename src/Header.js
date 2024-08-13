import React, { useState } from 'react'
import './Header.css'
import Navbar from './Navbar'
import Search from './Search'


const Header = () => {
   const [search, setSearch]= useState('')

  return (
   <header className='head' >
    <h1>Code Master</h1>
    <Search 
    />
    <Navbar />

   </header>
  )
}

export default Header

