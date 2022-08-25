let grade3 = ["김유진", "김유나", "윤주희", "김민주", "유혜은", "오민정"];
let grade2 = ["이현정", "문채영", "최윤영", "양예나", "정현진", "임수민"];
let grade1 = ["노현지", "이현진", "홍효빈", "지수연", "나소정", "윤희주"];

let grade3intro = ["자기소개", "자기소개", "자기소개", "자기소개", "자기소개", "자기소개"];
let grade2intro = ["자기소개", "자기소개", "자기소개", "자기소개", "자기소개", "자기소개"];
let grade1intro = ["자기소개", 
                "저는 MAS 2기 부원 이현진입니다. 제가 프로그래밍을 함으로써 부족함이 있더라도 언제나 그 부족함을 통해 저 자신을 발전시키도록 노력하겠습니다.",
                "자기소개", "자기소개",
                "안녕하세요. 마스 2기 부원 나소정입니다. 꾸준한 열정을 바탕으로, 늘 창의적이고 색다른 생각을 펼치겠습니다!",
                "자기소개"];

let role = ["DESIGN", "SOFTWARE", "WEBSOLUTION"];

let names = document.getElementsByClassName('f-title');
let roles = document.getElementsByClassName('f-content1');
let intro = document.getElementsByClassName('f-content2');

function change_option(val) {
	if (val === 1) {
        for(let i = 0; i<6; i++) {
            names[i+1].innerText = grade3[i];
            roles[i+1].innerText = "11기 "+role[i%3];
            intro[i+1].innerText = grade3intro[i];

        }
	} else if (val === 2) {
		for(let i = 0; i<6; i++) {
            names[i+1].innerText = grade2[i];
            roles[i+1].innerText = "12기 "+role[i%3];
            intro[i+1].innerText = grade2intro[i];
        }
	} else if (val === 3) {
        for(let i = 0; i<6; i++) {
            names[i+1].innerText = grade1[i];
            roles[i+1].innerText = "13기 "+role[i%3];
            intro[i+1].innerText = grade1intro[i];
        }
    }
}
