let isVisible = false;
function toggleComposeView() {
    $('.form-container').slideToggle(function() {
        if (isVisible) {
            //Focus the container
            console.log('slide complete focus');
            $('textarea.new-tweet-textarea').attr('disable',false).focus();
        }
        isVisible = !isVisible;
    })
}
