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
