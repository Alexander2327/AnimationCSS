/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Collapse.js
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

class Collapse {
  constructor(element, text) {
    this.element = element;
    this.text = text;
  }
  init() {
    const collapseBtn = this.element.querySelector('.collapse-btn');
    const contentConteiner = document.createElement('div');
    contentConteiner.classList.add('collapse-content');
    contentConteiner.innerHTML = `<p class="collapse-text">${this.text}</p>`;
    this.element.appendChild(contentConteiner);
    const contentHeight = contentConteiner.clientHeight;
    contentConteiner.style.maxHeight = '0px';
    collapseBtn.addEventListener('click', () => {
      this.click(contentConteiner, contentHeight);
    });
  }
  click(contentConteiner, contentHeight) {
    if (contentConteiner.classList.contains('active')) {
      contentConteiner.style.maxHeight = '0px';
      contentConteiner.classList.remove('active');
    } else {
      contentConteiner.style.maxHeight = `${contentHeight}px`;
      contentConteiner.classList.add('active');
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */

const contentText = `Anyone who reads Old and Middle English literary texts will 
be familiar with the mid-brown volumes of the EETS, with the symbol of Alfred's jewel 
embossed on the front cover. Most of the works attributed to King Alfred or to Aelfric, 
along with some of those by bishop Wulfstan and much anonymous prose and verse from the 
pre-Conquest period, are to be found within the Society's three series; all of the surviving 
medieval drama, most of the Middle English romances, much religious and secular prose and verse 
including the English works of John Gower, Thomas Hoccleve and most of Caxton's prints all find 
their place in the publications. Without EETS editions, study of medieval English texts would hardly 
be possible.`;
const collapse = new Collapse(document.querySelector('.collapse-container'), contentText);
collapse.init();
;// CONCATENATED MODULE: ./src/index.js
/* eslint-disable linebreak-style */


/******/ })()
;