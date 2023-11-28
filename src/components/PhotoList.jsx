import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.pexels.com/videos/search?query=exercise&per_page=10',
                    {
                        headers: {
                            Authorization: '39O4z6ZYrZrg4MjtkHQEBwNd5QaIUbMoBHqHiB6VtIkbf2ld3Q7a6o6a'
                        },
                    }
                );
                setVideos(response.data.videos);
            } catch (error) {
                console.error('Error al obtener videos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="video-gallery items-center" style={{ width: '100%' }}>
                {videos.slice(3, 4).map((video) => (
                    <video
                        key={video.id}
                        controls
                        autoPlay
                        loop
                        muted // Opcional para autoplay en algunos navegadores
                        style={{ width: '100%', height:'auto'}}
                    >
                        <source src={video.video_files[0].link} type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>
                ))}
            </div>
        </div>
    );
};

export default VideoList;