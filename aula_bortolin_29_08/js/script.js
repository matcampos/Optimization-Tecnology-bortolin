$(() => {
    //jqQuery 1
    $('#hide').click(() => {
        $('.alvo').hide();
    });

    $('#show').click(() => {
        $('.alvo').show();
    });

    //jQuery 2
    $('#fadeIn').click(() => {
        $('.alvo').fadeIn();
        // $('.alvo').fadeIn(5000);
        // $('.alvo').fadeIn("slow");
    });

    $('#fadeOut').click(() => {
        $('.alvo').fadeOut();
    })

    //jQuery 3
    $('#slideDown').click(() => {
        $('.alvo').slideDown();
    })

    $('#slideUp').click(() => {
        $('.alvo').slideUp();
    })

    $('#slideToggle').click(() => {
        $('.alvo').slideToggle();
    })


    $('#slideToggle').click(() => {
        $('.alvo').css({ 'background': 'red' }).slideUp(2000).slideDown(2000);
    })

    $('#animate').click(() => {
        $('.alvo').css('position', 'absolute');
        $('.alvo').animate({ 'left': '800px', 'opacity': '0.2', 'width': '80px', 'height': '80px' });
        var zeca = $('.alvo');

        zeca.animate({ 'height': '250px', 'opacity': '0.4' }, 'slow');
        zeca.animate({ 'width': '250px', 'opacity': '0.8' }, 'slow');
        zeca.animate({ 'height': '100px', 'opacity': '0.4' }, 'slow');
        zeca.animate({ 'width': '100px', 'opacity': '0.8' }, 'slow');
    });

    // jQuery 5
    $('#html').click(() => {
        $('.alvo').html('<p>Outro texto aqui</p><hr>');
        $('.alvo p').css({ 'background': 'red', 'border': '1px solid red' });
    });

    // jQuery 6
    $('#attr').click(() => {
        $('.alvo').html('<a href="#">meu link</a>')
    })
});
