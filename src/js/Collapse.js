/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

export default class Collapse {
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
