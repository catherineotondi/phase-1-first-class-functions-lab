const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    return drivers.slice(0,2)
}

function returnLastTwoDrivers(){
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier){
    return function(value){
        return multiplier * value
    }   
}

function fareDoubler(value){
    return value*2
}

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, returnDrivers) {
    return returnDrivers(drivers);
  };