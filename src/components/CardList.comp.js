import Card from './Card.comp.js'

function CardList(props) {
  return (
    <div>
      <Card image={props.img} />
    </div>
  )
}

export default CardList
