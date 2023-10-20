/**
 * moreview가 css처리로 display none으로 되어 있음
 * -> list는 기본적으로 다 출력이 되는데 기본 데이터가 3개 출력
 * 	이거를 jstl 비교연산자로 최대 10개까지 출력만 시켜 놓음
 * 이후 js로 더보기 및 간단히 보기 로직 작성
 */
$(function(){
	/*let moreview = $("div > ul > li:nth-child(n+4)");*/ 
	
	$(".moreAteg").click(function(e){
		e.preventDefault();
		console.log("more click");

		// this.classList : 배열 형태의 class 속성을 가짐
		// => 배열이니깐 index 1번이 ${type.type}이 됨
		let type = this.classList[1];
		
		//jQuery 써야되니깐 .을 붙인 뒤 type을 통해 해당 타입의 클래스를 만들어줌
		$("."+type).show();
		$(this).hide();
		
		// .lessAteg 이면서 .type을 보여줌
		// -> 간단히 보기가 보이게 됨
		$(".lessAteg."+type).show();
	});
	
	$(".lessAteg").click(function(e){
		e.preventDefault();
		console.log("less click");
		let type = this.classList[1];

		$("."+type).hide();
		$(this).hide();
		$(".moreAteg."+type).show();
	});
	
})