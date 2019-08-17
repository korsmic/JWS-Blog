$(function () {
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: ".content-01",
    duration: $('.content-01').outerHeight()
  })
    .setClassToggle("#nav01", "is-active")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".content-02",
    duration: $('.content-02').outerHeight()
  })
    .setClassToggle("#nav02", "is-active")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".content-03",
    duration: $('.content-03').outerHeight()
  })
    .setClassToggle("#nav03", "is-active")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".content-04",
    duration: $('.content-04').outerHeight()
  })
    .setClassToggle("#nav04", "is-active")
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: ".content-05",
    duration: $('.content-05').outerHeight()
  })
    .setClassToggle("#nav05", "is-active")
    .addTo(controller);

  // Smooth Scroll
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
