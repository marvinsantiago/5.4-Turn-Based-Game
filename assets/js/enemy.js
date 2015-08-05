function Enemy(name, health, weapons, imgURL) {
  Character.call(this, {hitPoints: health, weapons: weapons});
  this.name = name;
  this.imgURL = imgURL;
}

Enemy.prototype = _.extend({constructor: Enemy}, Character.prototype);

var enemies = [
  new Enemy('Slade', {hitPoints: 300, weapons: {sword: 35, Mirakuruhands: 60}}, 'sladewilson.png'),
  new Enemy('Malcolm Merlyn', 200, 'arrow', 'malcolmmerlyn.jpg'),
];
