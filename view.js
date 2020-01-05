function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById('heading');
  this.heading.innterText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);
  this.update = function(data){
    this.heading.innerText = data.heading;
  }
  thos.controller.model.registerObserver(this);
}