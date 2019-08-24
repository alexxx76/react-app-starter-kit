function component() {
  console.log('component');
  const element = document.createElement('div');
  element.innerHTML = 'Hello webpack';
  return element;
}

const root = document.querySelector('#root');
root.append(component());