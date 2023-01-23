import classes from './Card.module.css'
import { useState } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { useEffect } from 'react'

function Card(props) {
  const [count, setCount] = useState(0)
  const [lastCount, setLastCount] = useState(1)
  const [nextCount, setNextCount] = useState(props.image.length - 1)

  useEffect(() => {
    // setCount(0)
    if (count < props.image.length - 1) {
      setNextCount(count + 1)
      if (count <= 0) {
        setLastCount(props.image.length - 1)
      } else {
        setLastCount(count - 1)
      }
    }
  }, [lastCount, nextCount, count])

  function imageHandleIncrement() {
    if (count < props.image.length - 1) {
      setCount((prevCount) => prevCount + 1) //working
      // setNextCount(count + 1)
      // setLastCount(count - 1)
    }

    if (count === props.image.length - 1) {
      setCount(0) //working
    }

    // if (nextCount === props.image.length - 1) {
    //   setNextCount(0)
    // } // working

    // if (nextCount < props.image.length - 1) {
    //   setNextCount(count + 1)
    //   setLastCount(lastCount - 1)
    // } // working
  }

  const imageHandleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1)
    } else {
      setCount((prevCount) => prevCount - 1)
      setCount(props.image.length - 1)
    }

    setLastCount(count - 1)
  }

  return (
    <div className={classes.container}>
      <div className={classes.thumbnail} onClick={() => imageHandleDecrement()}>
        <img className={classes.smallImage} src={props.image[lastCount]} />
        <FiChevronsLeft className={classes.arrow} />
      </div>
      <img className={classes.image} src={props.image[count]} />
      <div className={classes.thumbnail} onClick={() => imageHandleIncrement()}>
        <img className={classes.smallImage} src={props.image[nextCount]} />
        <FiChevronsRight className={classes.arrow} />
      </div>
      <ul>
        <li>decrement = {lastCount}</li>
        <li>Current image = {count}</li>
        <li>Increment = {nextCount}</li>
      </ul>
    </div>
  )
}

export default Card
