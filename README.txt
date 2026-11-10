환승연애♥ 게임 — 버셀(Vercel) 배포용 폴더
=========================================

[올리는 법]  (빌드/설치 필요 없음, 그대로 올리면 돼)
 1) 이 폴더 안의 파일 전체(index.html, style.css, js/, images/, sounds/)를 GitHub 저장소 맨 바깥에 올려.
 2) Vercel에서 그 저장소를 Import → Framework Preset 은 "Other" → Deploy.
    (또는 Vercel 사이트에 폴더째 끌어다 놓기)
 ※ index.html 이 맨 바깥(루트)에 있어야 해. 폴더 안에 한 겹 더 들어가 있으면 안 열려!

[폴더 구조]
 index.html          화면 틀 (건드릴 일 없음)
 style.css           디자인
 js/config.js        ★ 사진·소리 파일 이름 / 10초 히든 시간 / 엔딩 문구  ← 여기만 보면 됨
 js/script-data.js   ★ 대본 글자 전부 (편지·대사·트윗 등, 원본 그대로)
 js/phone.js         아이폰 화면 (전화/메시지/X/메모/인스타)
 js/xroom.js         편지 + X룸
 js/game.js          1~5일차 진행, 투표, 엔딩, 히든
 images/             사진들
 sounds/ding.mp3     알람 효과음 ("띵")

[사진 바꾸는 법]  코드 수정 없이 images 폴더에서 같은 이름으로 덮어쓰면 끝.
 interview-bg.jpg    1일차 인터뷰 배경
 lastchat-bg.jpg     4일차 X와 마지막 대화 배경
 envelope.jpg / letter-paper.jpg    편지봉투 / 편지지
 cork.jpg / lined-paper.jpg         코르크 보드 / 폴라로이드 뒷면(줄 노트)
 polaroid1~5.jpg     폴라로이드 5장 (4번이 네 컷)
 ring.jpg keyring.jpg mug.jpg scarf.jpg   X룸 오른쪽 물건
 icon-call/msg/memo.webp   폰 앱 아이콘
 yushi-profile.jpg   유우시 인스타 프사
 insta1~4.jpg        유우시 인스타 피드 (6장으로 늘리려면 insta5.jpg, insta6.jpg 넣고 config.js 맨 아래 줄 주석(//) 해제)
 lock-wallpaper.jpg  히든 "몇 달 뒤" 잠금화면 배경(남성 뒷모습). (적용됨)
 파일이 없으면 회색 자리표시가 나오니까 게임은 안 멈춰.

[게임 규칙 요약]
 - 성공엔딩 조건: 1·2·3·4일차 문자투표에서 모두 유우시를 한 번씩 눌러봄 + 3일차 비밀채팅에서 "거짓" + 4일차 퍼스널룸에서 유우시 선택.
   → 5일차에서 유우시만 반짝이며 선택 가능. 하나라도 빠지면 유우시 칸이 까맣게 막힘.
 - 폰 닫기: 화면 맨 아래 가로 막대를 누르거나 위로 쓸어올리면 앱 → 홈 → 폰 닫기 순서로 나가져.
 - 해피엔딩에서 아무것도 안 하고 10초 있으면 히든(몇 달 뒤 → 유우시 DM → 인스타).
 - 처음으로 돌아가기: 점수·메모·문자·히든 전부 초기화.
