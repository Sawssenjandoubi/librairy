import React from 'react'
import './SecondNavbar.css'



function SecondNavbar(props) {
  //console.log(props)
  const handleClick=(event)=>{
    props.setSearch(event.target.value)
  }
  
  return (
   <div className='SecondNavbar' >
      
<img src="../logo.jpg" alt='folder' width={'12%'} height={'10%'}/>
<ul className='SecondNavbar'>
   
    <div className='search'>
    <div className='for-search'>
    <li> 
     <select style={{height:'35px',width:'100%'}} onChange={(event)=>handleClick(event)} >
            <option>Fiction</option>
            <option>Bantam Books</option>
            <option>New English Librairy</option>
            
     </select>
    </li>
    <li>
        <input 
        style={{height:'30px',width:'100%'}}
        type="text"
        onChange={(event)=>handleClick(event)}
        placeholder='Chercher titre,auteur,collection,code à barre'
        />
    </li>
    <li className='logo-search'>
        
    <svg class="w-6 h-6" style={{width:'20px',height:'20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </li>
    </div>
    </div>
    <li className='user'>
    <svg class="w-6 h-6"  style={{width:'30px'}}fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
    <span>Se connecter</span>
    </li>
    <li className='user'>
        <svg class="w-6 h-6"   style={{width:'30px'}}fill="none" stroke="red" 
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        <span>Mon panier</span>
    </li>
    </ul>
</div>
        
    
  )
}




export default SecondNavbar