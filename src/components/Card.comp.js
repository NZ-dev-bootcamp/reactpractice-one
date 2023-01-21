import classes from './Card.module.css'
import { useState } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Card(props) {
  const [imageDisplay, setImageDisplay] = useState()

  const imageHandleClick = () => {
    setImageDisplay()
  }

  console.log('CARD COMPONENT', props.image)
  return (
    <div>
      <FiChevronsLeft />
      <img className={classes.image} src={props.image[2]} />
      <FiChevronsRight onClick={imageHandleClick} />
    </div>
  )
}

export default Card
