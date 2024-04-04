var camelCase = 'camel case';
var CapitaliseCase = 'capitalise case';
var UPPER_SNAKE_CASE = 'upper snake case';

const str = `1:${camelCase},2:${CapitaliseCase},3:${UPPER_SNAKE_CASE}`

var num = 4;
//var numString = String(num);
//var numToString1 = num.toString();
var numToString2 = num + '';

var str1 = '1';
//var strNumber = +str;
var strNumber1 = Number(str1);

if(1) console.log('go') //appear
if('') console.log('go1') // not appear
if(true) console.log('go2') //appear
if(false) console.log('go3') // not appear
if(undefined) console.log('go4') // not appear

if(0 || 1) console.log('go5') //appear
if(0 && 1) console.log('go6') //not appear
if(3 && 1) console.log('go7') //appear



var option = true;

var ternary = option ? 'option is true' : 'option is false';
console.log(ternary) 

var selectedMenu = '3'

switch (selectedMenu) {
    case '1':
        console.log('1');
        break;
    case '2':
        console.log('2');
        break;
    case '3':
        console.log('3, selected');
        break;
    default:
        console.log('select menu');
}



