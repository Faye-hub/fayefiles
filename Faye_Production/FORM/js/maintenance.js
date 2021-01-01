/* TABBED MENU */


/*active button class onclick*/


   $('.noshow').hide();

$('#left_tabbed_menu a').click(function(e) {
  
  e.preventDefault();


  $('#left_tabbed_menu a').removeClass('active');
  $(this).addClass('active');



/*
  if(this.id === !'payment'){

    $('.payment').addClass('noshow');
  } */


  if(this.id === 'payment') {
    
    $('.profile').hide(); $('.subscription').hide(); $('.payment').show();

    $('.payment').removeClass('noshow');
    $('.rightbox').children().not('.payment').addClass('noshow');



  }

  else if (this.id === 'profile') {

    $('.payment').hide(); $('.subscription').hide(); $('.profile').show();


    $('.profile').removeClass('noshow');
    $('.rightbox').children().not('.profile').addClass('noshow');



  }


  else if(this.id === 'subscription') {

    $('.payment').hide(); $('.profile').hide(); $('.subscription').show();


    $('.subscription').removeClass('noshow');
    $('.rightbox').children().not('.subscription').addClass('noshow');
  }


    else if(this.id === 'privacy') {
    $('.privacy').removeClass('noshow');
    $('.rightbox').children().not('.privacy').addClass('noshow');
  }


  else if(this.id === 'settings') {
    $('.settings').removeClass('noshow');
    $('.rightbox').children().not('.settings').addClass('noshow');
  }
  
});





/* / TABBED MENU */