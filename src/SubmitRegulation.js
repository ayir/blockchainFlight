import React, { Component } from 'react';

const submitstyle ={
  textAlign:'center',
  float : 'left',
  fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif',
}


class SubmitRegulation extends React.Component {

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
        xhr.open('POST', 'https://localhost:9000/api/airspace')
        xhr.send(JSON.stringify(this.state.formValues))

    }



  render() {
  return (
<div style={submitstyle}>

<form onSubmit={this.handleSubmit.bind(this)}>
        

            <label>Attribute Name
           <input type="text" name="attributeName" placeholder="Attribute Name" value={this.state.formValues["attributeName"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label>Opertion
           <input type="text" name="operation" placeholder="Operation" value={this.state.formValues["operation"]} onChange={this.handleChange.bind(this)} />
            </label><br />

            <label>Height
           <input type="text" name="threshold" placeholder="threshold" value={this.state.formValues["threshold"]} onChange={this.handleChange.bind(this)} />
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
            <label>Start Date
           <input type="date" name="startdate" placeholder="Start Date" value={this.state.formValues["startdate"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label>Start Time
           <input type="time" name="starttime" placeholder="Start Time" value={this.state.formValues["starttime"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label>End Date
           <input type="date" name="enddate" placeholder="End Date" value={this.state.formValues["enddate"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label>End Time
           <input type="time" name="endtime" placeholder="End Time" value={this.state.formValues["endtime"]} onChange={this.handleChange.bind(this)} />
            </label><br />






 <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      </div>

    )
  }
}



export default SubmitRegulation;