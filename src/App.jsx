import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './components/Data';



export default function App() {
 
 const cardElements = Data.map((item, index)=> {
        return( 
            <Card
            key={item.id}
            {...item}
            isLast={index === Data.length - 1}
            />
        )
    })
 
 
  return ( 
        <div>
        <Navbar />
        <section className="cards--list">
        {cardElements}
        </section>
        </div>
    )
}