import React, {Component} from 'react';


const submitstyle = {
    textAlign: 'center',
    float: 'left',
    marginLeft: '100px',
    fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif',
}
const headingstyle={
    fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif',
    fontSize :'20px',
    marginBottom : '20px',
 textAlign: 'center'
}
const labelstyle = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'right',
    width: '400px',
    lineHeight: '36px',
    fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif',

}


const inputstyle = {
    height: '30px',
    flex: '0 0 200px',
    marginLeft: '10px',
}

const buttonstyle = {
    backgroundColor: 'grey',
    border: 'none',
    color: 'white',
    padding: '10px 32px',
    textAlign: 'center',
    fontSize: '16px',
    margin: '4px 2px',
    transition: '0.3s',
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
}


class SubmitRegulation extends React.Component {

    constructor() {
        super()
        this.state = {
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
        formValues["startDateTime"] = this.state.formValues["startdate"] + " " + this.state.formValues["starttime"];
        formValues["endDateTime"] = this.state.formValues["enddate"] + " " + this.state.formValues["endtime"];
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
            alert("Error!!Request cannot be submitted");
        })
       
    }

    render() {
        return (
            <div style={submitstyle}> 
                <div style={headingstyle}>Submit Airspace Regulation</div> 
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <label style={labelstyle}>Airspace regulation key
                        <input style={inputstyle} type="text" name="key" placeholder="Airspace regulation key"
                               value={this.state.formValues["key"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>Attribute Name
                        <input style={inputstyle} type="text" name="attributeName" placeholder="Attribute Name"
                               value={this.state.formValues["attributeName"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>Operation
                        <select style={inputstyle} name="operation" placeholder="Operation"
                                value={this.state.formValues["operation"]} onChange={this.handleChange.bind(this)}>
                                <option value="None">None</option>
                            <option value="<">less than</option>
                            <option value=">">greater than</option>
                            <option value="=">equal to</option>
                            <option value="!=">not equal to</option>
                        </select>
                    </label><br/>
                    <label style={labelstyle}>Threshold
                        <input style={inputstyle} type="text" name="threshold" placeholder="threshold"
                               value={this.state.formValues["threshold"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>Start Longitude
                        <input style={inputstyle} type="text" name="startLongitude" placeholder="Start Longitude"
                               value={this.state.formValues["startLongitude"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>Start Latitude
                        <input style={inputstyle} type="text" name="startLatitude" placeholder="Start Latitude"
                               value={this.state.formValues["startLatitude"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>End Longitude
                        <input style={inputstyle} type="text" name="endLongitude" placeholder="End Longitude"
                               value={this.state.formValues["endLongitude"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>End Latitude
                        <input style={inputstyle} type="text" name="endLatitude" placeholder="End Latitude"
                               value={this.state.formValues["endLatitude"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>Start Date
                        <input style={inputstyle} type="date"  name="startdate" placeholder="Start Date"
                               value={this.state.formValues["startdate"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>Start Time
                        <input style={inputstyle} type="time" step="1" name="starttime" placeholder="Start Time"
                               value={this.state.formValues["starttime"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>End Date
                        <input style={inputstyle} type="date" name="enddate" placeholder="End Date"
                               value={this.state.formValues["enddate"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>
                    <label style={labelstyle}>End Time
                        <input style={inputstyle} type="time" step="1" name="endtime" placeholder="End Time"
                               value={this.state.formValues["endtime"]} onChange={this.handleChange.bind(this)}/>
                    </label><br/>

                    <input className="btn btn-primary" style={buttonstyle} type="submit" value="Submit"/>
                </form>
            </div>

        )
    }
}


export default SubmitRegulation;