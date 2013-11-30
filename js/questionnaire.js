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
});


