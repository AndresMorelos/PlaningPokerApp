import React from 'react'
import PokerCard from '../components/PokerCard'
import Cardgrid from '../components/CardGrid'
import { Tab } from '@headlessui/react'
import { useParams } from 'react-router-dom'

type RoomParams = {
   roomId: string | undefined
}

const Room = () => {
   const { roomId } = useParams<RoomParams>();
   const activeClass = 'text-white bg-gray-900'
   const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-700'

   return (
      <div className="grid grid-rows-5 grid-flow-col gap-4">
         <div className="row-span-4 col-span-2 border border-dashed border-gray-700 p-4">
            <Cardgrid cols="5">
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, '?', 'C'].map(value => <PokerCard key={value} value={value} />)}
            </Cardgrid>
         </div>
         <div className="col-span-2 border border-dashed border-gray-700 p-4">
            <Tab.Group>
               <Tab.List className="p-3 bg-gray-800">
                  <Tab className={({ selected }) => `px-3 py-2 rounded-md text-sm font-medium ${selected ? activeClass : inactiveClass}`}>
                     Active Stories
                  </Tab>
                  <Tab className={({ selected }) => `px-3 py-2 rounded-md text-sm font-medium ${selected ? activeClass : inactiveClass}`}>
                     Completed Stories
                  </Tab>
                  <Tab className={({ selected }) => `px-3 py-2 rounded-md text-sm font-medium ${selected ? activeClass : inactiveClass}`}>
                     All Stories
                  </Tab>
               </Tab.List>
               <Tab.Panels className="bg-white">
                  <Tab.Panel>
                     Content 1
                  </Tab.Panel>
                  <Tab.Panel>
                     Content 2
                  </Tab.Panel>
                  <Tab.Panel>
                     Content 3
                  </Tab.Panel>
               </Tab.Panels>
            </Tab.Group>
         </div>
         <div className="row-span-5 border border-dashed border-gray-700 p-4">3</div>
      </div>
   )
}
export default Room