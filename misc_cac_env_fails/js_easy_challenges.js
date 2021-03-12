function finalGrade(num1, num2, num3) {
    var grades = [num1, num2, num3];
    var sum = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i]  < 0 || grades[i] > 100) {
            return "You have entered an invalid grade.";
        }
        sum += grades[i]
    }
    var mean = sum / 3;
    if (mean <= 59) {
        return 'F';
    } else if (mean <= 69) {
        return 'D';
    } else if (mean <= 79) {
        return 'C';
    } else if (mean <= 89) {
        return 'B';
    } else {
        return 'A';
    }
  
  }

  const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = (Math.random() * 6) + 1
      let die2 = (Math.random() * 6) + 1
      return die1 + die2
  }

function howOld(age, year) {
    const currYear = new Date().getFullYear();
    
    if (year > currYear) {
      return `You will be ${(year - currYear) + age} in the year ${year}`;
    } else if (year < (currYear - age)) {
      return `The year ${year} was ${-1 * ((year - currYear) + age)} years before you were born`;
    } else if (year < currYear) {
      return `You were ${age - (currYear - year)} in the year ${year}`;
    }
  
  }