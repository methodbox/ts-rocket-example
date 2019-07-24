import * as React from 'react';
import './styles.css';
// Rocket Info
import { mission } from './data/mission';
import 'bootstrap/dist/css/bootstrap.css';

// Create a State type below this line

export default class RocketApp extends React.Component<{}, {}> {
  state = {
    appTitle: 'SpaceX Launches',
    launchImg: '',
    rocketName: '',
    missionName: '',
    missionLogo: '',
    missionDetails: '',
    missionSuccess: false,
    flightNumber: 0,
    missionId: '',
    launchDate: '',
    payloadSize: 0,
    ships: [],
    isShowingMissionData: false,
  };

  _getNewMission() {
    this.setState({
      // Use this to change the state values when the button is clicked.
      launchImg: require('./assets/2013_-_9_falcon_9_ses_launch-4.jpg'),
      missionLogo: require('./assets/mission-logo.png'),
      isShowingMissionData: true,
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="app-title">{this.state.appTitle}</h1>
        <div className="mx-auto" style={{ width: 200 }}>
          <button type="button" className="btn btn-danger" onClick={() => this._getNewMission()}>
            Get Launch Data
          </button>
        </div>
        {this.state.isShowingMissionData ? (
          <div className="card rocket-info-card">
            <img src={this.state.launchImg} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mission: {this.state.missionName}</h5>
              <img src={this.state.missionLogo} className="mission-logo float-right" />
              <h6 className="card-subtitle mb-2 text-muted">Rocket: {this.state.rocketName}</h6>
              <p className="card-text">{this.state.missionDetails}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Flight Number: <span className="text-info list-margin">{this.state.flightNumber}</span>
              </li>
              <li className="list-group-item">
                Mission ID: <span className="text-info list-margin">{this.state.missionId[0]}</span>
              </li>
              <li className="list-group-item">
                Mission Date: <span className="text-info list-margin">{this.state.launchDate}</span>
              </li>
              <li className="list-group-item">
                Payload Size: <span className="text-info list-margin">{this.state.payloadSize}</span>
              </li>
              <li className="list-group-item">
                Mission Success:
                <span className="text-info list-margin">{this.state.missionSuccess ? 'True' : 'False'}</span>
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5>Ships:</h5>
              </li>
              {this.state.ships.map(shipName => {
                return <li className="list-group-item ship-margin">{shipName}</li>;
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
