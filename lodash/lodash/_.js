
const _ = {
    clamp(number, lower, upper) {
        // redundant work here, no need to call min after clamping
        number = Math.max(lower, number);
        number = Math.min(upper, number);
        return number;
    },
    inRange(number, start=0, end) {
        if (!end) {
            end = start;
            start = 0;
        }
        if (start > end) {
            var temp = start;
            start = end;
            end = temp;
        }
        return (number >= start && number < end);


    },
    words(string) {
        arr = [];
        var s = [];
        for (let i = 0; i < string.length; i++) {
            var char = string[i];
            if (char === ' ') {
                arr.push(s.join(''));
                s = [];
            } else {
                s.push(char);
            }

        }
        arr.push(s.join(''));
        return arr;
    }

};





// Do not write or modify code below this line.
module.exports = _;