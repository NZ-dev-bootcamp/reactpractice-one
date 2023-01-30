import CardList from './components/CardList.comp.js'
import { useEffect, useState } from 'react'

/**
 *
 * media queries for mobile view and swipe functionality
 * filter Search By Title, click on Title, display image in Main, display appropaite side images
 *
 *
 */

function App() {
  const listener = window.matchMedia('(min-width: 960px)')

  function importAll(r) {
    return r.keys().map(r)
  }

  const images = importAll(
    require.context('./assets/', false, /\.(png|jpe?g|svg)$/)
  )

  return (
    <div>
      {console.log(listener)}
      <CardList img={images} />
    </div>
  )
}

export default App
