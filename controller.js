export function Controller(model) {
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
