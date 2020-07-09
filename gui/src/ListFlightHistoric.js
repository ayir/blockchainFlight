import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const headingstyle={
    fontFamily: 'Arial Unicode MS, Lucida Sans Unicode, Code2000, sans-serif',
    fontSize :'20px',
    marginBottom : '20px',
 textAlign: 'center'
}

class ListFlightHistoric extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "UAV ID", field: "uavId"
      }, {
        headerName: "Height", field: "height"
      }, 
      {
        headerName: "Flight ID", field: "flightId"
      },
      {
        headerName: "Owner ID", field: "ownerId"
      },
      {
        headerName: "Stard Location", field: "startLocation"
      },
      {
        headerName: "End Location", field: "endLocation"
      },

      {
        headerName: "Start Date & Time", field: "time"
      }],
     
    }
  }

 componentDidMount() {
   fetch('http://localhost:9000/api/flightplan?historicData=true')
 .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            this.setState({ rowData: data.body })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
 
 }
	render() {
	return (
<div>
<div style={headingstyle}>Historic Flight Plans</div>
	<div
        className="ag-theme-alpine"
        style={{
        marginTop:'50px',

        height: '720px',
        width: '1000px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
      </div>

  )

		
	}
}


export default ListFlightHistoric;
