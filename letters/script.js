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
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

function updatePreview() {
  const content = document.getElementById("content").value;
  const preview = document.getElementById("preview");

  const font = document.getElementById("font").value;
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;
  document.getElementById("font").addEventListener("change", updatePreview);
  document.getElementById("size").addEventListener("change", updatePreview);
  document.getElementById("color").addEventListener("input", updatePreview);

  // nếu có custom font thì ưu tiên
  const customFontInput = document.getElementById("customFont");
  let finalFont = font;

  if (customFontInput && customFontInput.value.trim() !== "") {
    finalFont = customFontInput.value.trim();
  }

  // render markdown
  preview.innerHTML = parseMarkdown(content);

  // apply style
  preview.style.fontFamily = `'${finalFont}', sans-serif`;
  preview.style.fontSize = size;
  preview.style.color = color;

  // update counter
  document.getElementById("count").innerText =
    content.length + " / 2000";
}