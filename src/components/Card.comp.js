import classes from './Card.module.css'
import { useState } from 'react'

function Card(props) {
  const [imageDisplay, setImageDisplay] = useState()

  console.log('CARD COMPONENT', props.image)
  return (
    <div>
      <img className={classes.image} src={props.image[2]} />
    </div>
  )
}

export default Card
