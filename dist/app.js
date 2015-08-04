AppTemplates = {};

AppTemplates['battle'] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"hero-side\">\n    <img src=\"images/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.imgURL : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\">\n    <p>Health</p>\n</div>\n";
},"3":function(depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"enemy-side\">\n    <img src=\"images/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.imgURL : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\">\n    <p>Health</p>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(3, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "<div>\n<button class=\"attack-mode\">Attack</button>\n</div>\n\n\n";
},"useData":true,"useBlockParams":true});
AppTemplates['game-over'] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "<h1>You Win!</h1>\n";
},"3":function(depth0,helpers,partials,data) {
    return "<h1>You Lose!</h1>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.playerWins : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
AppTemplates['start'] = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "<img src=\"images/"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.imgUrl : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "\">\n<div>\n<button class=\"choose-hero\" data-index=\""
    + alias2(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">"
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.name : stack1), depth0))
    + "</button>\n</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<h1>Protect your city</h1>\n\n<h1>Select Hero</h1>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 1, blockParams),"inverse":this.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});
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

char = new Character({hitPoints: 200, weapons: {hammer: 20, sword: 15}});
enemy = new Character({weapons: {hands: 11, sword: 15}});

// Adds an extra callback to be run ONLY when the enemy instance is attacked
enemy.on('attacked', function(amount) {
  if (amount > 10) {
    console.log('You are a strong foe!');
  }
});

char.attack(enemy, 'hammer');
enemy.attack(char, 'hands');

console.log('character: ', char.getHealth());
console.log('enemy: ', enemy.getHealth());

/**
 * @param {[type]}
 * @param {[type]}
 * @param {[type]}
 */
function Hero(name, health, weapons, imgUrl) {
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

function Enemy(name, health, weapons, imgURL) {
  Character.call(this, {hitPoints: health, weapons: weapons});
  this.name = name;
  this.imgURL = imgURL;
}

Enemy.prototype = _.extend({constructor: Enemy}, Character.prototype);

var enemies = [
  new Enemy('Slade', 300, 'sword', 'sladewilson.png'),
  new Enemy('Malcolm Merlyn', 200, 'arrow', 'malcolmmerlyn.jpg'),
];

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


$('.game-screen').html(AppTemplates.start(heroes));

$('.game-screen').on('click', '.choose-hero', function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game-screen').html(AppTemplates.battle(game));
  $('.game-screen').on('click', '.attack-mode', function() {
    game.attack();
  });

});
//# sourceMappingURL=app.map