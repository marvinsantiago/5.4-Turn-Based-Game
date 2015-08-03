function Enemy(name, health, weapon) {
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

Enemy.prototype = {
  constructor: Enemy,
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

var enemies = [
  new Enemy('Slade', 300, 'sword'),
  new Enemy('Malcolm Merlyn', 200, 'arrow'),
];
