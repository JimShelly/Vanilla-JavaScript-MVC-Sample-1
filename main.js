import { HeadingState, HelloState, WorldState } from './state.js';
import { Controller } from './controller.js';
import { Model } from './model.js';
import { View } from './view.js';

(function main() {
  const model = new Model();
  const controller = new Controller(model);
  const view = new View(controller);
}());