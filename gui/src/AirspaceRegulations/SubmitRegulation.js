import React, {Component} from 'react';

// submit airspace regulation component

class SubmitRegulation extends React.Component {

    constructor() {
        super()
        this.state = {
            formValues: {}
        }
    }

//handle input field changes

handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})
}
     // POST request on click on submit

     handleSubmit(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        formValues["startDateTime"] = this.state.formValues["startdate"] + " " + this.state.formValues["starttime"];
        formValues["endDateTime"] = this.state.formValues["enddate"] + " " + this.state.formValues["endtime"];
        formValues["key"] = "AIRSPACEREGULATION" + formValues["key"]
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.formValues)
        };
        console.log(JSON.stringify(this.state.formValues));
        fetch('http://localhost:9000/api/airspace', requestOptions).then(response => {
            console.log(response);
            alert("Request Submitted");
        }).catch(err=>{
            alert("Error!!Request couldn't be submitted");
        })
        
    }
// render input fields

render() {
    return (
        <div className='submitstyle'> 
        <div className='headingstyle'>Submit Airspace Regulation</div> 
        <form onSubmit={this.handleSubmit.bind(this)}>

        <label className='labelstyle'>Airspace Regulation Key
        <input className='inputstyle' type="number" name="key" placeholder="Airspace regulation key"
        value={this.state.formValues["key"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>Attribute Name
        <input className='inputstyle' type="text" name="attributeName" placeholder="Attribute Name"
        value={this.state.formValues["attributeName"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>Operation
        <select className='inputstyle' name="operation" placeholder="Operation"
        value={this.state.formValues["operation"]} onChange={this.handleChange.bind(this)}>
        <option value="None">None</option>
        <option value="<">less than</option>
        <option value=">">greater than</option>
        <option value="=">equal to</option>
        <option value="!=">not equal to</option>
        </select>
        </label><br/>
        <label className='labelstyle'>Threshold
        <input className='inputstyle' type="text" name="threshold" placeholder="threshold"
        value={this.state.formValues["threshold"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>Start Longitude
        <input className='inputstyle' type="number" step="0.01" name="startLongitude" placeholder="Start Longitude"
        value={this.state.formValues["startLongitude"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>Start Latitude
        <input className='inputstyle' type="number" step="0.01"name="startLatitude" placeholder="Start Latitude"
        value={this.state.formValues["startLatitude"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>End Longitude
        <input className='inputstyle' type="number" step="0.01" name="endLongitude" placeholder="End Longitude"
        value={this.state.formValues["endLongitude"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>End Latitude
        <input className='inputstyle' type="number" step="0.01" name="endLatitude" placeholder="End Latitude"
        value={this.state.formValues["endLatitude"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>Start Date
        <input className='inputstyle' type="date"  name="startdate" placeholder="Start Date"
        value={this.state.formValues["startdate"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>Start Time
        <input className='inputstyle' type="time" step="1" name="starttime" placeholder="Start Time"
        value={this.state.formValues["starttime"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>End Date
        <input className='inputstyle' type="date" name="enddate" placeholder="End Date"
        value={this.state.formValues["enddate"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>
        <label className='labelstyle'>End Time
        <input className='inputstyle' type="time" step="1" name="endtime" placeholder="End Time"
        value={this.state.formValues["endtime"]} onChange={this.handleChange.bind(this)}/>
        </label><br/>

        <input className="btn btn-primary" id='buttonstyle' type="submit" value="Submit"/>
        </form>
        </div>

        )
}
}


export default SubmitRegulation;