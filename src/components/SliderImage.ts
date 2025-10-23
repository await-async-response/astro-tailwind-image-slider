import '../styles/global.css';
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("slider-image")
export class SliderImage extends LitElement {
  @property({ type: String }) src = "";

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('slide', 'w-full', 'h-full', 'md:w-1/2', 'lg:w-1/3', 'flex-shrink-0', 'snap-end', 'px-2');
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="slide-content shadow-indigo-300 w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-shadow">
        <img
          class="object-contain"
          src="${this.src || 'https://dummyimage.com/800x400/000/fff'}"
          alt="Slider Image"
        />
      </div>
    `;
  }
}
