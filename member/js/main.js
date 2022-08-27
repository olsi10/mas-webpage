let grade3 = ["김유진", "김유나", "윤주희", "김민주", "유혜은", "오민정"];
let grade2 = ["이현정", "문채영", "최윤영", "양예나", "정현진", "임수민"];
let grade1 = ["노현지", "이현진", "홍효빈", "지수연", "나소정", "윤희주"];

let grade3intro = ["자기소개", "자기소개", "자기소개", "자기소개", "자기소개", "자기소개"];
let grade2intro = ["자기소개", "자기소개", "자기소개", 
                "안녕하세요. 마스 1.5기 부원 양예나입니다. 저는 자유분방하지만 열정적으로 모든 일에서 항상 배울 점을 찾는 사람입니다. 실패에서 배울 점을 찾고 더 나은 방향을 얻는 것이 중요하다고 생각합니다. 저는 언젠가 다재다능한 전문가가 되어 디자인으로 저를 소개할 날이 오기를 바랍니다.", 
                "소프트웨어과 12기, 마스 1.5기 정현진입니다. 열심히 활동하며 동아리에 헌신하겠습니다. 인스타 팔로우해주세요. 맞팔은 안해드립니다.", 
                "자기소개"];
let grade1intro = ["자기소개", 
                "저는 MAS 2기 부원 이현진입니다. 제가 프로그래밍을 함으로써 부족함이 있더라도 언제나 그 부족함을 통해 저 자신을 발전시키도록 노력하겠습니다.",
                "", 
                "자기소개",
                "안녕하세요. 마스 2기 부원 나소정입니다. 꾸준한 열정을 바탕으로, 늘 창의적이고 색다른 생각을 펼치겠습니다!",
                "안녕하세요 마스 2기 부원인 유희주입니다. 열정을 가지며 활동에 임하고 계속 성장해 나아가겠습니다."];

let role = ["DESIGN", "SOFTWARE", "WEBSOLUTION"];

let names = document.getElementsByClassName('f-title');
let roles = document.getElementsByClassName('f-content1');
let intro = document.getElementsByClassName('f-content2');
let t2 = document.getElementById('t2');
let arrow = document.getElementById('arrow');

function change_option(val) {
	if (val === 1) {
        t2.innerText = "1ST MEMBER";
        arrow.innerText = "View more 1ST PROJECT";
        for(let i = 0; i<6; i++) {
            names[i+1].innerText = grade3[i];
            roles[i+1].innerText = "11기 "+role[i%3];
            intro[i+1].innerText = grade3intro[i];

        }
	} else if (val === 2) {
        t2.innerText = "1.5ND MEMBER";
        arrow.innerText = "View more 1.5ND PROJECT";
		for(let i = 0; i<6; i++) {
            names[i+1].innerText = grade2[i];
            roles[i+1].innerText = "12기 "+role[i%3];
            intro[i+1].innerText = grade2intro[i];
        }
	} else if (val === 3) {
        t2.innerText = "2ND MEMBER";
        arrow.innerText = "View more 2ND PROJECT";
        for(let i = 0; i<6; i++) {
            names[i+1].innerText = grade1[i];
            roles[i+1].innerText = "13기 "+role[i%3];
            intro[i+1].innerText = grade1intro[i];
        }
    }
}
