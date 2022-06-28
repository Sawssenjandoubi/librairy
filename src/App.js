import Navbar from'./components/Navbar/navbar'
import './App.css';
import SecondNavbar from './components/SecondNavbar/SecondNavbar';
import BookList from './components/BookList/BookList';
import React,{useState} from 'react';
import {data} from './data'


function App() {
  const[books,setBooks]=useState(data)
  const[search,setSearch]=useState("")
  return (
    <div className="App">
      <Navbar />
      <SecondNavbar setSearch={setSearch} search={search}/>
      <BookList books={books}  search={search}/>
      
    </div>
  );
}

export default App;
