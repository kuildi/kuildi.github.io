$('.history__show').on('click', function () {
    $(this).next('.history__hide').toggleClass('history_show');
})

$('.onoffswitch input').on('click', function () {
    $('.theme_color_project-default').toggleClass('theme_color_project-brand');
})