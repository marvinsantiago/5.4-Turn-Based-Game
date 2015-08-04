/**
 * @param {[type]}
 * @param {[type]}
 * @param {[type]}
 */
function Hero(name, health, weapon, imgUrl) {
  Character.call(this, {hitPoints: health, weapons: weapons});
  this.name = name;
  this.imgUrl = imgUrl;
}

Hero.prototype = _.extend({constructor: Hero}, Character.prototype);

var heroes = [
  new Hero('Arrow', 200, 'arrow', 'arrow.png'),
  new Hero('Arsenal', 200, 'arrow', 'arsenal.jpg'),
  new Hero('Diggle', 200, 'hands', 'diggle.png'),
];
