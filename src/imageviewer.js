  // Must have PREFIX and IMG_COUNT set.

  console.log("PREFIX is set to: " + PREFIX);
  console.log("IMG_COUNT is set to: " + IMG_COUNT);

  const images = pullImagesFromDOM();
  const imageTexts = pullTextsFromDOM();

  const nextBtn = document.getElementById(PREFIX + "-next-btn");
  console.log(`next button set: ${nextBtn}`);
  const prevBtn = document.getElementById(PREFIX + "-prev-btn");
  console.log(`previous button set: ${prevBtn}`);
  const imageContainer = document.getElementById(PREFIX + "-img-container");
  console.log(`Image container set: ${imageContainer}`);
  const textContainer = document.getElementById(PREFIX + "-text-container");
  console.log(`Text container set: ${textContainer}`);

  var currIndex = 0;
  
  loadCurrImage(images, currIndex);

  function onNextClick() {
    currIndex++;
    handleNextClick( images, currIndex );
  }

  function onPrevClick() {
    currIndex--;
    handlePrevClick( images, currIndex );
  }

  /**
   * Image animation scroller!
   *
   * Requires images named <prefix>-img<i>
   * Requires image count
   * Buttons (next/prev) named <prefix>-next-btn/-prev-btn
   * An image container; use a `<table>` or css grid and place `prev-btn | img | next-btn`
  */

  function pullImagesFromDOM() {
    const images = [];
    for(let i=0; i<IMG_COUNT; i++) {
      const element = document.getElementById(PREFIX + "-img" + i);
      console.log(`Found image ${i}: ${element}`);
      images.push(element);
      element.parentNode.removeChild(element);
    }
    console.log("found " + images.length + " images");
    return images.slice();
  }

  function pullTextsFromDOM() {
    const texts = [];
    for(let i=0; i<IMG_COUNT; i++) {
      const element = document.getElementById(PREFIX + "-text" + i);
      if (element !== null) {
        texts.push(element);
        element.parentNode.removeChild(element);
      }
    }
    console.log("found " + texts.length + " texts");
    return texts.slice();
  }

  function loadCurrImage(images, ind) {
    console.log("Load img " + ind + " out of " + images.length);
    console.log(`${PREFIX}: append to element with ${imageContainer.innerHTML}`);
    imageContainer.innerHTML = '';
    imageContainer.append(images[ind]);
    if (imageTexts !== 'undefined') {
      textContainer.innerHTML = '';
      textContainer.append(imageTexts[ind]);
    }
  }

  function handleNextClick(images, ind) {
    console.log("Curr image index: " + ind);
    loadCurrImage(images, ind);
    if (ind >= 1) enableButton(prevBtn);
    if (ind >= IMG_COUNT-1) disableButton(nextBtn);
  }

  function handlePrevClick(images, ind) {
    console.log("Curr image index: " + ind);
    loadCurrImage(images, ind);
    if (ind < 1) disableButton(prevBtn);
    if (ind < IMG_COUNT-1) enableButton(nextBtn);
  }

  function enableButton(button) {
    button.disabled = false;
  }

  function disableButton(button) {
    button.disabled = true;
  }
