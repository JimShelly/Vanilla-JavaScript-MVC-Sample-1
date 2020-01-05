function Controller(model) {  
  var self = this;
  this.model = model;

  this.handleEvent = function(e) {
    e.stopPropagation();
    console.log(this);
    switch(e.type){
      case 'click':
        self.clickHandler(e.target);
        break;      
      default:
        console.log(e.target);
    }
  }

  this.getModelHeading = function() {
    console.log(self.model.heading);
    return self.model.heading;
  }

  this.clickHandler = function(target) {
    self.model.heading = 'World';
    target.innerText = self.getModelHeading();
  }
}

function Model() {
  
  this.heading = 'Hello';
}

function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById('heading');
  console.log(this.heading);
  this.heading.innerText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);
}

(function main() {
  const model = new Model();
  const controller = new Controller(model);
  const view = new View(controller);
}());