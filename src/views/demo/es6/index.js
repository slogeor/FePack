import 'STYLES/index.scss';
import { config, core } from 'SCRIPTS/index.js';
import  style from './main.css';
import './async.js';
import { util } from './lib.js';

util();
config.fun();
core()
fetch('http://127.0.0.1:8080/api/user/info.json')
.then(function(response) {
  const res = response.json();
  return res;
}).then(function(json) {
  console.log('parsed json', json)
}).catch(function(ex) {
  console.log('parsing failed', ex)
})
const template = [];
template.push('<h3 class=' + style.textH3 + '>Hello World!</h3><h2 class="m-input">m-input</h2>');
document.getElementsByTagName('body')[0].innerHTML=template.join('');
