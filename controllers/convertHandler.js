/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    let result;
    const regexResult=input.match(/^([0-9]+\.?[0-9]*\/?[0-9]*\.?[0-9]*)?[a-zA-Z]+$/)
    
    if(regexResult){
      result = regexResult[1] ? eval(regexResult[1]) : 1;
      return result;
    }
    return 'invalid number'
  };
  
  this.getUnit = function(input) {
    var result;
    let regex=/gal$|GAL$|l$|L$|mi$|MI$|km$|KM$|lbs$|LBS$|kg$|KG$/;
    if(regex.test(input)){
      result = input.match(regex)
      return result[0]
    }
    return 'invalid unit';
  };
  
    const unitObj=[];    
    unitObj['gal']='l';
    unitObj['l']='gal';    
    unitObj['mi']='km';
    unitObj['km']='mi';    
    unitObj['lbs']='kg';
    unitObj['kg']='lbs';
    unitObj['GAL']='l';
    unitObj['L']='gal';    
    unitObj['MI']='km';
    unitObj['KM']='mi';    
    unitObj['LBS']='kg';
    unitObj['KG']='lbs';
  
  this.getReturnUnit = function(initUnit) {    
    return unitObj[initUnit];
  };

  const stringUnit=[];
  stringUnit['gal']='gallons';
  stringUnit['l']='liters';    
  stringUnit['mi']='miles';
  stringUnit['km']='kilometers';    
  stringUnit['kg']='kilograms';
  stringUnit['lbs']='pounds';
  stringUnit['GAL']='gallons';
  stringUnit['L']='liters';    
  stringUnit['MI']='miles';
  stringUnit['KM']='kilometers';    
  stringUnit['KG']='kilograms';
  stringUnit['LBS']='pounds';
  
  this.spellOutUnit = function(unit) {
    return stringUnit[unit];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    let result;
    
    switch(initUnit){
      case 'L':
      case 'l':{
        result=initNum/galToL;
        break;
      }
        case 'GAL':
        case 'gal':{
          result=galToL*initNum;
        break;
      }
        case 'KG':
        case 'kg':{
        result=initNum/lbsToKg;
        break;
      }
        case 'LBS':
        case 'lbs':{
          result=lbsToKg*initNum;
        break;
      }
        case 'KM':
        case 'km':{
        result=initNum/miToKm;
        break;
      }
        case 'MI':
        case 'mi':{
          result=miToKm*initNum;
        break;
      }
      default:
        break;
    }
    
    
    return result;
  };
  

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${stringUnit[initUnit]} converts to ${returnNum} ${stringUnit[returnUnit]}`;
  };
  
}

module.exports = ConvertHandler;
