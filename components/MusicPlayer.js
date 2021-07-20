import ReactPlayer from 'react-player'
import SpotifyPlayer from 'react-spotify-player';

export default function MusicPlayer({soundCloudUrl}) {
    const size = {
        width: '100%',
        height: 400,
      };
      const view = 'coverart'; // or 'coverart'
      const theme = 'black'; // or 'white'
    return (
           
          <SpotifyPlayer
            uri={soundCloudUrl}
            size={size}
            view={view}
            theme={theme}
          />
        // <ReactPlayer
        //     config={{
        //         soundcloud: {
        //             options: {
        //                 auto_play: true
        //             }
        //         }
        //     }}
        //     width="100%"
        //     height="100%"
        //     volume={1}
        //     url={soundCloudUrl}
        // />
    )
}
