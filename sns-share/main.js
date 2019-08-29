function twitterShare(output, text, hash, url, check) {
  var twLink = $(output);
  var twCheck = $(check);
  var twShare = 'http://twitter.com/share';
  var twText = $(text).val();
  var twHash = $(hash).val();
  var twUrl = $(url).val();
  if (twUrl == "") {
    return;
  }
  var twData = twShare + '?url=' + twUrl + '&text=' + twText + '&hashtags=' + twHash;
  twLink.val(encodeURI(twData));
  twCheck.attr('href', encodeURI(twData)).addClass('active');
}

function lineShare(output, text, check) {
  var lineLink = $(output);
  var lineCheck = $(check);
  var lineShare = 'https://line.me/R/msg/text/?';
  var lineText = $(text).val();
  var lineData = lineShare + lineText;
  lineLink.val(encodeURI(lineData));
  lineCheck.attr('href', encodeURI(lineData)).addClass('active');
}

function fbShare(output, url, check) {
  var fbLink = $(output);
  var fbCheck = $(check);
  var fbShare = 'https://www.facebook.com/sharer/sharer.php?u=';
  var fbUrl = $(url).val();
  var fbData = fbShare + fbUrl;
  fbLink.val(encodeURI(fbData));
  fbCheck.attr('href', encodeURI(fbData)).addClass('active');
}

$(function () {
  // Twitter
  $('.twitter-input').each(function () {
    $(this).on('change', function () {
      twitterShare('#twitter-output', '#twitter-text', '#twitter-hash', '#twitter-url', '#twitter-check');
    })
  });
  // line
  $('.line-input').each(function () {
    $(this).on('change', function () {
      lineShare('#line-output', '#line-text', '#line-check');
    })
  });
  // facebook
  $('.fb-input').each(function () {
    $(this).on('change', function () {
      fbShare('#fb-output', '#fb-url', '#fb-check');
    })
  });
});