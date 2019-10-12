$(document).ready(function () {
    function removeLoading() {
        $('body').removeClass('pre-loading')
    }

    $('#keyWatchCenter').load(function () {
        removeLoading()
    })


    $(window).scroll(function() {
        console.log("done....")
    })
    
    function animateWatchComplication(withItem) {
        if ( withItem.hasClass('initial') ) {
            withItem.removeClass('initial');
            
            
            
        }
    }

});

