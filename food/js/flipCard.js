$('.flip-card').on('click', function () {
    $(this).find('.flip-card-inner').css('transform', 'rotateY(180deg)');
})

$(document).mouseup(function (e) {
    var flipCard = $(".flip-card");
    if (!flipCard.is(e.target) && flipCard.has(e.target).length === 0) {
        $(this).find('.flip-card-inner').css('transform', 'rotateY(0deg)');
    }
});