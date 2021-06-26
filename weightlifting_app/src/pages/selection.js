import React from 'react'
import CardWithLinks from '../components/card-with-links'
import {Link} from 'react-router-dom'

const Selection = () => {
  return (
    <>
      <CardWithLinks title='Snatch'/>
      <CardWithLinks title='Clean' disabled/>
    </>
  )
}

export default Selection