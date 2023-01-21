import classes from './Card.module.css'
import { useState } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Card(props) {
  const [count, setCount] = useState(0)

  const imageHandleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
    console.log('count ', count)
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
      <FiChevronsLeft onClick={imageHandleDecrement} />
      <img className={classes.image} src={props.image[count]} />
      {count}
      <FiChevronsRight onClick={imageHandleIncrement} />
    </div>
  )
}

export default Card
