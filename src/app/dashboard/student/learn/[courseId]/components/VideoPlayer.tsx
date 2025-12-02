'use client';

import YouTube from 'react-youtube';

type VideoPlayerProps = {
    videoId: string;
    title: string;
};

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
    const opts = {
        width: '100%',
        height: '100%',
    } as const;

    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="relative w-full pt-[56.25%]">
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    className="absolute inset-0 h-full w-full"
                    iframeClassName="h-full w-full"
                />
            </div>
            <div className="p-4 border-t border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            </div>
        </div>
    );
};

export default VideoPlayer;
