'use client';

import YouTube from 'react-youtube';

const FeaturesSectionVideo = () => {
    const opts = {
        width: '100%',
        height: '100%',
    } as const;

    return (
        <div className="relative w-full pt-[56.25%]">
            <YouTube
                videoId="tVzUXW6siu0"
                opts={opts}
                className="absolute inset-0 h-full w-full"
                iframeClassName="h-full w-full"
            />
        </div>
    );
};

export default FeaturesSectionVideo;
