import React from 'react'
import Cardgrid from '../components/CardGrid'
import Card from '../components/Card'
import { Link } from 'react-router-dom'

export default function Rooms() {
   return (
      <Cardgrid>
         {[1, 2, 3, 4, 5, 6, 7].map(number => (
            <Link key={number} to={`/room/${number}`}>
               <Card title="Room Title" creator="Andres Morelos" date={new Date().toDateString()} />
            </Link>
         ))}
      </Cardgrid>
   )
}