export const getCroppedImageUrl = (url: string) => {
  const taret = 'media/';
  const index = url.indexOf(taret) + taret.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};
