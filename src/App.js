import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './components/MyCard';
import MyCardsList from './components/MyCardsList';
import FetchDataHoc from './components/hoc/FetchDataHoc';

function App() {
  
  const MyCardsListWithData = FetchDataHoc(MyCardsList, 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=056295d06fee48e8bb7a2e15574ad904')
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>BBC NEWS</h1>
      <MyCardsListWithData />
    </div>
  );
}

export default App;
