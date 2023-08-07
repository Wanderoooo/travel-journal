import React from "react"
import Card from "./Card"
export default function UserInput({addCard}) {
  
  const [state, setState] = React.useState(
    {
      country: "",
      location: "",
      maps_url: "",
      image_url: "",
      day_a: "",
      month_a: "",
      day_d: "",
      month_d: "",
      summary: ""
    }
  )

  function handleChange(event) {
    const {value, name} = event.target
    console.log(state)
    setState(prevState => {
      return {
        ...prevState,
        [name] : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newCardItem = {image: state.image_url,
    location: state.country,
    title: state.location,
    gmap_url: state.maps_url,
    from_date: `${state.day_a} ${state.month_a}, 2023`,
    to_date: `${state.day_d} ${state.month_d}, 2023`,
    paragraph: state.summary}

    const newCard = <Card item={newCardItem} />
    addCard(newCard)
  }

return (
<div className="userinput">
  <form className="form">
    <section className="userinput-list">
    <section className="countrySection">
    <h4>Country of visit:</h4>
    <input 
      type="text" 
      placeholder="Country"
      name="country"
      onChange={handleChange}
      value={state.country}
    />
    </section>
    
    <section className="locationSection">
    <h4>Location:</h4>
    <input placeholder="Location"
      name="location"
      onChange={handleChange}
      value={state.location} 
    />
    </section>

    <section className="mapsSection">
    <h4>Google Maps url:</h4>
    <input placeholder="Google Maps url"
      name="maps_url"
      onChange={handleChange}
      value={state.maps_url}
     />
    </section>
    </section>

    <section className="userinput-list">
    <section className="imageSection">
    <h4>Image url:</h4>
    <input placeholder="Image" 
      name="image_url"
      onChange={handleChange}
      value={state.image_url}
    />
    </section>

    <section className="arrivalSection">
    <h4>Date of arrival:</h4>
    <label htmlFor="day">{"day:  "}
      <select 
        id="day" 
        name="day_a" 
        className="day"
        onChange={handleChange}
        value={state.day_a}>
          <option value="">--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          </select>
          </label>

    <label htmlFor="month_a">{"  month:  "}
      <select 
        id="month_a" 
        name="month_a"
        onChange={handleChange}
        value={state.month_a}
         >
          <option value="">--</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
      </select>
      </label>
      </section>

      <section className="departureSection">
      <h4>Date of departure:</h4>
      <label htmlFor="day">{"day:  "}
      <select id="day" 
        name="day_d" 
        className="day"
        onChange={handleChange}
        value={state.day_d}
        >
        <option value="">--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
      </select>
    </label>

    <label htmlFor="month_d">{"  month:  "}
      <select id="month_d" 
      name="month_d"
      onChange={handleChange}
      value={state.month_d}>
          <option value="">--</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
      </select>
      </label>
      </section>
      </section>
      <section className="userinput-listbottom">
      <h4>Summary:</h4>
      <textarea className="summary" name="summary"
      onChange={handleChange}
      value={state.summary}></textarea>
      </section>
      <button type="submit" className="submit" onClick={handleSubmit}>Submit</button>
  </form>
</div>
)
}