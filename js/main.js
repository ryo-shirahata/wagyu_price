$(function(){

  // リンクのスムーススクロール

  // #で始まるリンクをクリックしたら実行
  // 和牛画像でも実行されてしまうが本来は別のリンクが入る想定
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 3000;
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

});
