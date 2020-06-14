console.log('Init');

setTimeout(function(){
  console.log('First timeOut');
}, 3000);

setTimeout(function(){
  console.log('Second timeOut');
}, 0);

setTimeout(function(){
  console.log('Third timeOut');
}, 0);


console.log('End');