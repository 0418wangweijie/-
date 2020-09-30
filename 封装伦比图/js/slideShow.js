function slideShow(selector, imgList) {
  console.log(imgList);
  let slidesShowDiv = document.querySelector(selector);
  console.log(slidesShowDiv);
  function createSlidesShow(imgList) {
    let imgListDiv = document.createElement("div");
    let dotDiv = document.createElement("div");
    imgListDiv.className = "imgList";
    dotDiv.className = "dotList";
    imgList.forEach((item, i) => {
      if (i == 0) {
        imgListDiv.innerHTML =
          imgListDiv.innerHTML +
          '<div class="imgItem active" style="background-image:url(' +
          item +
          ')"></div>';
        dotDiv.innerHTML =
          dotDiv.innerHTML +
          '<div id="dot' +
          i +
          '" class="dotItem active"></div>';
      } else {
        imgListDiv.innerHTML =
          imgListDiv.innerHTML +
          '<div class="imgItem active" style="background-image:url(' +
          item +
          ')"></div>';
        dotDiv.innerHTML =
          dotDiv.innerHTML + '<div id="dot' + i + '" class="dotItem"></div>';
      }
    });
    slidesShowDiv.appendChild(imgListDiv);
    slidesShowDiv.appendChild(dotDiv);
    slidesShowDiv.innerHTML =
      slidesShowDiv.innerHTML +
      `
      <div class="btn pre"> < </div>
      <div class="btn next"> > </div>
    `;
  }
  //slidesShowDiv.appendChild(createSlidesShow(imgList));
  createSlidesShow(imgList);

  let preBtn = document.querySelector(selector + " .pre");
  let nextBtn = document.querySelector(selector + " .next");
  let imgListDivs = document.querySelectorAll(selector + " .imgItem");
  let dotDivs = document.querySelectorAll(selector + " .dotItem");
  let currentImg = 0;
  imgListDivs.forEach((item, i) => {
    item.classList.remove("active");
  });
  dotDivs.forEach((item, i) => {
    item.classList.remove("active");
  });
  imgListDivs[currentImg].classList.add("active");
  dotDivs[currentImg].classList.add("active");

  console.log(imgListDivs);
  nextBtn.onclick = function () {
    currentImg++;
    if (currentImg >= imgListDivs.length) {
      currentImg = 0;
    }
    renderImgs();
    console.log(imgListDivs);
  };
  preBtn.onclick = function () {
    console.log(currentImg);
    if (currentImg < 0) {
      currentImg = imgListDivs.length - 1;
    }
    renderImgs();
    currentImg--;
  };
  function renderImgs() {
    imgListDivs.forEach((item, i) => {
      item.classList.remove("active");
    });
    dotDivs.forEach((item, i) => {
      item.classList.remove("active");
    });
    imgListDivs[currentImg].classList.add("active");
    dotDivs[currentImg].classList.add("active");
  }

  dotDivs.forEach((item, i) => {
    item.onclick = function () {
      currentImg = i;
      renderImgs();
    };
  });
  let tiem = setInterval(
    (nextBtn.onclick = function () {
      currentImg++;
      if (currentImg >= imgListDivs.length) {
        currentImg = 0;
      }
      renderImgs();
      console.log(imgListDivs);
    }),
    2000
  );
  slidesShowDiv.onmouseover = function () {
    clearInterval(tiem);
  };
  slidesShowDiv.onmouseout = function () {
    tiem = setInterval(
      (nextBtn.onclick = function () {
        currentImg++;
        if (currentImg >= imgListDivs.length) {
          currentImg = 0;
        }
        renderImgs();
        console.log(imgListDivs);
      }),
      2000
    );
  };
}
