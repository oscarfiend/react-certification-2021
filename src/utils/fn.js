export const existVideo = (id, favoriteVideos) => {
  const videoFiltered = favoriteVideos.filter((video) => video.id.videoId === id);
  if (videoFiltered.length > 0) {
    return true;
  }
  return false;
};
