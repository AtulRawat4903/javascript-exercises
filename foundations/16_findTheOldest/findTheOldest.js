const findTheOldest = function (people) {
    return people.reduce((oldest, current) => {
        const oldestDeathYear = oldest.yearOfDeath || new Date().getFullYear();
        const currentDeathYear = current.yearOfDeath || new Date().getFullYear();

        const oldestAge = oldestDeathYear - oldest.yearOfBirth;
        const currentAge = currentDeathYear - current.yearOfBirth;

        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
