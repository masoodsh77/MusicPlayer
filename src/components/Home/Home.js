import React, { Component } from 'react';
import './Home.css';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
const audioList3 = [
    {
      name: 'Despacito',
      singer: 'Luis Fonsi',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
    },
    {
      name: 'Bedtime Stories',
      singer: 'Jay Chou',
      cover:
        'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
      musicSrc:
        'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
    },
    {
      name: 'Dorost Nemisham',
      singer: 'Sirvan Khosravi',
      cover:
        'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
      musicSrc:
        'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
  ]
class Home extends Component {
    render() {
      console.log(<ReactJkMusicPlayer/>);
        return (
            <div>
                <div className="background">
                    <ReactJkMusicPlayer 
                    audioLists={audioList3} 
                    mode={'full'} 
                    showDownload={false} 
                    toggleMode ={false}
                    />
                </div>
            </div>
        );  
    }
}

export default Home;