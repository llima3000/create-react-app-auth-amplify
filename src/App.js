import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import VideoPlayer from 'react-video-js-player';

Amplify.configure(aws_exports);

const videoSrc = "https://d3ua3db7fl9pwc.cloudfront.net/restinga/main.m3u8"
const poster= "https://echoboomer.pt/wp-content/uploads/2021/07/meo-beachcam.jpg"

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Video Beach</h1>
      <VideoPlayer 
          src={videoSrc}
          poster={poster}
          width="720"
          height="420"
      />
      </div>
    );
  }
}

export default withAuthenticator(App);
