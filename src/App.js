import React from 'react'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Form from './components/Form'
import Categroria from './components/Categoria';
import Pelicula from './components/Pelicula';

//instalar node

function App() {
  return (
    <>
    <Navbar />
    <br/>
    <Form />
    <div class="container mt-3">
    <Categroria />
    <div class="media-scroller media-scroller--with-groups snaps-inline scrollable-element"> 
      <div className="media-group"> 
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
      </div>
      <div className="media-group"> 
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
      </div>
    </div>
    </div>
    <div class="container mt-3">
    <Categroria />
    <div class="media-scroller media-scroller--with-groups snaps-inline scrollable-element"> 
      <div className="media-group"> 
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
      </div>
      <div className="media-group"> 
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
      </div>
    </div>
    </div>
    <div class="container mt-3">
    <Categroria />
    <div class="media-scroller media-scroller--with-groups snaps-inline scrollable-element"> 
      <div className="media-group"> 
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
      </div>
      <div className="media-group"> 
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
        <Pelicula />
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
