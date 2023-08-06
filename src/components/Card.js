import Description from './Description'

export default function Card({item}) {

  return (
    <div className="card">
      <img src={item.image} className='journal-img'/>
      <Description item={item} />
    </div>
  )
}