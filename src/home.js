import React from 'react';


const homestyle = {
      color: "black",
      backgroundColor: "transparent",
      padding: "10px",
      fontFamily: "Arial",
      marginTop: "50px",
      align:"centre"
    };

class Home extends React.Component {
	render() {
	return (

			<div style={homestyle} >
				      <img src="https://docs.televes.com/web/quienes-somos/corporacion/corporation.png" />
				      <h1> DLT-based UAV Management System</h1>

			</div>
		)
	}
}


export default Home;