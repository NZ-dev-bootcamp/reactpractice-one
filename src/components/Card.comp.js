import classes from './Card.module.css'
import { useState } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Card(props) {
  const [count, setCount] = useState(0)

  const imageHandleIncrement = () => {
    if (count < props.image.length - 1) {
      setCount((prevCount) => prevCount + 1)
      console.log('count ', count)
    }
    if (count === props.image.length - 1) {
      setCount(0)
    }
  }

  const imageHandleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
      console.log('count minus ', count)
    }
  }

  console.log('CARD COMPONENT', props.image)

  return (
    <div>
      <FiChevronsLeft
        className={classes.arrow}
        onClick={imageHandleDecrement}
      />
      <img className={classes.image} src={props.image[count]} />
      {count}
      <FiChevronsRight
        className={classes.arrow}
        onClick={imageHandleIncrement}
      />
    </div>
  )
}

export default Card
