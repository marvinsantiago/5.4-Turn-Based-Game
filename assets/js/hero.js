/**
 * @param {[type]}
 * @param {[type]}
 * @param {[type]}
 */
function Hero(name, health, weapon) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;

  this.takeDamage = function(damage) { hitPoints -=  damage; };

  this.getAttackStrength = function(weaponName) {
    if (this.weapons[weaponName]) {
      return this.weapons[weaponName];
    }

    return 5;
  };
}

Hero.prototype = {
  constructor: Hero,
};

this.name = function() {
  return this.name;
};

this.health = function() {
  return this.health;
};

this.weapon = function() {
  return this.weapon;
};

var heroes = [
  new Hero('Arrow', 200, 'arrow'),
  new Hero('Arsenal', 200, 'arrow'),
  new Hero('Diggle', 200, 'hands'),
];
