import Card from "./Card"
import UserInput from "./UserInput"

export default function Hero() {
  const cards = <Card />
  return (
    <div className="hero">
      <UserInput />
      {cards}
    </div>
  )
}