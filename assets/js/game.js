function Game() {
  this.hero = [];
  this.enemy = [];
  this.gameOver = true;
  this.playerWins = false;
}

Game.prototype = _.extend({
  constructor: Game,

  attack: function(enemy, ability) {
    enemy.trigger('attacked', thisgetAttackStrength(ability));
  },

}, Backbone.Events);

this.on('attacked', function(amount) {
    this.takeDamage(amount);
  });

