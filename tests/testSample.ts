import * as mocha from "mocha"
import * as chai from "chai"

import {IndexController} from "../typescript/IndexController"

let should = chai.should();

describe('Test beverages.', function() {
  it('Should assert when the array is not correct.', function() {

    var beverages = ['chai', 'matcha', 'oolong'];
    beverages.should.have.length(3);

    var foo = beverages[0];
    foo.should.be.a('string');
    foo.should.equal('chai');
    foo.should.have.length(4);
  });
});

describe('IndexController', function() {
  it('Should return assert when IndexController is not correct.', function() {

    let indexController = new IndexController();

    let className = indexController.className;
    className.should.be.a('string');
    className.should.equal('IndexController');
  });
});