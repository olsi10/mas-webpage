//pageYOffset = 수직 방향으로 스크롤된 거리를 픽셀 단위로 나타낸 수

let prevScroll = window.pageYOffset;

window.onscroll = function() {
  // 반응형 헤더
  let currentScroll = window.pageYOffset;
  
  // 만약 방금 스크롤이 지금 스크롤보다 크다면 (위로 스크롤)
  if (prevScroll > currentScroll) {
    document.getElementById("nav").style.top = "0"; /* 내려오는 것 */
    
  } else {
    // 만약 방금의 스크롤이 지금 스크롤보다 작다면 (아래로 스크롤)
    document.getElementById("nav").style.top = "-100px"; /* 올라오는 것 */
  }

  prevScroll = currentScroll;

}

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let $html = $("html");
 
let page = 1;
 
let lastPage = $(".container").length;
 
$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	let posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});