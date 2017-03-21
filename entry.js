// entry.js
import random from 'lodash/random';
import './common.css';
import hello from './hello';
import world from './world';

document.write(`${hello}, ${world}!`);
document.write(`Random: ${random(0, 100)}`);
