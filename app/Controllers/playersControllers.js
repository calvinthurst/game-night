import { appState } from "../AppState.js";
import { playersServices } from "../Services/playersServices.js";
export class PlayersControllers {

  constructor() {
    console.log('this is a "new" player');
    this.drawPlayers()
  }

  drawPlayers() {
    console.log('drawing players');
    let template = ``
    appState.players.forEach(p => template += p.Template)
    document.getElementById('app').innerHTML = template
  }

  addPoints(name) {
    playersServices.addPoints(name)
    this.drawPlayers()
  }
  removePoints(name) {
    playersServices.removePoints(name)
    this.drawPlayers()
  }
}