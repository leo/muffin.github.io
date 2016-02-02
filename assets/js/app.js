$(document).ready(function () {
  $('a[href="#second"]').click(function (event) {
    $('html, body').animate({
      scrollTop: $('#second').offset().top
    }, 600)

    event.preventDefault()
  })

  $('#slider').unslider({
    nav: false,
    arrows: false
  })
})
