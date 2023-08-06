import Card from "./Card"
import UserInput from "./UserInput"
import data from "../data"

export default function Hero() {
  const cards = data.map((card) => <Card item={card} />)
  return (
    <div className="hero">
      <UserInput />
      <section className="card-scroll">
        {cards}
      </section>
    </div>
  )
}