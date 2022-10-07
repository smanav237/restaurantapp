import React from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = React.useState(false);
  const vidRef = React.useRef();
  
  const handlevideo = ()=>{
    setplayVideo((prevPlayVideo)=> !prevPlayVideo)   // toggle on->off and off->on
      
    if(playVideo)
       {
        vidRef.current.pause();
       }
       else{
        vidRef.current.play();
       }
    }

  return(
  <div className="app__video">
    <video 
    src={meal}
    ref={vidRef}
    type="video/mp4"
    loopcontrols={false}
    muted
    />
    <div className="app__video-overlay flex__center">
    <div 
    className="app__video-overlay_circle flex__center"
    onClick={handlevideo}
    >
    {playVideo ? (<BsPauseFill color="#fff" fontSize={35}/>) : (<BsFillPlayFill color="#fff" fontSize={35}/>)}
    </div>
    </div>
    </div>
)};

export default Intro;
