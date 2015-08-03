function Hero(name, health, weapon) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
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
