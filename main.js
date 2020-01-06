function HeadingState() {  
  var self = this;
  this.state = new HelloState(self);
  this.changeState = function() {
    self.state.next();
  }
  this.getValue = function() {
    return self.state.value;
  }
}

function HelloState(container){
  var self = this;
  this.container = container;
  this.value = 'Hello';
  container.state = this;
  this.next = function() {
    return new WorldState(self.container);
  }
}

function WorldState(container){
  var self = this;
  this.container = container;
  this.value = 'World';
  container.state = this;
  this.next = function() {
    return new HelloState(self.container);
  }
}

function Controller(model) {
  var self = this;
  this.model = model;

  //EventListener Interface
  this.handleEvent = function(e) {
    e.stopPropagation();
    switch(e.type){
      case 'click':
        self.clickHandler(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

  //Get Model Heading
  this.getModelHeading = function() {
    return self.model.heading;
  }

  //Change the model
  this.clickHandler = function(target) {
    this.model.changeHeading();
    self.model.notifyAll();
  }
}

function Model() {
  var self = this;
  var state = new HeadingState();
  //heading is no longer a property, but a scoped variable
  var heading = state.getValue();

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

  //add changeHeading method to toggle state;
  this.changeHeading = function(){    
    state.changeState();
    self.heading = state.getValue();
    console.log('Change Heading to ' + self.heading);
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

function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById('heading');
  this.heading.innerText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);
  this.update = function(data){
    this.heading.innerText = data.heading;
  }
  this.controller.model.registerObserver(this);
}

(function main() {
  const model = new Model();
  const controller = new Controller(model);
  const view = new View(controller);
}());