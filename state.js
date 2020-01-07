//Our main State Container
export function HeadingState() {  
  var self = this;
  this.state = new HelloState(self); //instantiate a new HelloState object
  
  this.changeState = function() {
    self.state.next();
  }
  this.getValue = function() {
    return self.state.value;
  }
}

export function HelloState(container){
  var self = this;
  this.container = container;
  this.value = 'Hello';
  container.state = this;
  this.next = function() {
    return new WorldState(self.container);
  }
}

export function WorldState(container){
  var self = this;
  this.container = container;
  this.value = 'World';
  container.state = this;
  this.next = function() {
    return new HelloState(self.container);
  }
}