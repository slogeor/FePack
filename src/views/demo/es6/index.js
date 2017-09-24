import '../../../styles/index.scss';
import style from './main.css';
import './async.js';

const template = [];
template.push('<h3 class=' + style.textH3 + '>Hello World</h3>');
document.getElementById('root').innerHTML=template.join('');
