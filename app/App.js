import { ValuesController } from "./Controllers/ValuesController.js";
import { PlayersControllers } from "./Controllers/playersControllers.js";

class App {
  playersControllers = new PlayersControllers();
}

window["app"] = new App();
