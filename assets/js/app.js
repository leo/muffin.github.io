$(document).ready(function () {
  $('a[href^="#"]').click(function (event) {
    var target = $(this).attr('href')

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 600)

    event.preventDefault()
  })

  $('#slider').unslider({
    nav: false,
    arrows: false
  })
})
