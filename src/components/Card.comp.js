import classes from './Card.module.css'
import { useState, useEffect } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Card(props) {
  const [count, setCount] = useState(0)
  const [prevImage, setPrevImage] = useState([props.image.length - 1])
  const [nextImage, setNextImage] = useState([1])
  const [toggle, setToggle] = useState(false)
  const [toggleRight, setToggleRight] = useState(false)

  const imageHandleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
    setNextImage(count + 2)
    setPrevImage(count)

    if (count === props.image.length - 1) {
      setCount(0)
      setNextImage([1])
      setPrevImage(props.image.length - 1)
    }

    if (count === props.image.length - 2) {
      setNextImage([0])
    }
  }

  const imageHandleDecrement = () => {
    setCount((prevCount) => prevCount - 1)
    setPrevImage(count - 2)
    setNextImage(count)

    if (count === 0) {
      setCount(props.image.length - 1)
      setPrevImage(props.image.length - 2)
    }

    if (count === 1) {
      setPrevImage(props.image.length - 1)
    }
  }

  console.log(count)

  function onHoverChangeHandler(e) {
    setToggle(true)
  }
  function offHoverChangeHandler(e) {
    setToggle(false)
  }
  function onHoverChangeHandlerRight(e) {
    setToggleRight(true)
  }
  function offHoverChangeHandlerRight(e) {
    setToggleRight(false)
  }

  return (
    <div className={classes.cardContainer}>
      <div
        className={classes.sideImageContainer}
        onClick={imageHandleDecrement}
      >
        <FiChevronsLeft
          onMouseOver={onHoverChangeHandler}
          onMouseOut={offHoverChangeHandler}
          className={classes.arrow}
        />
        <img
          onMouseOver={onHoverChangeHandler}
          onMouseOut={offHoverChangeHandler}
          className={`${classes.sideImage} ${toggle && classes.sideImageHover}`}
          src={props.image[prevImage]}
        />
      </div>

      <div className={classes.mainImageContainer}>
        <img className={classes.mainImage} src={props.image[count]} />
      </div>

      <div
        className={classes.sideImageContainer}
        onMouseOver={onHoverChangeHandlerRight}
        onMouseOut={offHoverChangeHandlerRight}
      >
        <FiChevronsRight
          className={classes.arrow}
          onClick={imageHandleIncrement}
          onMouseOver={onHoverChangeHandlerRight}
          onMouseOut={offHoverChangeHandlerRight}
        />
        <img
          onMouseOver={onHoverChangeHandlerRight}
          onMouseOut={offHoverChangeHandlerRight}
          onClick={imageHandleIncrement}
          className={`${classes.sideImage} ${
            toggleRight && classes.sideImageHover
          }`}
          src={props.image[nextImage]}
        />
      </div>
    </div>
  )
}

export default Card
