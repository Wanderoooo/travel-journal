export default function Description({item}) {
  return (
    <div className="description">
      <label><img src={require('../images/location_icon.png')} />{item.location}</label>
      <a href={item.gmap_url} target="_blank" className='maplink_2'><p className='maplink'>View on Google Maps</p></a>
      <h1>{item.title}</h1>
      <strong><h4>{`${item.from_date} - ${item.to_date}`}</h4></strong>
      <p className="summary">{item.paragraph}</p>
    </div>
  )
}