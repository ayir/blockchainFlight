import React from 'react';
import './App.scss';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Home from './home';
import ListFlight from './FlightPlans/ListFlight';
import SubmitFlight from './FlightPlans/submitflight';
import ListRegulation from './AirspaceRegulations/ListRegulation';
import SubmitRegulation from './AirspaceRegulations/SubmitRegulation';
import ListFlightHistoric from './FlightPlans/ListFlightHistoric';
import ListRegulationHistoric from './AirspaceRegulations/ListRegulationHistoric';

//main app component


class App extends React.Component {

// set states for different views of the App

state = {
  home: true,
  flight_submit: false,
  flight_list: false,
  flight_list_historic:false,
  regulation_submit:false,
  regulation_list:false,
  regulation_list_historic:false
}


//render function to render different components
render() {
  return (
    <div className="televes">
    <header className="televes-header">
    <SideNav
    onSelect={(selected) => {
        if (selected === "home") {
        	this.setState({home: true, flight_list: false, flight_submit: false, regulation_submit: false,regulation_list:false,flight_list_historic:false,regulation_list_historic:false});
        } else if (selected === "flightplan/submit") {
        	this.setState({home: false, flight_list: false, flight_submit: true, regulation_submit: false,regulation_list:false,flight_list_historic:false,regulation_list_historic:false})
        }
        else if (selected === "flightplan/list") {
        	this.setState({home: false, flight_list: true, flight_submit: false, regulation_submit: false,regulation_list:false,flight_list_historic:false,regulation_list_historic:false})
        }
        else if (selected === "regulation/submit") {
        	this.setState({home: false, flight_list: false, flight_submit: false, regulation_submit: true,regulation_list:false,flight_list_historic:false,regulation_list_historic:false})
        }
        else if (selected === "regulation/list") {
        	this.setState({home: false, flight_list: false, flight_submit: false, regulation_submit: false,regulation_list:true,flight_list_historic:false,regulation_list_historic:false})
        }
        else if (selected === "regulation/list_historic") {
        	this.setState({home: false, flight_list: false, flight_submit: false, regulation_submit: false,regulation_list:false,flight_list_historic:false,regulation_list_historic:true})
        }
        else if (selected === "flightplan/list_historic") {
        	this.setState({home: false, flight_list: false, flight_submit: false, regulation_submit: false,regulation_list:false,flight_list_historic:true,regulation_list_historic:false})
        }
    }}>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
    <NavItem eventKey="home">
    <NavIcon>
    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
    </NavIcon>
    <NavText>
    Home
    </NavText>
    </NavItem>
    <NavItem eventKey="flightplan">
    <NavIcon>
    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
    </NavIcon>
    <NavText>
    Flight Plans
    </NavText>
    <NavItem eventKey="flightplan/submit">
    <NavText>
    Submit Flight Plan
    </NavText>
    </NavItem>
    <NavItem eventKey="flightplan/list">
    <NavText>
    List Flight Plans
    </NavText>
    </NavItem>
    <NavItem eventKey="flightplan/list_historic">
    <NavText>
    List Historic Flight Plans
    </NavText>
    </NavItem>

    </NavItem>
    <NavItem eventKey="rules">
    <NavIcon>
    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
    </NavIcon>
    <NavText>
    Regulations
    </NavText>
    <NavItem eventKey="regulation/submit">
    <NavText>
    Submit Regulation
    </NavText>
    </NavItem>
    <NavItem eventKey="regulation/list">
    <NavText>
    List Regulations
    </NavText>
    </NavItem>
    <NavItem eventKey="regulation/list_historic">
    <NavText>
    List Historic Regulations
    </NavText>
    </NavItem>
    </NavItem>
    </SideNav.Nav>
    </SideNav>
    </header>
    <div className='mystyle'>
    { this.state.home && <Home/>}
    { this.state.flight_submit && <SubmitFlight/>}
    { this.state.flight_list && <ListFlight/>}
    { this.state.regulation_list && <ListRegulation/>}
    { this.state.regulation_submit && <SubmitRegulation/>}
    { this.state.regulation_list_historic && <ListRegulationHistoric/>}
    { this.state.flight_list_historic && <ListFlightHistoric/>}
    </div>
    </div>
    );
}
}

export default App;
