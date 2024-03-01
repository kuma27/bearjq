$(window).on('load', function() {
  // ローディングアニメーション
  $("#splash").delay(1500).fadeOut('slow');
  // ローディング後1.5秒（1500ms）してからフェイドアウト
  $("#splash_logo").delay(1200).fadeOut('slow');
  // ロゴを1.2秒（1200ms）待機してからフェイドアウト
});

// --------------------------------------------------------------
// 5. スクロール途中からヘッダーを出現させるための関数(5-1-6)
// id=aboutが位置指定
// 上から100px 
// --------------------------------------------------------------

// /スクロールすると上部に固定させるための設定を関数でまとめる

function FixedAnime() {
    var aboutOffset = $('#about').offset().top;
    var scroll = $(window).scrollTop();

    if (scroll >= aboutOffset) {
        $('#header').addClass('fixed');
    } else {
        $('#header').removeClass('fixed');
    }
}

$(document).ready(function () {
    // ページが読み込まれたら即座に実行
    FixedAnime();
});

$(window).scroll(function () {
    // スクロール時に実行
    FixedAnime();
});


// --------------------------------------------------------------
// 8.スライダーの設定(6-1-1)
  $('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});


// --------------------------------------------------------------
// 17.フッターにある#page-topをクリックした際の設定(8-1-1)
// スピードは任意
// --------------------------------------------------------------

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 800);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});







// --------------------------------------------------------------
//12.任意のタブにURLからリンクするための関数と実行を記述(5-4-1)
//タブで使用されているclass名はnews_tab
// --------------------------------------------------------------

//任意のタブにURLからリンクするための設定
//タブをクリックしたら
function GethashID (hashIDName){
  if(hashIDName){
    //タブ設定
    $('.news_tab li').find('a').each(function() { //タブ内のaタグ全てを取得
      var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
      if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
        var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
        $('.news_tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
        $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
        //表示させるエリア設定
        $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
        $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
      }
    });
  }
}

//タブをクリックしたら
$('.news_tab a').on('click', function() {
  var idName = $(this).attr('href'); //タブ内のリンク名を取得  
  GethashID (idName);//設定したタブの読み込みと
  return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.news_tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
  GethashID (hashName);//設定したタブの読み込み
});



// --------------------------------------------------------------
// 画面がスクロールを始めたら動かしたい関数を呼び出す
// --------------------------------------------------------------

$(window).scroll(function () {






  // 要素が下から順番に現れる関数の呼び出し
  delayScrollAnime();
});


// --------------------------------------------------------------
// 画面が読み込まれたらすぐに動かしたい関数の読み込みと設定
// --------------------------------------------------------------
$(window).on('load',function(){






// 要素が下から順番に現れる関数の呼び出し
delayScrollAnime();
});




// --------------------------------------------------------------
// 以下は（課題範囲外）となります
// --------------------------------------------------------------
// ハンバーガーナビゲーション設定
// --------------------------------------------------------------
// スマートフォン時にハンバーガーボタンがクリックされたら
$(".openbtn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
// ナビゲーション
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  var pos = Math.round($(elmHash).offset().top-70); //headerの高さを引く
  $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false;//リンクの無効化
});

// --------------------------------------------------------------
// ページ内リンクの設定
// --------------------------------------------------------------
$('.page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

// --------------------------------------------------------------
// 要素が下から順番に現れる（CSS×JS）関数
// --------------------------------------------------------------
function delayScrollAnime() {
  var time = 0.2;//遅延時間を増やす秒数の値
  var value = time;
  $('.delayScroll').each(function () {
    var parent = this;          //親要素を取得
    var elemPos = $(this).offset().top;//要素の位置まで来たら
    var scroll = $(window).scrollTop();//スクロール値を取得
    var windowHeight = $(window).height();//画面の高さを取得
    var childs = $(this).children();  //子要素を取得

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {//指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $(childs).each(function () {    

        if (!$(this).hasClass("fadeUp")) {//アニメーションのクラス名が指定されているかどうかをチェック
          
          $(parent).addClass("play"); //親要素にクラス名playを追加
          $(this).css("animation-delay", value + "s");//アニメーション遅延のCSS animation-delayを追加し
          $(this).addClass("fadeUp");//アニメーションのクラス名を追加
          value = value + time;//delay時間を増加させる
          
          //全ての処理を終わったらplayを外す
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("fadeUp");//アニメーションのクラス名を削除
      value = time;//delay初期値の数値に戻す
    }
  })
}












