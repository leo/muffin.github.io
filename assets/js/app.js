$(document).ready(function () {
  $('#controls .toggle').click(function (event) {
    event.preventDefault()

    if ($('#menu').is(':animated')) {
      return
    }

    $('html').toggleClass('no-overflow')
    $('#menu').fadeToggle(200).css('display','flex')
  })
})
