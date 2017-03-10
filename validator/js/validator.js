;(function($){
  "use strict";

  var userName,
      email,
      passWord,
      repassWord,
      date,
      avata,
      country,
      radio,
      note,
      hobbies,
      dateReg = /^(0[1-9]|[12][0-9]|3[01])[/ /.](0[1-9]|1[012])[/ /.](19|20)\d\d$/,
      emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,4}$/igm;

  function validator(){

    userName = $("#userName").val();
    email = $("#email").val();
    passWord = $("#passWord").val();
    repassWord = $("#repassWord").val();
    date = $("#date").val();
    avata = $("#avata").val();
    country = $("#country").val();
    radio = $("input[name=gender]:checked");
    hobbies = $("input[name=hobbies]:checked");
    note = $("#note").val();

    if( userName === "" ){
      $('#userName').addClass("border_error").parent().addClass("happened_error");
    } else {
      $('#userName').removeClass("border_error").parent().removeClass("happened_error");
    }

    if( email === "" ){
      $('#email').addClass("border_error").parent().addClass("happened_error");
    }

    if( !!!email.match(emailReg) ){
      $('#email').addClass("border_error").parent().addClass("happened_error");
    }

    if ( !!email.match(emailReg) ){
      $('#email').removeClass("border_error").parent().removeClass("happened_error");
    }

    if ( passWord === "" ){
      $('#passWord').addClass("border_error").parent().addClass("happened_error");
    } else {
      $('#passWord').removeClass("border_error").parent().removeClass("happened_error");
    }

    if ( repassWord === "" ){
      $('#repassWord').addClass("border_error").parent().addClass("happened_error");
    } else {
      $('#repassWord').removeClass("border_error").parent().removeClass("happened_error");
      if ( repassWord !== passWord ){
        $('#repassWord').addClass("border_error").parent().addClass("show_pass");
      } else {
        $('#repassWord').removeClass("border_error").parent().removeClass("show_pass");
      }
    }

    if ( date === "" ){
      $('#date').addClass("border_error").parent().addClass("happened_error");
    }

    if( !!!date.match(dateReg) ){
      $('#date').addClass("border_error").parent().addClass("happened_error");
    }

    if ( !!date.match(dateReg) ){
      $('#date').removeClass("border_error").parent().removeClass("happened_error");
    }

    if ( avata === "" || $("#filename").val() == "" ){
      $('#avata').parent().prev().addClass("border_error").parents("td").addClass("happened_error");
    } else {
      $('#avata').parent().prev().removeClass("border_error").parents("td").removeClass("happened_error");
    }

    if ( country === "" ){
      $('#country').addClass("border_error").parent().addClass("happened_error");
    } else {
      $('#country').removeClass("border_error").parent().removeClass("happened_error");
    }

    if ( note.length < 20 || note.length > 100 ){
      $('#note').addClass("border_error").parent().addClass("happened_error");
    } else {
      $('#note').removeClass("border_error").parent().removeClass("happened_error");
    }

    if ( radio.length == 0 ){
      $('.radio').parents("td").addClass("radio_error happened_error");
    } else {
      $('.radio').parents("td").removeClass("radio_error happened_error");
    }

    if ( hobbies.length < 2 ){
      $('.hobbies').parents("td").addClass("happened_error");
    } else {
      $('.hobbies').parents("td").removeClass("happened_error");
    }

  };

  $(function(){

    $("input[type='file']").on({
      "change": function(){
        var filename = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
        $("#filename").attr('value', filename);
      }
    });

    $("input[type='radio']").on({
      "change": function(){
        if ( !!radio ){
          $('.radio').parents("td").removeClass("radio_error");
        }
      }
    });

    $("input[type='reset']").on("click", function(event){
      $("#filename").attr('value', "");
    });

    $("#submit").on("click", function(event){
      event.preventDefault();
      return validator();
    });

  });

})(jQuery);