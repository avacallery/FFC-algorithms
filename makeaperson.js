//requirements:
//the methods that take an argument must accept only ONE (1) argument and it has to be a STRING

//real-world uses:
//This example could be use to create an object model of a human within a system or program, like a doctor's office. 

//setting up the 'getter' methods
//the 'getter' methods are methods on our Person object that return us data (getFirstName, getLastName, getFullName)

//setting up the 'setter' methods
//the 'setter' methods allow us to alter the data within our Person class (setFirstName, setLastName, setFullName)
//these methods will need to be slightly more involved as in order to change an existing piece of data
//we need to create a method that requires new data to be passed into it 

var Person = function(firstAndLast) {
    var fullName = firstAndLast.split(' ');

    this.getFullName = function() {
    return fullName.join(' '); //joins the fullName array into a single string 
    };
    
    this.getFirstName = function() {
        return fullName[0];
    }

    this.getLastName = function() { 
        return fullName[1];
    }

    this.setFirstName = function(newFirst){
        fullName[0] = newFirst; 
        return fullName.join(' ');
    }

    this.setLastName = function(newLast){
        fullName[1] = newLast;
        return fullName.join(' ');
    }

    this.setFullName = function(newFirstAndLast){
        fullName = newFirstAndLast.split(' ');
        return fullName.join(' '); 
    }
};

var bob = new Person('Bob Ross');
console.log(bob.setFullName("little baby")); 
console.log(bob.getFirstName()); 
console.log(bob.getLastName());
console.log(bob.setFirstName("Ava"));
console.log(bob.setLastName("Callery"));
console.log(bob.setFullName("Ava Callery"))

//because Person is considered a class, it is convention to capitalize the name 