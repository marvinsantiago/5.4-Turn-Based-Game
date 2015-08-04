function Game(hero) {
  this.hero = hero;
  this.enemy = _.sample(enemies);
  this.heroWins = false;
}

Game.prototype = _.extend({
  constructor: Game,

  attack: function() {
    this.hero.attack(this.enemy);
    this.enemy.attack(this.hero);

    this.trigger('change');
  },

  gameOver: function() {
    if (this.enemy.isDead()) {
      this.heroWins = true;
    }

    return this.hero.isDead() || this.enemy.isDead();
  },
}, Backbone.Events);

