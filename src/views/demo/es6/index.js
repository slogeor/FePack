import '../../../styles/index.scss';
import { config, core } from '../../../scripts/index.js';
import  style from './main.css';
import './async.js';
import { util } from './lib.js';

util();
config.fun();
core()
const template = [];
template.push('<h3 class=' + style.textH3 + '>Hello World!</h3>');
document.getElementsByTagName('body')[0].innerHTML=template.join('');
