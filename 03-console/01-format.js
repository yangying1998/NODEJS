#!/usr/bin/node
const user = { 
  name: '杨影',
  age:  20,
  qq:   '1204749635'
};
const log=console.log;
console.log('name: %s', user.name);
console.log('qq:', user.qq);
console.log(`qq: ${user.qq}`);
console.log('age: %d', user.age);
console.log('JSON: %j', user);

console.error('Error! something wrong!');
//join
log('qq:' + user.qq);
