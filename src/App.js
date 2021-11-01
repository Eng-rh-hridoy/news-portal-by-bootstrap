import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import News from './Components/News/News';

function App() {
  const [Newses, setNewses] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fedff11f83664f59a244de7141a54022')
        .then(res => res.json())
        .then(data => setNewses(data.articles))
    }, [])
  return (
    <div>
      <NavBar></NavBar>
      {
        Newses.map(news => <News news = {news}></News>)
      }
    </div>
  );
}

export default App;
