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
   fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif', 
  
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
        let formValues = this.state.formValues;
        formValues["time"] = this.state.formValues["date"] +" " +this.state.formValues["time"]
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.status)
    });
        xhr.open('POST', 'http://localhost:9000/api/airspace')
        xhr.send(JSON.stringify(this.state.formValues))

    }



  render() {
  return (
<div style={submitstyle}>

<form onSubmit={this.handleSubmit.bind(this)}>
        

            <label style={labelstyle}>Attribute Name
           <input  style={inputstyle} type="text" name="attributeName" placeholder="Attribute Name" value={this.state.formValues["attributeName"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label style={labelstyle}>Operation
             <select  style={inputstyle} name="operation" placeholder="Operation" value={this.state.formValues["operation"]} onChange={this.handleChange.bind(this)}>
            <option value="<">less than</option>
            <option value=">">greater than</option>
            <option value="=">equal to</option>
          </select>
            </label><br />

            <label style={labelstyle}>Height
           <input style={inputstyle} type="text" name="threshold" placeholder="threshold" value={this.state.formValues["threshold"]} onChange={this.handleChange.bind(this)} />
            </label><br />
      <label style={labelstyle}>Start Longitude
           <input style={inputstyle} type="text" name="startLongtitude" placeholder="Start Longitude" value={this.state.formValues["startLongtitude"]} onChange={this.handleChange.bind(this)} />
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
            <label style={labelstyle}>Start Date
           <input style={inputstyle} type="date" name="startdate" placeholder="Start Date" value={this.state.formValues["startdate"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label style={labelstyle}>Start Time
           <input style={inputstyle} type="time" name="starttime" placeholder="Start Time" value={this.state.formValues["starttime"]} onChange={this.handleChange.bind(this)} />
            </label><br />
             <label style={labelstyle}>End Date
           <input style={inputstyle} type="date" name="enddate" placeholder="End Date" value={this.state.formValues["enddate"]} onChange={this.handleChange.bind(this)} />
            </label><br />
            <label style={labelstyle}>End Time
           <input style={inputstyle} type="time" step="1" name="endtime" placeholder="End Time" value={this.state.formValues["endtime"]} onChange={this.handleChange.bind(this)} />
            </label><br />






 <input className="btn btn-primary" style={buttonstyle} type="submit" value="Submit" />
      </form>
      </div>

    )
  }
}



export default SubmitRegulation;