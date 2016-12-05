import * as THREE from 'three';
import config from './config';

export default class Game {
    constructor() {
        console.log('start game!');
        console.log('the answer to life, the universe, and everything is: ', config.answerToLifeTheUniverseAndEverything);
    }
}
