  function Character(options) {
  options = options || {};
  var hitPoints = options.hitPoints || 100;
  this.weapons = options.weapons || {};

  this.takeDamage = function(damage) { hitPoints -=  damage; };

  this.getAttackStrength = function(weaponName) {
    if (this.weapons[weaponName]) {
      return this.weapons[weaponName];
    }

    return 5;
  };

  this.on('attacked', function(amount) {
    this.takeDamage(amount);
  });

  this.getHealth = function() {return hitPoints;};
}

Character.prototype = _.extend({
  constructor: Character,

  attack: function(hostile, weapon) {
    // Tell the enemy to that they've been attacked
    hostile.trigger('attacked', this.getAttackStrength(weapon));

    // Directly damaging the enemy
    // hostile.takeDamage(this.getAttackStrength(weapon));
  },
}, Backbone.Events);

Handlebars.registerHelper('health', function(getHealth) {
  return character.getHealth();
});
