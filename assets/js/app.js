$(document).ready(function () {
  $('#controls .toggle').click(function (event) {
    $('html').toggleClass('no-overflow')
    $('#menu').fadeToggle(250).css('display','flex')

    event.preventDefault()
  })
})
