import './style.css';
import FlowersImage from './flowers.png';
import CatsImage from './cats.jpg';

const el = document.querySelector('#root');
el.classList.add('hello');

const Flowers = new Image();
Flowers.src = FlowersImage;
el.append(Flowers);
Flowers.width = 50;

const Cats = new Image();
Cats.src = CatsImage;
el.append(Cats);
Cats.width = 100;

alert('Hello world!');