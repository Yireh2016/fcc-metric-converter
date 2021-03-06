/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.523L';
     
      assert.equal(convertHandler.getNum(input),32.523);
      done();
    });
    
    test('Fractional Input', function(done) {
       var input = '1/2L';
      assert.equal(convertHandler.getNum(input),0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
       var input = '1.5/2L';
      assert.equal(convertHandler.getNum(input),0.75);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
       let input = '1.5/2/2L';
       assert.equal(convertHandler.getNum(input),'invalid number');
       done();
    });
    
    test('No Numerical Input ', function(done) {
      let input = 'L';
      assert.equal(convertHandler.getNum(input),1);
      done();

    }); 
    
  });  
    
  suite('Function convertHandler.getUnit(input)', function() {
    let regex = /(?=gal$|GAL$|l$|L$|mi$|MI$|km$|KM$|lbs$|LBS$|kg$|KG$)/;
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      
      input.forEach(function(unit) { 
        
        assert.equal(convertHandler.getUnit(unit),unit.replace(/[0-9/.]*/,""))
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      let unit='cm'
        assert.equal(convertHandler.getUnit(unit),'invalid unit')
      done();
    });  
    
  });  
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });    

  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  
  
    
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      var input = [10, 'l'];
      var expected = 2.64172;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [10, 'mi'];
      var expected = 16.0934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [10, 'km'];
      var expected = 6.21371;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [10, 'lbs'];
      var expected = 4.53592;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [10, 'kg'];
      const expected = 22.0462;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});