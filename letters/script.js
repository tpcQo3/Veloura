function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.*?)\*/g, "<i>$1</i>")
    .replace(/\n/g, "<br>");
}

function updatePreview() {
  const content = document.getElementById("content").value;
  const theme = document.getElementById("theme").value;
  const font = document.getElementById("font").value;

  const preview = document.getElementById("previewBox");

  preview.className = "";
  preview.classList.add(theme);
  preview.classList.add("font-" + font);

  preview.innerHTML = parseMarkdown(content);
}