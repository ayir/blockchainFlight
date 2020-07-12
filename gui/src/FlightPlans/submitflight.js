import React, { Component } from 'react';

//submit flight plan component

class SubmitFlight extends React.Component {

	constructor(){
		super()
		this.state={
      formValues: {}
    }
  }



//event handling on input fields 
handleChange(event) {
  event.preventDefault();
  let formValues = this.state.formValues;
  let name = event.target.name;
  let value = event.target.value;
  formValues[name] = value;

  this.setState({formValues})
}

//POST request on submit button click
async handleSubmit(event) {
  event.preventDefault();
  let formValues = this.state.formValues;
  formValues["time"] = this.state.formValues["date"] +" " +this.state.formValues["time"]
  formValues["key"] = "FLIGHTPLAN" + formValues["key"]
  this.setState({formValues});

  console.log("Input Data: ", JSON.stringify(this.state.formValues));
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(this.state.formValues)
  };
  fetch('http://localhost:9000/api/flightplan', requestOptions).then(response => {
    console.log(response);
    alert("Request Submitted");
  }).catch(err=>{
    alert("Error!!Request couldn't be submitted");
  })
  
}


//render components
render() {
	return (
    <div className='submitstyle'>
    <div className='headingstyle'>Submit Flight Plan</div> 
    <form onSubmit={this.handleSubmit.bind(this)}>
    <label className='labelstyle'>Flight Plan Key
    <input  className='inputstyle' type="number" name="key" placeholder="Flight Plan Key" value={this.state.formValues["key"]} onChange={this.handleChange.bind(this)} />
    </label><br />
    <label className='labelstyle'>UAV ID
    <input  className='inputstyle' type="text" name="uavId" placeholder="UAV ID" value={this.state.formValues["uavId"]} onChange={this.handleChange.bind(this)} />
    </label><br />

    <label className='labelstyle'>Flight ID
    <input className='inputstyle'type="text" name="flightId" placeholder="Flight ID" value={this.state.formValues["flightId"]} onChange={this.handleChange.bind(this)} />
    </label><br />

    <label className='labelstyle'>Height
    <input  className='inputstyle' type="number" name="height" placeholder="Height" value={this.state.formValues["height"]} onChange={this.handleChange.bind(this)} />
    </label><br />
    <label className='labelstyle'>Start Longitude
    <input  className='inputstyle' type="number" step="0.01" name="startLongitude" placeholder="Start Longitude" value={this.state.formValues["startLongitude"]} onChange={this.handleChange.bind(this)} />
    </label><br />
    <label className='labelstyle'>Start Latitude
    <input className='inputstyle' type="number" step="0.01" name="startLatitude" placeholder="Start Latitude" value={this.state.formValues["startLatitude"]} onChange={this.handleChange.bind(this)} />
    </label><br />
    <label className='labelstyle'>End Longitude
    <input className='inputstyle' type="number" step="0.01" name="endLongitude" placeholder="End Longitude" value={this.state.formValues["endLongitude"]} onChange={this.handleChange.bind(this)} />
    </label><br />

    <label className='labelstyle'>End Latitude
    <input className='inputstyle' type="number" step="0.01" name="endLatitude" placeholder="End Latitude" value={this.state.formValues["endLatitude"]} onChange={this.handleChange.bind(this)} />
    </label><br />
    <label className='labelstyle'>Owner ID
    <input className='inputstyle' type="text" name="ownerId" placeholder="Owner ID" value={this.state.formValues["ownerId"]} onChange={this.handleChange.bind(this)} />
    </label><br />
    <label className='labelstyle'>Date
    <input className='inputstyle' type="date" name="date" placeholder="Date" value={this.state.formValues["date"]} onChange={this.handleChange.bind(this)} />
    </label><br />
    <label className='labelstyle'>Time
    <input className='inputstyle' type="time" step="1" name="time" placeholder="Time" value={this.state.formValues["time"]} onChange={this.handleChange.bind(this)} />
    </label><br />






    <input className="btn btn-primary" id='buttonstyle' type="submit" value="Submit" />
    </form>
    </div>

    )
}
}





export default SubmitFlight;