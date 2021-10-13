let pickupLocation;

const distanceFromHqInBlocks = (pickupLocation) => {
    return Math.abs(42 - pickupLocation);
}

const distanceFromHqInFeet = (pickupLocation) => {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

let start;
let end;
const distanceTravelledInFeet = (start, end) => {
    return Math.abs(start-end)*264;
}

const calculatesFarePrice = (start, end) => {
    if(distanceTravelledInFeet(start, end) > 2500) {
        return "cannot travel that far";
    } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet (start, end) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, end) <= 400) {
        return 0;
    } else {
        return (distanceTravelledInFeet(start, end)-400)*0.02;
    }
}