let grade3 = ["김유진", "김유나", "윤주희", "김민주", "유혜은", "오민정"];
let grade2 = ["이현정", "문채영", "최윤영", "양예나", "정현진", "임수민"];
let grade1 = ["유희주", "홍효빈", "이현진", "지수연", "나소정", ""];

let grade3intro = ["자기소개", "자기소개", "자기소개", "자기소개", "자기소개", "자기소개"];
let grade2intro = ["안녕하세요. 마스 1.5기의 부장을 맡고 있는 이현정입니다. 공사 구분은  확실하게, 관계에는 따뜻한 자세로 임하겠습니다.",
                "안녕하세요. MAS 1.5기 부부장 문채영입니다. 능숙한 프로그래밍으로 늘 완벽한 결과를 만들어내겠습니다.", 
                "요 마스의 아이디어 뱅크 최윤영입니다. 가지각색 다양한 아이디어로 팀원들의 시너지를 돋궈냅니다.", 
                "안녕하세요. 마스 1.5기 부원 양예나입니다. 저는 자유분방하지만 열정적으로 모든 일에서 항상 배울 점을 찾는 사람입니다.",     // 실패에서 배울 점을 찾고 더 나은 방향을 얻는 것이 중요하다고 생각합니다.
                "마스 1.5기 정현진입니다. 열심히 활동하며 동아리에 헌신하겠습니다. 인스타 팔로우해주세요. 맞팔은 안해드립니다.",
                "안녕하세요. MAS 1.5기 임수민입니다. 착실하게 배우며 누군가에게 꼭 필요한 사람이 되겠습니다."];
let grade1intro = ["안녕하세요 마스 2기 부장 유희주입니다. 열정을 가지며 활동에 임하고 계속 성장해 나아가겠습니다!",
                "안녕하세요 마스 2기 부부장 홍효빈입나다. 성실하고 끊임없이 발전하도록 노력하겠습니다!",
                "저는 MAS 2기 부원 이현진입니다. 제가 프로그래밍을 함으로써 부족함이 있더라도 언제나 그 부족함을 통해 저 자신을 발전시키도록 노력하겠습니다.",
                "안녕하세요. 1학년 13기 뉴미디어 디자인과 지수연입니다. 다소 서툴고 미숙하지만 열심히 임할 수 있도록 노력하겠습니다!",
                "안녕하세요. 마스 2기 부원 나소정입니다. 꾸준한 열정을 바탕으로, 늘 창의적이고 색다른 생각을 펼치겠습니다!",
                ""];

let role = ["DESIGN", "SOFTWARE", "WEBSOLUTION"];

let names = document.getElementsByClassName('f-title');
let values = document.getElementsByClassName('name');
let roles = document.getElementsByClassName('f-content1');
let intro = document.getElementsByClassName('f-content2');
let t2 = document.getElementById('t2');
let arrow = document.getElementById('arrow');

for(let i = 0; i<values.length; i++) {
    values[i].setAttribute("value", grade3[i]);
}

function change_option(val) {
	if (val === 1) {
        t2.innerText = "1ST MEMBER";
        arrow.innerText = "View more 1ST PROJECT";
        for(let i = 0; i<values.length; i++) {
            values[i].setAttribute("value", grade3[i]);
            names[i+1].innerText = grade3[i];
            names[i+1].setAttribute("value", grade3[i]);
            roles[i+1].innerText = "11기 "+role[i%3];
            intro[i+1].innerText = grade3intro[i];

        }
	} else if (val === 2) {
        t2.innerText = "1.5ND MEMBER";
        arrow.innerText = "View more 1.5ND PROJECT";
		for(let i = 0; i<values.length; i++) {
            values[i].setAttribute("value", grade2[i]);
            names[i+1].innerText = grade2[i];
            names[i+1].setAttribute("value", grade2[i]);
            roles[i+1].innerText = "12기 "+role[i%3];
            intro[i+1].innerText = grade2intro[i];
        }
	} else if (val === 3) {
        t2.innerText = "2ND MEMBER";
        arrow.innerText = "View more 2ND PROJECT";
        for(let i = 0; i<values.length; i++) {
            values[i].setAttribute("value", grade1[i]);
            names[i+1].innerText = grade1[i];
            names[i+1].setAttribute("value", grade1[i]);
            roles[i+1].innerText = "13기 "+role[i%3];
            intro[i+1].innerText = grade1intro[i];
        }
    }
}

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let $html = $("html");
 
let page = 1;
 
let lastPage = 2;   
console.log($(".container").length);
 
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