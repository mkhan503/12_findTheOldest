const findTheOldest = function(obj) {
    //if person is alive then add current year as yearOfDeath to calculate age.
    const aliveToday = obj.map(person =>{
        const currentYear = new Date().getFullYear();
        if (person.hasOwnProperty("yearOfDeath") == false){
            person.yearOfDeath = currentYear;
        }
        
    });
    
    //console.table(obj);
    //sort according to age
    const oldest = obj.sort((a,b) => {
        
        const age1 = a.yearOfDeath - a.yearOfBirth;
        const age2 = b.yearOfDeath - b.yearOfBirth;
        
        return age1 > age2 ? -1 : 1;
        
    });
    //return the first element i.e. the oldest from the sorted array
    return oldest[0];

};

//console.table(findTheOldest(people));

module.exports = findTheOldest;
