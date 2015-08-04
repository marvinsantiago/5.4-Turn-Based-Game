function Game(hero) {
  this.hero = hero;
  this.enemy = _.sample(enemies);
  this.gameOver = true;
}

Game.prototype = _.extend({
  constructor: Game,

  attack: function() {
    this.hero.attack(this.enemy);
    this.enemy.attack(this.hero);

    this.trigger('change');
  },

}, Backbone.Events);

