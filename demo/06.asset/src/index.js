import _ from 'lodash';
import './style.css';
// import styles from './style.css';
import login from './login.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.classList.add('icon-home');


  // 将图像添加到我们现有的 div
  var myLogin = new Image();
  myLogin.src = login;
  element.appendChild(myLogin);
  console.log(Data);
  return element;
}

document.body.appendChild(component());
