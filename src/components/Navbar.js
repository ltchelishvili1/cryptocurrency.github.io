import React from 'react'
import {BsCurrencyExchange} from 'react-icons/bs'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Link to='/'>
        <div className='navbar'>
            <BsCurrencyExchange className='icon'/>
            <h1>Crypto Currencies</h1>
        </div>
    </Link>
  )
}

export default Navbar