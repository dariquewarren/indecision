'use strict';

var nameVar = 'darique';
var nameVar = 'other guy';
console.log('nameVar', nameVar);

var nameLet = 'God';
nameLet = 'doc spock';
console.log('nameLet', nameLet);

var nameConst = 'frank';
console.log('const', nameConst);
function getPet() {
        var petname = 'hal';
        return petname;
}
var petname = getPet();
console.log(petname);
