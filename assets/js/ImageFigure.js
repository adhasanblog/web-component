class ImageFigure extends HTMLElement {
  //   constructor() {
  //     super();
  //     console.log('constructed!');
  //   }

  connectedCallback() {
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.caption = this.getAttribute('caption') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
        <figure>
            <img src='${this.src}' alt='${this.alt}'>
            <figcaption>${this.caption}</figcaption>
        </figure>
    `;
  }

  //   disconnectedCallback() {
  //     console.log('disconnected!');
  //   }

  //   adoptedCallback() {
  //     console.log('adopted!');
  //   }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['src', 'alt', 'caption'];
  }
}

customElements.define('image-figure', ImageFigure);

export default ImageFigure;
