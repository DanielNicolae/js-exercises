let findTheOldest = function(people) {
    let years = [];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    people.forEach(person => {
        if(person.yearOfDeath === undefined) {
            years.push(currentYear - person.yearOfBirth);
        } 
        else {
            years.push(person.yearOfDeath - person.yearOfBirth);
        }
    });
    let oldest = 0;
    for (let i = 0; i < years.length; i++) {
        oldest = Math.max(oldest, years[i]);
    }
    let index = years.indexOf(oldest);
    return (people[index]);
}

module.exports = findTheOldest
