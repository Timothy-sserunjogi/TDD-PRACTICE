/**
Patience A
Timothy S
**/
const chai = require("chai");
const expect = chai.expect;
const assert = require('chai').assert;
const Sequence = require('../fibonacci');
const factorize = require('../factorial');

describe('Calculating the fibonacci sequence', function(){
    let fibSequence = Sequence;
   
    

    it('check that fibonacci sequence is not a string', function(){
        assert.isNotString(fibSequence); 
    });

    it('check the ninth value of the sequence to be a number', function(){
        expect(fibSequence(8)).to.equal(21);
        
    });

});


describe("factorize", function() {
	it("Pesh should be an equal", function() {
		expect(factorize(0)).to.equal(1);
	});
});

