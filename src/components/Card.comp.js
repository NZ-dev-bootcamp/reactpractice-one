import classes from './Card.module.css'
import { useState, useRef } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Card(props) {
  const [count, setCount] = useState(0)
  const [prevImage, setPrevImage] = useState([props.image.length - 1])
  const [nextImage, setNextImage] = useState([1])

  const [toggleHover, setToggleHover] = useState(false)
  //Next step: setToggleHover changes state of hoverable classes in div classNames.
  //Find working solution for adding multiple classNames.

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


  // const toggleHoverHandler = (e) => {
  //   if (e.target.alt === "side image" || "arrow") {
  //     setToggleHover(true);
  //     //&& sideImageHover, arrowHover
  //   } else {
  //     setToggleHover(false);
  //     //&& !sideImageHover, !arrowHover
  //   }
  //   console.log(toggleHover);
  // }

  return (
    <div 
    className={classes.cardContainer} 
    // onMouseOver={toggleHoverHandler}
    >

      <div 
      className={classes.sideImageContainer} 
      onClick={imageHandleDecrement}>
          <FiChevronsLeft 
          className={classes.arrow + classes.arrowHover}
          alt="arrow" /> 
          <img 
          className={classes.sideImage + classes.sideImageHover} 
          src={props.image[prevImage]} 
          alt="side image" />
      </div>

      <div 
      className={classes.mainImageContainer}>
        <img 
        className={classes.mainImage} 
        src={props.image[count]} 
        alt="main image" />
      </div>

      <div 
      className={classes.sideImageContainer} 
      onClick={imageHandleIncrement}>
        <FiChevronsRight 
        className={classes.arrow + classes.arrowHover}
        onClick={imageHandleIncrement} 
        alt="arrow" /> 
        <img 
        className={classes.sideImage + classes.sideImageHover}
        alt="side image" 
        src={props.image[nextImage]} /> 
      </div>

    </div>
  )
}

export default Card;
