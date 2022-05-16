import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import VideoPlayer from 'react-video-js-player';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

const VideoJS = () => {
    const videoSrc = "https://d3ua3db7fl9pwc.cloudfront.net/restinga/main.m3u8"
    const poster= "https://echoboomer.pt/wp-content/uploads/2021/07/meo-beachcam.jpg"
    return(
        <div className="App">
            <h1>Video Beach</h1>
            <VideoPlayer 
                src={videoSrc}
                poster={poster}
                width="720"
                height="420"
            />
        </div>
    )
}