import React from 'react'
import './navbar.css'
function Navbar(props) {
  // console.log(props)
  return (
    <div className='Navbar'>
        <nav>
            <ul>
                <li>Livraison gratuite dès 20€ (France) <span style={{color:'#7f201b'}}>(+ d'infos)</span></li>
                <li>Coopérative d'Insertion à but non lucratif (+ d'infos)</li>
                <li className='first_li'>
                <svg class="w-6 h-6"  style={{ width:'20px'}}fill="none" stroke="currentColor" 
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                 d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                    </path></svg>
                    <span>Aide</span>
                </li>
                <li className='first_li'>
                    <svg class="w-6 h-6"  style={{ width:'20px'}}fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
                    </path></svg>
                    <span>Notre Projet</span>
                    </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar