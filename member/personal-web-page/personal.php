<?php
$name = $_POST['name'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/panel-nav.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap" rel="stylesheet">
    <meta name="google" content="notranslate">
    <!-- 자동번역팝업창삭제 -->
    <title>MEMBER</title>
</head>
<body>
    <header id = "nav">
        <nav class ="nav">
            <div class="logo"></div>
            <div class="hr-div2"></div>
            <div class="t">
                <span class = "t1">MEMBER</span>
                <span class = "t2" id="t2">1ST MEMBER</span>
            </div>
            <ul class ="nav-list">
                <li class ="nav-item"><a href="/index.html">ABOUT</a></li>
                <li class ="nav-item"><a href="../member.html">MEMBER</a></li>
                <li class ="nav-item"><a href="/project/project.html">PROJECT</a></li>
            </ul>

            <div class="hr-div"></div>
                <ul class ="nav-right">
                    <li class ="nav-info">2021 - 2021</li>
                    <li class ="nav-info">MAS MEM</li>
                </ul>
        </nav>
    </header>
    <div class="main">
        <div id = "panel" class="panel">
            <span class="person-name"><?php echo $name; ?></span>
            <div class="personal">
                <span class ="personal-hashtag">#뉴미디어웹솔루션과 #MAS 2기 부원  #유희주</span>
                <span class ="personal-intro">안녕하세요 마스 2기 부원인 유희주입니다.
                    열정을 가지며 활동에 임하고 계속 성장해 나아가겠습니다!</span>
                <div class="license">
                    <span class ="personal-license">LICENSE</span>
                    <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-0lax">ACA  Adobe Photoshop CC 2015 </th>
                            <th class="tg-0lax">ACA  Adobe Illustrator CC 2015</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="tg-0lax">ITQ OA MASTER</td>
                            <td class="tg-0lax">GTQ PS 1급</td>
                          </tr>
                          <tr>
                            <td class="tg-0lax">GTQ AI 1급</td>
                            <td class="tg-0lax"></td>
                          </tr>
                          <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                          </tr>
                          <tr>
                            <td class="tg-0lax"></td>
                            <td class="tg-0lax"></td>
                          </tr>
                        </tbody>
                        </table>
                </div>
                <div class="flagship-project">
                    <span class ="flag-pro">FLAGSHIP PROJECT</span>
                    <table class="tg">
                        <thead>
                          <tr>
                            <th class="tg-0lax">ACA  Adobe Photoshop CC 2015 </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="tg-0lax">ACA  Adobe Illustrator CC 2015 두 개 정도만 적읍시다</td>
                          </tr>
                          <tr>
                            <td class="tg-0lax"></td>
                          </tr>
                          <tr>
                            <td class="tg-0lax"></td>
                          </tr>
                          <tr>
                            <td class="tg-0lax"></td>
                          </tr>
                        </tbody>
                        </table>
                </div>
                
                <!-- status 참고 -->
                <!-- https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705/ -->
                <div class="skill">
                    <span class ="sk">SKILLS</span>
                    <div class="flex-wrapper">
                        <div class="single-chart">
                          <svg viewBox="0 0 36 36" class="circular-chart orange">
                            <path class="circle-bg"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <path class="circle"
                              stroke-dasharray="30, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"/>
                            <text x="18" y="20.35" class="percentage">30%</text>
                          </svg>
                          <text class="skill-kind1">PHOTOSHOP</text>
                        </div>
                        
                        <div class="single-chart">
                          <svg viewBox="0 0 36 36" class="circular-chart green">
                            <path class="circle-bg"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path class="circle"
                              stroke-dasharray="60, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" class="percentage">60%</text>
                          </svg>
                          <text class="skill-kind2">PHOTOSHOP</text>
                        </div>
                      
                        <div class="single-chart">
                          <svg viewBox="0 0 36 36" class="circular-chart blue">
                            <path class="circle-bg"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path class="circle"
                              stroke-dasharray="90, 100"
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" class="percentage">90%</text>
                          </svg>
                          <text class="skill-kind3">PHOTOSHOP</text>
                        </div>

                        <div class="single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart blue">
                              <path class="circle-bg"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path class="circle"
                                stroke-dasharray="90, 100"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <text x="18" y="20.35" class="percentage">90%</text>
                            </svg>
                            <text class="skill-kind4">PHOTOSHOP</text>
                          </div>

                          <div class="single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart blue">
                              <path class="circle-bg"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path class="circle"
                                stroke-dasharray="90, 100"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <text x="18" y="20.35" class="percentage">90%</text>
                            </svg>
                            <text class="skill-kind5">PHOTOSHOP</text>
                          </div>
                      </div>
                </div>
            </div>
        </div>

        <div class="grade">
            <ul class="grade-list">
                <li><p><a onclick="change_option(1)">2021 1ST</a></li>
                <li><p><a onclick="change_option(2)">2021 1.5ND</a></li>
                <li><p><a onclick="change_option(3)">2022 2ND</a></li>
            </ul>
        </div>

        <div class="arrow">
            <img class ="img-arrow" src="/img/PROJECT VIEW.png" alt="">
            <span class="text-arrow" id="arrow">View more 1ST PROJECT</span>
        </div>

        <div class="moto">
            <span class ="personal-moto">YOUR MOTO</span>
        </div>

    </div>
    <script src="../js/main.js"></script>
    <script src="./js/main.js"></script>
</body>
</html>