import '../node_modules/normalize.css/normalize.css';

import Component from './Component.html';

const component = new Component({
  target: document.body,
  data: {
    name: 'world',
  }
});

export default component;
