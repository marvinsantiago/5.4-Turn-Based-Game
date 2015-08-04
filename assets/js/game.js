function Game(hero) {
  this.hero = hero;
  this.enemy = _.sample(enemies);
  this.gameOver = true;
  this.playerWins = false;
}

Game.prototype = _.extend({
  constructor: Game,

  attack: function() {
    this.hero.attack(this.enemy);
    this.enemy.attack(this.hero);
  },

}, Backbone.Events);

