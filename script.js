// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress__filled').first();
let playerButton = $('.player__button')

// play button
playerButton.first().click(function () {
    if ($(this).is('.play')) {
        player.trigger('play');
        $(this).removeClass('play');
        $(this).text('||');
    } else {
        player.trigger('pause');
        $(this).addClass('play');
        $(this).text('►');
    }
});

// progresse
player.on('timeupdate', function () {
    progress.css("width", (100 * this.currentTime / this.duration));
});

// - 10
playerButton.eq(1).click(function () {
    player[0].currentTime -= 10;
});

// + 25
playerButton.last().click(function () {
    player[0].currentTime += 25;
});

// volume
$('#volume').on('change', function () {
    player[0].volume = $(this).val();
    console.log($(this).val())
});