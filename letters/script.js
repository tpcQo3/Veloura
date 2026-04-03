function updateTheme() {
  const theme = document.getElementById("theme").value;

  console.log("Theme selected:", theme); // 👈 thêm dòng này

  document.body.classList.remove("dark", "romantic");

  if (theme !== "default") {
    document.body.classList.add(theme);
  }
}

function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.*?)\*/g, "<i>$1</i>")
    .replace(/__(.*?)__/g, "<u>$1</u>")
    .replace(/\n/g, "<br>");
}

function updatePreview() {
  const content = document.getElementById("content").value;
  const theme = document.getElementById("theme").value;
  const preview = document.getElementById("preview");

  preview.className = theme;
  preview.innerHTML = parseMarkdown(content);

  document.getElementById("count").innerText =
    content.length + " / 2000";
}

function wrap(symbol) {
  const textarea = document.getElementById("content");
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const text = textarea.value;

  textarea.value =
    text.substring(0, start) +
    symbol +
    text.substring(start, end) +
    symbol +
    text.substring(end);

  updatePreview();
}