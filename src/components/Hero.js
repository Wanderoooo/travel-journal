import Card from "./Card"
import UserInput from "./UserInput"
import data from "../data"
import React from "react"

export default function Hero() {
  const cards = data.map((card) => <Card item={card} />)

  const [cardState, setCardState] = React.useState(cards)

  function addCard(oneCard) {
    setCardState(prevState => {
      console.log(oneCard)
      return [
        ...prevState,
        oneCard
      ]
    })
  }

  return (
    <div className="hero">
      <UserInput addCard={addCard}/>
      <section className="card-scroll">
        {cardState}
      </section>
    </div>
  )
}