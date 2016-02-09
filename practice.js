//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //'this' is a keyword that automatically gets assigned to the value of a certain object when invoking a function. It is very useful in the respect that it makes things easier to read, and write.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      // 1) Implicit Binding: This is when invoke a function, 'this' gets assigned a value automatically based on the context of the function invocation.
        //2) Explicit Binding: This happens with .call() or .apply() when invoking a function. You actually tell js what you want the value of 'this' to be.
        //3) Default Binding: This will bind 'this' to the global scope. In a browser, it gets assigned to the window.
        //4) When we use 'new' to invoke a function: 'this' will be assigned a value based on what is in your function ca;;,

  // 3) What is the difference between call and apply?

      //the input type is different for the parameters. In call you use comma notation, in apply you would use an array.

  // 4) What does .bind do?

      //.bind will create a new function and bind "this" to what we pass in. It does not invoke the function.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: 'thelastgaucho',
      email: 'lastgaucho@gmail.com',
      getUsername: function() {
        return this.username;
      }
    };
    user.getUsername();

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.moveCar = function() {
      return this.move += 10;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  getYear.call(prius);
  getYear.call(mustang);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};
getMyUsername =  getMyUsername.bind(myUser);
setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //the global scope.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
