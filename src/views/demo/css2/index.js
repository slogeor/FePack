import '../../../styles/index.scss';
import style from './main.css';

const template = [];
template.push('<header class="header">hello <span class="h3">webpack</span></header>');
template.push('<h3 class=' + style.textH3 + '>This is H3</h3>');
document.getElementById('root').innerHTML=template.join('');
