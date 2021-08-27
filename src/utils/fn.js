export const existVideo = (etag, favoriteVideos) => {
  const videoFiltered = favoriteVideos.filter((video) => video.etag === etag);
  if (videoFiltered.length > 0) {
    return true;
  }
  return false;
};
