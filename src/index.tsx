import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RocketApp from './RocketApp';
import './styles.css';

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <div className="app-container">
        <RocketApp />
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
