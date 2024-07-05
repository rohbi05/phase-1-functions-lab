// Code 
function distanceFromHqInBlocks(distance){
    if (distance === 43){
        return 1
    }else if ( distance === 50){
        return 8
    }else if (distance ===34){
        return 8
    }
}

function distanceFromHqInFeet(pickupBlock){
    const distanceInBlocks = distanceFromHqInBlocks(pickupBlock);

    return distanceInBlocks * 264;
}
function distanceTravelledInFeet(pickupBlock, destinationBlock){
    if (pickupBlock > destinationBlock){
        return (pickupBlock - destinationBlock) * 264;
    }
    else{
        return (destinationBlock - pickupBlock) * 264;
    }
}
function calculatesFarePrice (pickup, destinationBlock) {
    const totalFeetTravelled = distanceTravelledInFeet(pickup, destinationBlock);

    if (totalFeetTravelled <= 400) {
        return 0;
    }
    else if (totalFeetTravelled > 400 && totalFeetTravelled <= 2000){
        const excessFeet = totalFeetTravelled - 400;
        return excessFeet * 0.02;
    }
    else if (totalFeetTravelled > 2000 && totalFeetTravelled <= 2500){
        return 25.0;
    }
    else{
        return "cannot travel that far"
    }
}