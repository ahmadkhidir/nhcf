import React from 'react';
import './App.css';
import web from './Web.png'
import mobile from './mobile.png'

function App(props) {
  return (
    <main className='App'>
      <picture>
        <source srcSet={mobile} media='(max-width: 500px)' draggable={false}></source>
        <img srcSet={web} draggable={false} />
      </picture>
      <section className='button'>
        <p>This event requires you to pre-register</p>
        <a href="" target={"_blank"}>Start Registration</a>
      </section>
    </main>
  )
}
export default App;
