// when user selects thumbnail img (using keyboard or mouse) 
// img should display in full size img container at the top
// updating img should update its alt attribute
// (to test keyboard you can tab and press enter)


function catCarousel() {
    $('.js-thumbnail').on('click', function(event) {
        const clickedImage = $(event.currentTarget);
        const otherImages = $('.js-thumbnail').not(clickedImage);
        const currentHero = $('js-heroImg');
        const heroContainer = $('js-hero');
        
        $('heroContainer').html(`${clickedImage}`);


        

    } )
}

$(catCarousel);