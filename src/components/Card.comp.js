import classes from './Card.module.css'
import { useState, useEffect } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

function Card(props) {
  const [count, setCount] = useState(0)
  const [prevImage, setPrevImage] = useState([props.image.length - 1])
  const [nextImage, setNextImage] = useState([1])

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

  // const hoverThis = () => {
  //   document.querySelector('.arrowHover').addEventListener('mouseenter', () => {
  //     this.style.display = 'visible'
  //   })
  // }

  function onHoverChangeHandler(e) {
    console.log('on hover')
    console.log('e target', e.target)
    e.target.style.visibility = className = 'visibility: visible'
  }

  return (
    <div className={classes.cardContainer}>
      <div
        className={classes.sideImageContainer}
        onClick={imageHandleDecrement}
      >
        <FiChevronsLeft className={classes.arrow} />
        <img
          // onHover={hoverThis}
          className={`${classes.sideImage} "img"`}
          src={props.image[prevImage]}
        />
      </div>

      <div className={classes.mainImageContainer}>
        <img className={classes.mainImage} src={props.image[count]} />
      </div>

      <div
        className={classes.sideImageContainer}
        onClick={imageHandleIncrement}
      >
        <FiChevronsRight className={classes.arrow} />
        <img
          onMouseOver={onHoverChangeHandler}
          className={`${classes.sideImage} "img"`}
          src={props.image[nextImage]}
        />
      </div>
    </div>
  )
}

export default Card
