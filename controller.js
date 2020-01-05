function controller(model) {
  var self = this;
  this.model = model;


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

  this.getModelHeading = function() {
    return self.model.heading;
  }

  this.clickHandler = function(target) {
    self.model.heading = 'World';
    target.innerText = self.getModelHeading();
  }
}