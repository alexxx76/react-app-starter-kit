import './style.css';
import FlowersImage from './flowers.png';
import CatsImage from './cats.jpg';
import Data from './data.xml';

const root = document.querySelector('#root');
root.classList.add('hello');

const Flowers = new Image();
Flowers.src = FlowersImage;
root.append(Flowers);
Flowers.width = 50;

const Cats = new Image();
Cats.src = CatsImage;
root.append(Cats);
Cats.width = 100;

const p = document.createElement('div');
root.append(p);
p.innerHTML = 'Yellow';

console.log(Data);

alert('Hello world!');