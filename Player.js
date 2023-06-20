import VisualElement from "./VisualElement.js";

export default class Player extends VisualElement {
    constructor(width, height, x, y, imgPath, imgClickedPath) {
        super(width, height, x, y, imgPath);
        this.imgCLickPath = imgClickedPath;
        this._element.classList.add('player');
     
    }

    get x() {
        return this._x;
    }
    set x(val) {
        this._x = val;
        this._element.style.left = val + 'px';
    }
    get y() {
        return this._y;
    }
    set y(val) {
        this._y = val;
        this._element.style.top = val + 'px';
    }
    _createElement(width, height, x, y, imgPath) {
        let element = document.createElement('div');
        element.style.width = width + 'px';
        element.style.height = height + 'px';
        element.style.left = x + 'px';
        element.style.top = y + 'px';
        element.style.backgroundImage = `url('${imgPath}')`;
        element.classList.add('image', 'player');
        return element;

    }
    move(e) {
        let x = e.clientX - this.width / 2;
        let y = e.clientY - this.height / 2;

        this.x = x;
        this.y = y;

    }
    handleClick() {
        this._element.style.backgroundImage = `url('${this.imgClickedPath}')`;   
        setTimeout(() => this._element.style.backgroundImage = `url('${this.imgPath}')`, 200); 
  }
}