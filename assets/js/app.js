$('.game-screen').html(AppTemplates.start(heroes));

$('.game-screen').on('click', '.choose-hero', function() {
  var index = $(this).data('index');
  var game = new Game(heroes[index]);
  $('.game-screen').html(AppTemplates.battle(game));
  $('.game-screen').on('click', '.attack-mode', function() {
    game.attack();
  });

  game.on('change', function() {
    if (game.gameOver()) {
      $('.game-screen').html(AppTemplates.gameover(game));
    } else {
      $('.game-screen').html(AppTemplates.battle(game));
    }
  });
});
