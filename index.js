// Code your solution in this file!
function distanceFromHqInBlocks(b) {
    return Math.abs(42-b)
}

function distanceFromHqInFeet(b) {
    return distanceFromHqInBlocks(b)*264
}

function distanceTravelledInFeet(b1, b2) {
    return Math.abs(b1-b2)*264
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    if (dist <= 400) {
        return 0;
    } else if (dist>400 && dist<=2000 ) {
        return (dist-400)*2/100;
    } else if (dist>2000 && dist<2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }

}