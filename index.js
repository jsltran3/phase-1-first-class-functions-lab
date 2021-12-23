
const returnFirstTwoDrivers = function (twoDrivers) {
    let firstTwoDrivers = twoDrivers.slice(0,2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function (lastTwo) {
    let lastTwoDrivers = lastTwo.slice(-2);
    return lastTwoDrivers; 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {

    let fareMultiplier = function(fare) {
      return fare * multiplier;
    }
    return fareMultiplier; 
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function(allDrivers, driverSelector) {
    return driverSelector(allDrivers);
  }
  