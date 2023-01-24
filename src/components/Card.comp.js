// import classes from './Card.module.css'
// import { useState } from 'react'
// import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
// import { useEffect } from 'react'

// function Card(props) {
//   const [count, setCount] = useState(0)
//   const [lastCount, setLastCount] = useState(1)
//   const [nextCount, setNextCount] = useState(props.image.length - 1)

//   useEffect(() => {
//     // setCount(0)
//     if (count < props.image.length - 1) {
//       setNextCount(count + 1)
//       if (count <= 0) {
//         setLastCount(props.image.length - 1)
//       } else {
//         setLastCount(count - 1)
//       }
//     }
//     if (count > 0) {
//       setLastCount(count - 1)
//     }
//   }, [lastCount, nextCount, count])

//   function imageHandleIncrement() {
//     if (count < props.image.length - 1) {
//       setCount((prevCount) => prevCount + 1) //working
//     }

//     if (count === props.image.length - 1) {
//       setCount(0) //working
//     }
//   }

//   const imageHandleDecrement = () => {
//     if (count > 0) {
//       setCount((prevCount) => prevCount - 1)
//     } else {
//       setCount((prevCount) => prevCount - 1)
//       setCount(props.image.length - 1)
//     }

//     setLastCount(count - 1)
//   }

//   return (
//     <div className={classes.container}>
//       <div className={classes.thumbnail} onClick={() => imageHandleDecrement()}>
//         <img className={classes.smallImage} src={props.image[lastCount]} />
//         <FiChevronsLeft className={classes.arrow} />
//       </div>
//       <img className={classes.image} src={props.image[count]} />
//       <div className={classes.thumbnail} onClick={() => imageHandleIncrement()}>
//         <img className={classes.smallImage} src={props.image[nextCount]} />
//         <FiChevronsRight className={classes.arrow} />
//       </div>
//       <ul>
//         <li>decrement = {lastCount}</li>
//         <li>Current image = {count}</li>
//         <li>Increment = {nextCount}</li>
//       </ul>
//     </div>
//   )
// }

// export default Card

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

  return (
    <div className={classes.container}>
      <div className={classes.thumbnail} onClick={imageHandleDecrement}>
        <img className={classes.smallImage} src={props.image[prevImage]} />
        <FiChevronsLeft className={classes.arrow} />
      </div>

      <img className={classes.image} src={props.image[count]} />
      <div className={classes.thumbnail} onClick={imageHandleIncrement}>
        <img className={classes.smallImage} src={props.image[nextImage]} />
        <FiChevronsRight className={classes.arrow} />
      </div>
    </div>
  )
}

export default Card
