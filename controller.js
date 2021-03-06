function controller(model) {
  var self = this;
  this.model = model;

  //EventListener Interface
  this.handleEvent = function(e) {
    e.stopPropogation();
    switch(e.type){
      case 'click':
        self.clickHandler(e.target);
        break;
      case default:
        console.log(e.target);
    }
  }

  //Get Model Heading
  this.getModelHeading = function() {
    return self.model.heading;
  }

  //Change the model
  this.clickHandler = function(target) {
    self.model.heading = 'World';
    self.model.notifyAll();
  }
}