import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Aside from './Aside';
import Posts from './Posts';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
        <Main title="These are all posts...">
          <Posts />
        </Main>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
