import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //save reference that gets returned
  const videoItems = props.videos.map(video => {
    //array of components
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
      );
  });

  return (
    //add class to ul, bootstrap
    <ul className="col-md-4 list-group">
    {/*passing an array (a list of components)*/}
      {videoItems}
    </ul>
  );
};

export default VideoList;
