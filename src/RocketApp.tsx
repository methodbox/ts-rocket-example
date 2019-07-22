import * as React from 'react';
import './styles.css';
// Rocket Info
import { mission } from './data/rockets';
import 'bootstrap/dist/css/bootstrap.css';
const defaultLaunchImg = require('./assets/2013_-_9_falcon_9_ses_launch-4.jpg');
const defaultLogoImg = require('./assets/mission-logo.png');

const launchImageArray: Array<string> = mission.links.flickr_images;
const launchDateUnix: number = mission.launch_date_unix * 1000;

export default class RocketApp extends React.Component<{}, {}> {
  state = {
    appTitle: 'SpaceX Launches',
    launchImg: defaultLaunchImg,
    rocketName: '',
    missionName: '',
    missionLogo: defaultLogoImg,
    missionDetails: '',
    missionSuccess: false,
    flightNumber: 0,
    missionId: '',
    launchDate: '',
    payloadSize: 0,
    ships: [],
    isShowingMissionData: false,
  };

  _getNewRocket() {
    this.setState({
      rocketName: mission.rocket.rocket_name,
      missionName: mission.mission_name,
      missionLogo: mission.links.mission_patch_small,
      launchImg: launchImageArray[Math.floor(Math.random() * 5)],
      missionDetails: mission.details,
      flightNumber: mission.flight_number,
      missionId: mission.mission_id,
      launchDate: new Date(launchDateUnix).toDateString(),
      missionSuccess: mission.launch_success,
      payloadSize: mission.rocket.payload_mass_kg,
      ships: mission.ships,
      isShowingMissionData: true,
    });
  }
  render() {
    return (
      <div className="container">
        <h1 className="app-title">{this.state.appTitle}</h1>
        <div className="mx-auto" style={{ width: 200 }}>
          <button type="button" className="btn btn-danger" onClick={() => this._getNewRocket()}>
            Get Rocket Data
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
                Mission Success:{' '}
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
