
const _ = {
    clamp(number, lower, upper) {
        // redundant work here, no need to call min after clamping
        number = Math.max(lower, number);
        number = Math.min(upper, number);
        return number;
    }
    
};





// Do not write or modify code below this line.
module.exports = _;