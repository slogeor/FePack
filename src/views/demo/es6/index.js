import '../../../styles/index.scss';
import style from './main.css';
import './async.js';

const template = [];
template.push('<h3 class=' + style.textH3 + '>Hello World</h3>');
document.getElementsByTagName('body')[0].innerHTML=template.join('');
