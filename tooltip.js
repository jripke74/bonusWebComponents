class Tooltip extends HTMLElement {
  constructor() {
    super();
    const tooltipIcon = document.createElement('spane');
    tooltipIcon.textContent = ' (?)';
    this.appendChild(tooltipIcon);
  }
}

customElements.define('uc-tooltip', Tooltip);
