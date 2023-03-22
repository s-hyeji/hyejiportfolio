$(function(){
    //메뉴
    $(".burger_bar_btn").click(function(){
        $("nav").show();
        $(".burger_bar_btn").hide();
        $(".close_btn").show();
    })
    $(".close_btn").click(function(){
        $("nav").hide();
        $(".close_btn").hide();
        $(".burger_bar_btn").show();
    })

    // 다크모드
    // $(".mode_change button").click(function(){
    //     $("html").addClass('light');
    //     $("html").removeClass('dark');
    //     return false;
    // });
    $(".mode_change button").click(function(){
        $("#mode").attr("class","light");
        return false;
    });
})