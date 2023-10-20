$(function(){
    let pageCss = $("#pageCss");

    /* window.location.href : 현재 웹 페이지 URL 나타내는 js 변수
        .indexOf("") : 문자열 메서드
        -> 현재 URL에서 해당 문자열이 처음 발견된 위치를 반환
        => -1은 찾지 못하면 반환하는거라 페이지가 이동 되었다는걸 의미
    */
    if(window.location.href.indexOf("/view.do") > -1) {
        pageCss.removeClass("list").addClass("view");
    }else{
        if(window.location.href.indexOf("/write.do") > -1){
            pageCss.removeClass("list").addClass("write");
        }
        if(window.location.href.indexOf("/modify.do") > -1){
            pageCss.removeClass("list").addClass("write");
        }
        pageCss.removeClass("view").addClass("list");
    }
});