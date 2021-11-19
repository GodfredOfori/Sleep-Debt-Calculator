const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 6;
    } else if (day === 'thursday') {
        return 5;
    } else if (day === 'friday') {
        return 8;
    } else if (day === 'saturday') { 
        return 9;
    } else if (day === 'sunday')
        return 7;
    else (day !== 'monday' || day !== 'tuesday' ||day !== 'wednesday' ||day !== 'thursday' ||day !== 'friday' ||day !== 'saturday' || day !== 'sunday')
        return 'Error!';
    }

const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday')+ getSleepHours('wednesday')+ getSleepHours('thursday')+ getSleepHours('friday')+ getSleepHours('saturday')+ getSleepHours('sunday');


const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You had the perfect amount of sleep!');
      } else if (actualSleepHours > idealSleepHours) {
        console.log('You have' + (actualSleepHours - idealSleepHours) + 'more sleep hours this week!');
      } else if (actualSleepHours < idealSleepHours) {
          console.log('You need rest, sleep ' + (idealSleepHours - actualSleepHours) + ' hours less this week!' );
      } else {
        console.log('Error!');
}
}
calculateSleepDebt();