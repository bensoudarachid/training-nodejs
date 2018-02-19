import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import jsdom from 'jsdom';
require('../../node_modules/babel-polyfill/dist/polyfill.js')

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
//in order to be able to use enzyme.mount to perform full rendering, we need the global window.componentHandler to be present. 
//Thats why we have to import material.js after variable window has been created
require('../../node_modules/material-design-lite/dist/material.js');

// console.log('win.componentHandler='+require('util').inspect(win.componentHandler, false, null))


Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.use(chaiImmutable);