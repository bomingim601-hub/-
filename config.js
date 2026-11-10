/* =====================================================
   ★ 사진 / 소리 자리 (여기만 보면 돼) ★
   - 사진은 images 폴더에 넣고, 아래 파일 이름만 맞추면 자동으로 바뀌어.
   - 같은 이름으로 덮어쓰기만 해도 돼 (코드 수정 필요 없음).
   - 파일이 없으면 회색 자리표시가 나와서 게임은 안 멈춰.
   ===================================================== */
const IMG = {
  /* 배경 */
  interviewBg: "images/interview-bg.jpg",     // 1일차 인터뷰 배경 (베이지)
  lastChatBg:  "images/lastchat-bg.jpg",      // 4일차 X와 마지막 대화 배경 (거실)

  /* 편지 (1일차 X소개서 / 4일차 X룸 같이 사용) */
  envelope:    "images/envelope.jpg",
  letterPaper: "images/letter-paper.jpg",

  /* X룸 */
  cork:        "images/cork.jpg",
  linedPaper:  "images/lined-paper.jpg",
  polaroid1:   "images/polaroid1.jpg",        // 음식 먹는 대영
  polaroid2:   "images/polaroid2.jpg",        // 소파에서 잠든 대영
  polaroid3:   "images/polaroid3.jpg",        // 바닷가 뒤돌아보는 대영
  polaroid4:   "images/polaroid4.jpg",        // 네 컷 사진 (세로로 긴 사진은 자동으로 안 잘림)
  polaroid5:   "images/polaroid5.jpg",        // 따뜻한 음료 든 대영
  ring:        "images/ring.jpg",
  keyring:     "images/keyring.jpg",
  mug:         "images/mug.jpg",
  scarf:       "images/scarf.jpg",

  /* 핸드폰 */
  homeWallpaper: "",                          // 홈 화면 배경 (비우면 검정)
  lockWallpaper: "images/lock-wallpaper.jpg", // 히든 "몇 달 뒤" 잠금화면 (남성 뒷모습)
  iconCall:    "images/icon-call.webp",
  iconMsg:     "images/icon-msg.webp",
  iconMemo:    "images/icon-memo.webp",

  /* 유우시 인스타 */
  yushiProfile: "images/yushi-profile.jpg",
  insta: [                                    // 피드 사진 (6장까지 넣을 수 있어. 지금은 4장)
    "images/insta1.jpg",
    "images/insta2.jpg",
    "images/insta3.jpg",
    "images/insta4.jpg"
    // ,"images/insta5.jpg", "images/insta6.jpg"
  ]
};

const SOUND = {
  ding: "sounds/ding.mp3"    // 알람 효과음. 파일이 없으면 기본 '띵' 소리가 대신 나와
};

const SETTINGS = {
  hiddenIdleSeconds: 10,     // 성공엔딩에서 가만히 두면 히든이 나오는 시간(초)
  endingTitle: "해피엔딩",
  endingText:  "대영과 유우시는 서로의 손을 잡고 함께 프로그램을 나갑니다.",
  badTitle:    "새로운 시작",
  badText:     "대영은 유우시와 서로의 인생에서 오래 기억될 사람으로 남은 채, 새로운 시작을 맞이합니다."
};
