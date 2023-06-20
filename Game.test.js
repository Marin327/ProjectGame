import Game from '../models/Game.js';
import { expect } from 'chai';

describe('Game', function() {
    it('should call player handleClick on click', function() {
        expect(1).to.equal(1);
        let isClickCalled = false;
        let player = {
            handleClick: function () { isClickCalled  = true; },
            _hasCollision: function() { },
            move: function(){}
        };
        let element = { appendChild: () => {}, addEventListener: () => {}};
        function test(){
            return { handCollision: function() {}};
        }
        let game = new Game(element, player, test);
        game.start();
        
        expect(isClickCalled).to.equal(true);

    })
})
