AppTemplates = {};

AppTemplates['battle'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"hero-side\">\n    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hero : depth0)) != null ? stack1.imgURL : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.hero : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">\n    <p>Health</p>\n</div>\n<div class=\"enemy-side\">\n    <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.imgURL : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.enemy : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">\n    <p>Health</p>\n</div>\n<div>\n<button class=\"attack-mode\">Attack</button>\n</div>\n\n\n";
},"useData":true});
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
/**
 * @param {[type]}
 * @param {[type]}
 * @param {[type]}
 */
function Hero(name, health, weapon, imgUrl) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.imgUrl = imgUrl;

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
  new Hero('Arrow', 200, 'arrow', 'arrow.png'),
  new Hero('Arsenal', 200, 'arrow', 'arsenal.jpg'),
  new Hero('Diggle', 200, 'hands', 'diggle.png'),
];

function Enemy(name, health, weapon, imgURL) {
  this.name = name;
  this.health = health;
  this.weapon = weapon;
  this.imgURL = imgURL;

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
  new Enemy('Slade', 300, 'sword', 'sladewilson.png'),
  new Enemy('Malcolm Merlyn', 200, 'arrow', 'malcolmmerlyn.jpg'),
];

function Game() {
  this.hero = [];
  this.gameOver = true;
  this.playerWins = false;
}

Game.prototype = _.extend({
  constructor: Game,

  attack: function(enemy, ability) {
    enemy.trigger('attacked', thisgetAttackStrength(ability));
  },

}, Backbone.Events);

$('.game-screen').html(AppTemplates.start(heroes));

$('.game-screen').on('click', '.choose-hero', function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game-screen').html(AppTemplates.battle(game));
});

// $('.game-screen').on('click', '.attack-mode', function() {
//   var index = $(this).data('index');
//   var game = new Game(heroes[index]);
//   $('.game-screen').html(AppTemplates.battle(game));
// });
//# sourceMappingURL=app.map