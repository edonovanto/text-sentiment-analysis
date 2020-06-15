import './style/style.css'
import main from './script/main.js'
import './component/app-bar.js'
import './component/search-bar.js'
import img from '../assets/logo.png'

document.getElementById('myLogo').src=img;
document.addEventListener("DOMContentLoaded", main);

