import React from 'react';
import ReactDOM from 'react-dom';

global.dject = require('dject');

describe('Base application', function () {
  
  let App;
  
  beforeEach(function (done) {

    import('../ioc-registrations').then(function (result){
      const testContainer = result.default.new();

      App = testContainer.build('App');
      
      done();
    });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    
    ReactDOM.unmountComponentAtNode(div);
  });
  
});

