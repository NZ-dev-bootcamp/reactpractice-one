import CardList from './components/CardList.comp.js'

function App() {
  function importAll(r) {
    return r.keys().map(r)
  }

  const images = importAll(
    require.context('./assets/', false, /\.(png|jpe?g|svg)$/)
  )

  console.log(images)

  return (
    <div>
      <CardList />
    </div>
  )
}

export default App
