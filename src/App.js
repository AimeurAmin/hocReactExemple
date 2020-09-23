import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './components/MyCard';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>BBC NEWS</h1>
      <MyCard 
        data={{
          title: "Mourners gather to honour Ruth Bader Ginsburg",
          description: "US judge and feminist icon Ruth Bader Ginsburg is lying in repose at the top court where she served.",
          urlToImage: 'https://ichef.bbci.co.uk/news/1024/branded_news/AB01/production/_114577734_reuters.jpg',
          publishedAt: '2020-09-23T17:07:17.8137118Z'
        }}
        
        />
    </div>
  );
}

export default App;
