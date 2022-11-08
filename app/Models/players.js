export class player {
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  get Template() {
    return `
  <div class="col-6">
    <h3>${this.name}</h3>
    <h4>${this.score}</h4>
    <button class="text-success" onclick="app.playersControllers.addPoints('${this.name}')"><i class="mdi mdi-plus-outline"></i></button>
    <button class="text-danger" onclick="app.playersControllers.removePoints('${this.name}')"><i class="mdi mdi-minus-box-outline"></i></button>
  </div>
  `
  }
}

