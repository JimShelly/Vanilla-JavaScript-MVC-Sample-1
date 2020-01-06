function HeadingState() {  
  var self = this;
  console.log(this)
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