$(document).ready(function() {
    const max_length = 140;
    $('.new-tweet-textarea').on('input', function(e) {
      let inputLength = this.value.length;
      let counterText = $(this).parent('form').children('div.btn-container').children('span.counter')[0];
      counterText.innerText = max_length - inputLength;

      if (inputLength > max_length) {
          $(this).css("border","2px solid red");
          $(counterText).css("color", "red");
      } else if (inputLength <= max_length) {
          $(this).css("border","none");
          $(counterText).css("color", "black");
      }
  })
});


