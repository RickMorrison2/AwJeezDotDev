import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

const VideoPlayer = (props) => {
    const playerRef = useRef();
    const videoOptions = {
        autoplay: 'muted',
        controls: true,
        loop: true,
        preload: 'auto',
        sources: [
            {
                src: 'vid/TreesLoop.mp4',
                type: 'video/mp4',
            },
        ],
    };

    useEffect(() => {
        const player = videojs(playerRef.current, videoOptions, () => {
            console.log('video player ready');
        });
        return () => {
            player.dispose();
        };
    }, [videoOptions]);

    return (
        <div data-vjs-player>
            <video ref={playerRef} className="player video-js" playsInline />
        </div>
    )
}

export default VideoPlayer;