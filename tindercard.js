import Person from '@material-ui/icons/Person.js'
import axios from './axios'

import React, { useEffect } from 'react'
import { useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../style/t_card.css'
function Tindercard() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/card')
      setPeople(req.data)
    }

    fetchData()
  }, [])

  const swiped = (direction, nameToDelete) => {}
  const outOfFrame = (name) => {}

  return (
    <div className='t_card'>
      <div className='cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default Tindercard
