import React, { Component } from 'react';

const submitstyle ={
	textAlign:'center',
	float:'left',
	marginTop:'50px',
	marginLeft:'100px',
	fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif',
}

const labelstyle={
	 display: 'flex',
  flexDirection: 'row',
  textAlign: 'right',
  width: '400px',
  lineHeight: '36px',
	 ontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif', 
	
}


const inputstyle= {
  height: '30px',
  flex:'0 0 200px',
  marginLeft: '10px',
}

const buttonstyle ={
	backgroundColor: 'grey',
  border: 'none',
  color: 'white',
  padding: '16px 32px',
  textAlign: 'center',
  fontSize: '16px',
  margin: '4px 2px',
  transition: '0.3s',
  display: 'inline-block',
  textDecoration: 'none',
  cursor: 'pointer',
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
        let formValues = this.state.formValues;
        formValues["time"] = this.state.formValues["date"] +" " +this.state.formValues["time"]
         this.setState({formValues})
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
        <label style={labelstyle}>UAV ID
           <input  style={inputstyle} type="text" name="uavId" placeholder="UAV ID" value={this.state.formValues["uavId"]} onChange={this.handleChange.bind(this)} />
            </label><br />

            <label style={labelstyle}>Flight ID
           <input style={inputstyle} type="text" name="flightId" placeholder="Flight ID" value={this.state.formValues["flightId"]} onChange={this.handleChange.bind(this)} />
            </label><br />

            <label style={labelstyle}>Height
           <input  style={inputstyle} type="number" name="height" placeholder="Height" value={this.state.formValues["height"]} onChange={this.handleChange.bind(this)} />
            </label><br />
 			<label style={labelstyle}>Start Longitude
           <input  style={inputstyle} type="text" name="startLongtitude" placeholder="Start Longitude" value={this.state.formValues["startLongtitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label style={labelstyle}>Start Latitude
           <input style={inputstyle} type="text" name="startLatitude" placeholder="Start Latitude" value={this.state.formValues["startLatitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label style={labelstyle}>End Longtitude
           <input style={inputstyle} type="text" name="endLongtitude" placeholder="End Longtitude" value={this.state.formValues["endLongtitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />

              <label style={labelstyle}>End Latitude
           <input style={inputstyle} type="text" name="endLatitude" placeholder="End Latitude" value={this.state.formValues["endLatitude"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label style={labelstyle}>Owner ID
           <input style={inputstyle} type="text" name="ownerId" placeholder="Owner ID" value={this.state.formValues["ownerId"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label style={labelstyle}>Date
           <input style={inputstyle} type="date" name="date" placeholder="Date" value={this.state.formValues["date"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label style={labelstyle}>Time
           <input style={inputstyle} type="time" step="1" name="time" placeholder="Time" value={this.state.formValues["time"]} onChange={this.handleChange.bind(this)} />
            </label><br />






 <input className="btn btn-primary" style={buttonstyle} type="submit" value="Submit" />
      </form>
      </div>

		)
	}
}





export default SubmitFlight;