export default class Game {
    constructor(domElement, pauseButton, player, createDestructable, settings) {
        this.domElement = domElement;
        this.pauseButton = pauseButton;
        this.player = player;
        this.createDestructable = createDestructable;
        this.destructables = [];
        this.baseTime = 0;
        this.settings = settings;
this.domElement.style.width = this.settings.width + 'px';
this.domElement.style.height = this.settings.height + 'px';

    }
    start() {
        let destructable1 = this._createDestructable(this.settings.width, this.settings.height, this.settings.destructablesMinSize, this.settings.destructablesMaxSize);
        let destructable2 = this._createDestructable(this.settings.width, this.settings.height, this.settings.destructablesMinSize, this.settings.destructablesMaxSize);
        this.destructables.push(destructable1);
        this.destructables.push(destructable2);
        this.domElement.appendChild(destructable1._element);
        this.domElement.appendChild(destructable2._element);
        this.domElement.appendChild(this.player._element);
        //this._checkCollision();
        this.moveListener = this.player.move.bind(this.player);
        this.domElement.addEventListener('mousemove', this.moveListener);
        this.domElement.addEventListener("mouseout", () => {
            this.domElement.removeEventListener("mousemove", this.moveListener);
        });
        this.domElement.addEventListener('mouseover', () => {
            this.domElement.addEventListener('mousemove', this.moveListener);
        })
        this.domElement.addEventListener('click', this._checkCollision.bind(this));
        this.pauseButton.addEventListener('click', this.pause.bind(this));
         this.spawnTimer = setInterval(this._spawn.bind(this), this.settings.spawnInterval); 

    }

    _soawn() {
        let destructable = this.createDestructable(this.settings.width, this.settings.height, this.settings.destructablesMinSize, this.settings.destructablesMaxSize);
        this.destructables.push(destructable);
        this.domElement.appendChild(destructable._element);
    }
    pause() {
        clearInterval(this.spawnTimer) {

        }
    }
    _checkCollision(e) {
        this.player.handleClick();
        //this.audioElement.play();
        for (const destructable of this.destructables) {
            let hasCollision = this.player._hasCollision(destructable);
            if (hasCollision) {
                let isDestroyed = destructable.handleCollision();
                if (isDestroyed) {
                    destructable._element.remove();
                    this.destructables = this.destructables.filter(x => x != destructable);
                }
            }

        }
    }
}

module.experts = Game;