import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


class ListRegulation extends React.Component {
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
   fetch('file:///Users/riyasharma/Desktop/flightplan/my-app/src/sample.json')
 .then(result => result.json())
 .then(rowData => this.setState({rowData}))
 }

	render() {
	return (

	<div
        className="ag-theme-alpine"
        style={{
        height: '600px',
        width: 'auto' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
  )

		
	}
}


export default ListRegulation;
