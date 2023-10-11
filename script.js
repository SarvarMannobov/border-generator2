const all = document.querySelector(".range-block .all");
const tl = document.querySelector(".range-block .tl");
const tr = document.querySelector(".range-block .tr");
const br = document.querySelector(".range-block .br");
const bl = document.querySelector(".range-block .bl");
const bw = document.querySelector(".range-block .bw");
const bc = document.querySelector(".range-block .bc");
const bgc = document.querySelector(".range-block .bgc");
const block = document.querySelector(".block");
const textarea = document.querySelector("textarea");
const elResult = document.querySelector(".result");
const Result = document.querySelector(".result");
const style = document.querySelector(".range-block select");
const TTx = document.querySelector(".TTx");
const TTy = document.querySelector(".TTy");
const TTr = document.querySelector(".TTr");
const option = document.querySelectorAll(".range-block select option");
const select = document.querySelector(".range-block select");

// option.forEach(function(opt, index){

//   opt.addEventListener('input', function(){
//    console.log(opt,);
//   })
// })

select.addEventListener("input", function () {
  block.style.borderStyle = `${select.value}`
});

function setBorderRadius() {
  block.style.border = `${bw.value}px solid ${bc.value}`;
  block.style.background = `${bgc.value}`;
  block.style.borderRadius = `${tl.value}px ${tr.value}px  ${br.value}px ${bl.value}px  `;
}
tl.addEventListener("input", function () {
  numbers = tl.value;
  elResult.textContent = `Top Left: ${tl.value}px`;
});
tr.addEventListener("input", function () {
  numbers = tr.value;
  elResult.textContent = `Top Right: ${tr.value}px`;
});
br.addEventListener("input", function () {
  numbers = br.value;
  elResult.textContent = `Bottom right: ${br.value}px`;
});
bl.addEventListener("input", function () {
  numbers = bl.value;
  elResult.textContent = "Bottom Left: " + numbers + " px";
});
bw.addEventListener("input", function () {
  numbers = bw.value;
  elResult.textContent = "Border Width: " + numbers + " px";
});
TTx.addEventListener("input", function () {
  numbers = TTx.value;
  elResult.textContent = "TransformX: " + numbers + " px";
});
TTy.addEventListener("input", function () {
  numbers = TTy.value;
  elResult.textContent = "TransformY: " + numbers + " px";
});
TTr.addEventListener("input", function () {
  numbers = TTr.value;
  elResult.textContent = "Rotate: " + numbers + " px";
});

all.addEventListener("input", function () {
  block.style.borderRadius = `${all.value}px`;
  tl.value = all.value;
  tr.value = all.value;
  const numbers = all.value;
  bl.value = all.value;
  br.value = all.value;

  elResult.textContent = "All: " + numbers + " px";
});

// TTx.addEventListener('input', function(){
//   numbers = TTx.value;
//   block.style.transform = `translateX(${TTx.value}px)`
//   console.log("X = ", TTx.value);
// })

// TTy.addEventListener('input', function(){
//   numbers = TTy.value;
//   block.style.transform = `translateY(${TTy.value}px)`

//   console.log('Y = ' ,TTy.value);
// })

TTx.addEventListener("input", setTranslate);
TTy.addEventListener("input", setTranslate);

function setTranslate() {
  block.style.transform = `translate(${TTx.value}px, ${TTy.value}px)`;
  
}



TTr.addEventListener("input", function () {
  numbers = TTr.value;
  block.style.transform = `rotate(${TTr.value}deg)`;
});

bw.addEventListener("input", setBorderRadius);
tl.addEventListener("input", setBorderRadius);
tr.addEventListener("input", setBorderRadius);
br.addEventListener("input", setBorderRadius);
bl.addEventListener("input", setBorderRadius);
bw.addEventListener("input", setBorderRadius);
bc.addEventListener("input", setBorderRadius);
bgc.addEventListener("input", setBorderRadius);
