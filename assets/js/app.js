$('.game-screen').html(AppTemplates.start());
$('.game-screen').on('click', '.attack-mode', function() {
  $('.game-screen').html(AppTemplates.game());
});

$('.game-screen').on('click', '.choose-weapon', function() {
  var game = new Game();

});

game.on('change', function() {
    if (game.gameOver) {
      $('.game-screen').html(AppTemplates['game-over'](game));
    } else {
      $('.game-screen').html(AppTemplates.game(game));
    }
  });
