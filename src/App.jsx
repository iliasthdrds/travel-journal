import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './components/Data';



export default function App() {
 
 const cardElements = Data.map(item => {
        return( 
            <Card
            key={item.id}
            {...item}
            />
        )
    })
 
 
  return ( 
        <div>
        <Navbar />
        <section className="cards-list">
        {cardElements}
        </section>
        </div>
    )
}
 
 
 
 
 
