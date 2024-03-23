const findTheOldest = function(people) {
    function calculateAge(person) {
        const currentYear = new Date().getFullYear(); // Get the current year
        if (person.yearOfDeath) {
            return person.yearOfDeath - person.yearOfBirth;
        } else {
            return currentYear - person.yearOfBirth;
        }
    }

    // Initialize variables to keep track of the oldest person and their age
    let oldestPerson = null;
    let maxAge = -Infinity;

    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        
        // Calculate age of the current person
        const age = calculateAge(person);
        
        // If the current person is older than the previously oldest person,
        // update the oldest person and their age
        if (age > maxAge) {
            oldestPerson = person;
            maxAge = age;
        }
    }

    // Return the oldest person
    return oldestPerson;
    
};

// Do not edit below this line
module.exports = findTheOldest;
