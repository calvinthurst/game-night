import { appState } from "../AppState.js";

class PlayersServices {

  addPoints(name) {
    console.log('adding points', name);
    let player = appState.players.find(p => p.name == name)
    player.score++
  }
  removePoints(name) {
    console.log('removing points', name);
    let player = appState.players.find(p => p.name == name)
    player.score--
  }
}
export const playersServices = new PlayersServices()