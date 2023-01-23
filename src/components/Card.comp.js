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
    } else {
      setCount((prevCount) => prevCount - 1)
      setCount(props.image.length - 1)
    }
  }

  console.log('CARD COMPONENT', props.image)

  return (
    <div className={classes.container}>
      <div className={classes.thumbnail} onClick={imageHandleIncrement}>
        {/* <img className={classes.smallImage} src={props.image[count - 1]} /> */}
        <FiChevronsLeft
          className={classes.arrow}
          onClick={imageHandleDecrement}
        />
      </div>
      <img className={classes.image} src={props.image[count]} />
      <div className={classes.thumbnail} onClick={imageHandleIncrement}>
        {/* <img className={classes.smallImage} src={props.image[count + 1]} /> */}
        <FiChevronsRight className={classes.arrow} />
      </div>
      {count}
    </div>
  )
}

export default Card
