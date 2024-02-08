var config = {
  type: Phaser.AUTO,
  with: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);
var peixinho;

function preload() {
  this.load.image('peixe', 'assets/peixe/peixe_amarelo.png');
  this.load.image('concha', 'assets/peixe/concha.png');
  this.load.image('mar', 'assets/bg_azul-claro.png');
  this.load.image('logo', 'assets/logo-inteli_azul.png');
}

function create() {
  this.add.image(400, 300, 'mar').setScale(2);
  this.add.image(540, 525, 'logo').setScale(0.5);
  this.add.image(80, 550, 'concha');
  peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5);
}

function update() {
  peixinho.x = this.input.x;
  peixinho.y = this.input.y;
}