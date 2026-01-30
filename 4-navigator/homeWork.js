const positionLat = 10; 
const positionLong = 5; 
const addressLat = 8; 
const addressLong = 4; 

const distanceX = addressLat - positionLat;
const distanceY = addressLong - positionLong;

const getDistance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
console.log(`Расстояние между объектами: ${getDistance}`)

