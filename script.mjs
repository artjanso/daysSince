let newDate = new Date(); 

const accurateDate = (dateString = newDate) => {
    let d = new Date(dateString);
    d = new Date (Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    return d;    
};

const dateFormating = (dateString = accurateDate(newDate)) => {
    dateString = accurateDate(dateString).toUTCString();
    dateString = dateString.split(' ').slice(0, 4).join(' ');
    return dateString;
};

const numberOfDaysFromBeginingOfTheYear = (dateString = accurateDate(newDate)) => {
    let number = 0;
        if(accurateDate(newDate).getFullYear() === dateString.getFullYear()) {
            //Add Months
            for(let i = 1; i <= dateString.getMonth(); i++){
                number = number + new Date(dateString.getFullYear(), i, 0).getDate();
            };
            //Add Days
            number = number + dateString.getDate();
        }
    return number;
};

const daysSinceBeginingOfTheYear = (dateString) => {
    let number = 0;
    if(new Date().getTime() === dateString.getTime()) {
        return 0;
    } else {
        if(accurateDate(newDate).getFullYear() === dateString.getFullYear()) {
            //Add Months
            for(let i = 1; i <= dateString.getMonth(); i++){
                number = number + new Date(dateString.getFullYear(), i, 0).getDate();
            };
            //Add Days
            if(dateString !== accurateDate(newDate)) {
                number = number + dateString.getDate() + 1;
            } else {
                number = number + dateString.getDate();
            };
        };
    }; 
    return number;
};

const findLastEntry = (arr, human) => {
    const valueFound = arr.find( ({ name }) => name === human);
    return valueFound;
};

const areerWorkoutdaysV2 = (currDateValue, lstEntry) => {
    let number = 0;
    if(currDateValue === 0 && lstEntry === 0){
        number = 0;
    } else {
        for(let i = currDateValue; i >= lstEntry; i--) {
            number = number + i;
        };
    }
    return number;
};

const updateLogs = name => {
    participants.unshift({name: name, date: accurateDate()});
};

const todaysDateFormated = dateFormating();
const daysSince = numberOfDaysFromBeginingOfTheYear();

document.getElementById('today-date').innerText = todaysDateFormated;
document.getElementById('day-year').innerText = daysSince;