const fonts = {
  times: "'Times New Roman', Times, serif",
  arial: "Arial, Helvetica, sans-serif",
};

const main = () => {
  const $tags = document.querySelectorAll(".tag");
  listenAlignment($tags);
  listenFontSize($tags)
  listenPrint();
};

const listenFontSize = $tags => {
  let inp = document.getElementById("fontSizeInp");
  inp.addEventListener('change', (e) => {
    $tags.forEach(tag => {
      tag.style.fontSize = `${e.target.value}px`;
    })
  })
}

const listenAlignment = $tags => {
  let leftBtn = document.getElementById("alignLeft");
  let centerBtn = document.getElementById("alignCenter");
  let rightBtn = document.getElementById("alignRight");
  leftBtn.addEventListener('click', () => updateAlignment($tags, "start"));
  centerBtn.addEventListener('click', () => updateAlignment($tags, "center"));
  rightBtn.addEventListener('click', () => updateAlignment($tags, "end"));
};

const updateAlignment = ($tags, option) => {
  $tags.forEach(tag => {
    tag.style.justifyContent = option;
  });
};

const listenPrint = () => {
  document.getElementById("printBtn").addEventListener("click", () => {
    window.print();
  });
}

document.addEventListener('DOMContentLoaded', main);