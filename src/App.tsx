import React, { Fragment } from 'react';
import './App.css';
import ArtworkList from './componets/artwork-list/ArtworkList';
import Home from './componets/home/Home';
import Searcher from './componets/searcher/Searcher';


function App() {
  return (
    <>
      <section className='home'>
        <Home />
      </section>
      <section className='content'>
        <Searcher onSearch={(query: string) => { }} />
        <ArtworkList />
      </section>
    </>
  );
}

export default App;
