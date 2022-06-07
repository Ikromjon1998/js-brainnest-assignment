const container = document.querySelector('#container');
const p = document.createElement('p');
p.textContent = 'Hey, I am red!';
p.style.color = 'red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!" ;
h3.style.color = 'blue';
const div = document.createElement('div');
const h1 = document.createElement('h1');
const p1 = document.createElement('p');
h1.textContent = "I'm in a div!" ;
p1.textContent = "I'm in a div!" ;
div.appendChild(h1);
div.appendChild(p1);

container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
