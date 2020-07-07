import React, { Component } from 'react';

const submitstyle ={
	textAlign:'center',
	float : 'left',
	fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif',
}


class SubmitFlight extends React.Component {

	constructor(){
		super()
		this.state={
			 formValues: {}
		}
	}


	handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({formValues})
    }

    handleSubmit(event) {
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.status)
    });
        xhr.open('POST', 'https://localhost:9000/api/flightplan')
        xhr.send(JSON.stringify(this.state.formValues))

    }



	render() {
	return (
<div style={submitstyle}>

<form onSubmit={this.handleSubmit.bind(this)}>
        <label>UAV ID
           <input type="text" name="uavId" placeholder="UAV ID" value={this.state.formValues["uavId"]} onChange={this.handleChange.bind(this)} />
            </label><br />

            <label>Flight ID
           <input type="text" name="flightId" placeholder="Flight ID" value={this.state.formValues["flightId"]} onChange={this.handleChange.bind(this)} />
            </label><br />

            <label>Height
           <input type="text" name="height" placeholder="Height" value={this.state.formValues["height"]} onChange={this.handleChange.bind(this)} />
            </label><br />
 			<label>Start Longitude
           <input type="text" name="startLongtitude" placeholder="Start Longitude" value={this.state.formValues["startLongtitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label>Start Latitude
           <input type="text" name="startLatitude" placeholder="Start Latitude" value={this.state.formValues["startLatitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label>End Longtitude
           <input type="text" name="endLongtitude" placeholder="End Longtitude" value={this.state.formValues["endLongtitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />

              <label>End Latitude
           <input type="text" name="endLatitude" placeholder="End Latitude" value={this.state.formValues["endLatitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label>Owner ID
           <input type="text" name="ownerId" placeholder="Owner ID" value={this.state.formValues["ownerId"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label>Date
           <input type="date" name="date" placeholder="Date" value={this.state.formValues["date"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label>Time
           <input type="time" name="time" placeholder="Time" value={this.state.formValues["time"]} onChange={this.handleChange.bind(this)} />
            </label><br />






 <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      </div>

		)
	}
}





export default SubmitFlight;