// const inputDate = document.getElementById("day").textContent.trim();
// const inputText = document.getElementById("textBox").value;
// const inputImg = document.querySelector(".img")


const dayEl = document.getElementById("day");
const textEl = document.getElementById("textBox");
const imgEls = document.querySelectorAll(".img input[type='image']");
const saveBtn = document.querySelector(".btnSave");

// h1#day가 비어있으면 한국어 포맷으로 날짜 채워주기(선택)
if (!dayEl.textContent.trim()) {
  dayEl.textContent = new Date().toLocaleDateString("ko-KR", {
    year: "numeric", month: "long", day: "numeric", weekday: "short"
  }); // 예: 2025년 8월 17일 (일)
}

// SAVE 클릭 시 저장
saveBtn.addEventListener("click", () => {
  const content = textEl.value.trim();
  if (!content) {
    alert("내용을 입력하세요!");
    return;
  }

  // 이미지 src 수집 (비어있는 src는 제외)
  const images = Array.from(imgEls)
    .map(el => el.getAttribute("src"))
    .filter(src => src && src.trim() !== "");

  const entry = {
    id: (crypto.randomUUID && crypto.randomUUID()) || String(Date.now()),
    createdAt: new Date().toISOString(),      // 정렬/검색에 유리한 ISO
    dayLabel: dayEl.textContent.trim(),       // 화면 표시용 라벨(선택)
    content,                                   // 일기 본문
    images                                     // ["...","..."]
  };

  const diaries = JSON.parse(localStorage.getItem("diary") || "[]");
  diaries.push(entry);
  localStorage.setItem("diary", JSON.stringify(diaries));

  // // 입력창 비우기 및 피드백
  // textEl.value = "";
  // alert("저장되었습니다!");
});


// textarea 작성된 글 높이에 맞춰 자동으로 높이 조절
const textarea = document.getElementById("textBox");

textarea.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});