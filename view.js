function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById('heading');
  this.heading.innterText = controller.getModelHeading();
  this.heading.addEventListener('click', controller);
}