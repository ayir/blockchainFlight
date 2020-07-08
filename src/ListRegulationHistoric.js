import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


class ListRegulationHistoric extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Attribute Name", field: "attributeName"
      }, {
        headerName: "Threshold", field: "threshold"
      }, 
      {
        headerName: "Operation", field: "operation"
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
   fetch('https://localhost:9000/api/airspace?historicData=true')
 .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            this.setState({ rowData: data })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
 
 }

	render() {
	return (

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
  )

		
	}
}


export default ListRegulationHistoric;
