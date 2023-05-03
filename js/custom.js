$('.tit .btn').click(function () {
    // $('.nav').css({display:"block"});
    // $('.nav').show();
    // $('.nav').slideDown();
    // $('.nav').toggle(); 하나의 버튼으로 껐다켰다
    // $('.nav').fadeToggle();
    $('.nav').slideToggle(300);
    $(this).toggleClass("on");
    //btn을 눌렀을 때 class 이름에 on이 추가됐다가 다시 누르면 없어짐
});

//banner 
    $('.ban').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

//갤러리
    $('.gallery_img').slick({
        arrows:false, //넘기는 키 없애기
    });
    

    //https://github.com/kenwheeler/slick/ 에 Methods
    $('.gallery_btn .play').click(function(){
        $('.gallery_img').slick('slickPlay');
    });
    $('.gallery_btn .pause').click(function(){
        $('.gallery_img').slick('slickPause');
    });
    $('.gallery_btn .prev').click(function(){
        $('.gallery_img').slick('slickPrev');
    });
    $('.gallery_btn .next').click(function(){
        $('.gallery_img').slick('slickNext');
    });




// 탭메뉴
let tab_list=$('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active>ul').show();

$('.tab_menu>ul>li>a').click(function(e){
    e.preventDefault();
    var $this = $(this);

    $this.next().show().parent('li').addClass("active").siblings('li').removeClass("active").find('ul').hide();
});
//e는 이벤트, 윈도우가 기능해줌(클릭해도 페이지가 맨 위로 움직이지 않음)
/*  $this.next().show();
$this.parent('li').addClass("active");
$this.parent('li').siblings('li').removeClass("active");
$this.parent('li').siblings('li').find('ul').hide(); */
//.next는()는 바로 밑 요소(바로밑동생을 뜻함)
//.parent() 부모요소
//.siblings() 나를 제외한 형제들
//.find() 하위요소(내안에 있는 요소들)


/* layer popup */
$('.layer').click(function(event){
    event.preventDefault();
    $('#layer').fadeIn();
});
//e는 이벤트, 윈도우가 기능해줌(클릭해도 페이지가 맨 위로 움직이지 않음)
//아무거나 써도 됨

$('#layer .close').click(function(event){
    event.preventDefault();
    $('#layer').fadeOut();
});

//윈도우 팝업

$('.window').click(function(ev){
    ev.preventDefault();
    window.open("popup.html", "child", "width=900,height=590,left=100, top=200");
});


//lightgallery
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgThumbnail],
    speed: 500,
});