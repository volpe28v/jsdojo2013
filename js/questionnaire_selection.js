$(function() {

  // サブミットされたら、下の画面に表示する
  $("#questionnaire").on("submit",function(){
    var name = $('#name').val();
    var keep_text = $('#keep').val();
    var problem_text = $('#problem').val();
    var try_text = $('#try').val();

    console.log(name);
    console.log(keep_text);
    console.log(problem_text);
    console.log(try_text);

    $("#questionnaire_show").prepend($('<p>').html(name));

    return false;
  });


  $('#sel-html').click(function(){
    var selected_text = $.selection('html');
    var select_dom = $(selected_text);
    select_dom.each(function(){
      var id = $(this).attr("id");
      var before_font_size = $(this).css("font-size") + 0;
      if ( before_font_size == 0){ before_font_size = 20;}
      $("#" + id).css("font-size",before_font_size + 10);
//      console.log($(this));
    })
//    console.log(selected_text);
  });
});


