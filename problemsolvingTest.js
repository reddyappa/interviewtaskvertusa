function processPhotos(L, photos) {
  for (let i = 0; i < photos.length; i++) {
    const [W, H] = photos[i];

    if (W < L || H < L) {
      console.log("UPLOAD ANOTHER");
    } else if (W === H) {
      console.log("ACCEPTED");
    } else {
      console.log("CROP IT");
    }
  }
}

// Example usage:
const L = 180;
const photos = [
  [640, 480],
  [120, 300],
  [180, 180],
];

processPhotos(L, photos);