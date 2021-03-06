function Model() {
  var self = this;
  //heading is no longer a property, but a scoped variable
  var heading = 'Hello';

  //collection of observers
  this.observers = [];

  //add to the collection of observers
  this.registerObserver = function(observer) {
    self.observers.push(observer);
  }

  //loop over observers, calling their update method
  this.notifyAll = function() {
    self.observers.forEach(function(observer){
      observer.update(self);
    })
  }

  //Pass this, as its the object we want to affect.  Heading is the name of the property we want it to be attached to.  Then we defined the accessor and assignment functions
  Object.defineProperty(this, 'heading', {
    get: function() { return heading },
    set: function(value) {
      heading = value;
      //call notifyAll in the assignment function
      this.notifyAll();
    }
  })
}