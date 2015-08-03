$('.game-screen').html(AppTemplates.start(heroes));

$('.game-screen').on('click', '.choose-hero', function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game-screen').html(AppTemplates.battle(game));
});

// game.on('change', function() {
//     if (game.gameOver) {
//       $('.game-screen').html(AppTemplates['game-over'](game));
//     } else {
//       $('.game-screen').html(AppTemplates.game(game));
//     }
//   });
