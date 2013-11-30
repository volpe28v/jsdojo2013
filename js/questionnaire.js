$(function() {
  var count = 0;

  function replace_with_span(string) {
    var tag_open, tag_close = "</span>";
    var tagged_string = "";

    for (i = 0; i < string.length; i++) {
        tmp = string.substr(i, 1);
        count++;
        tag_open = "<span id=" + String(count) + " class='good_3'>";
        tagged_string += (tag_open + tmp + tag_close);
    }
    console.log(tagged_string);
    return tagged_string;
  }

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

    keep_text = replace_with_span(keep_text);
    problem_text = replace_with_span(problem_text);
    try_text = replace_with_span(try_text);


    $("#keep_show").prepend($('<p>').html(keep_text));
    $("#problem_show").prepend($('<p>').html(problem_text));
    $("#try_show").prepend($('<p>').html(try_text));
    $("#keep").val("");
    $("#problem").val("");
    $("#try").val("");

    return false;
  });

  $('#good_button').click(function(){
    var selected_text = $.selection('html');
    var select_dom = $(selected_text);
    select_dom.each(function(){
      var id = $(this).attr("id");
      var $word = $("#" + id)
      if($word.hasClass("good_1")){
        $word.removeClass("good_1");
        $word.addClass("good_2");
      }else if($word.hasClass("good_2")){
        $word.removeClass("good_2");
        $word.addClass("good_3");
      }else if($word.hasClass("good_3")){
        $word.removeClass("good_3");
        $word.addClass("good_4");
      }else if($word.hasClass("good_4")){
        $word.removeClass("good_4");
        $word.addClass("good_5");
      }else if($word.hasClass("good_5")){
        $word.removeClass("good_5");
        $word.addClass("good_6");
      }else if($word.hasClass("good_6")){
        $word.removeClass("good_6");
        $word.addClass("good_7");
      }else if($word.hasClass("good_7")){
      }
//      console.log($(this));
    })
//    console.log(selected_text);
  });

  $('#bad_button').click(function(){
    var selected_text = $.selection('html');
    var select_dom = $(selected_text);
    select_dom.each(function(){
      var id = $(this).attr("id");
      var $word = $("#" + id)
      if($word.hasClass("good_7")){
        $word.removeClass("good_7");
        $word.addClass("good_6");
      }else if($word.hasClass("good_6")){
        $word.removeClass("good_6");
        $word.addClass("good_5");
      }else if($word.hasClass("good_5")){
        $word.removeClass("good_5");
        $word.addClass("good_4");
      }else if($word.hasClass("good_4")){
        $word.removeClass("good_4");
        $word.addClass("good_3");
      }else if($word.hasClass("good_3")){
        $word.removeClass("good_3");
        $word.addClass("good_2");
      }else if($word.hasClass("good_2")){
        $word.removeClass("good_2");
        $word.addClass("good_1");
      }else if($word.hasClass("good_1")){
        $word.removeClass("good_1");
        $word.addClass("good_1");
      }
//      console.log($(this));
    })
//    console.log(selected_text);
  });
});


