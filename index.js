// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function removeLastDriver(){
  newDrivers = drivers.slice(-1);
  console.log(newDrivers) ;
}

removeLastDriver()
// last function
function removeFirstDriver(){
  newDrivers = drivers.slice(1);
  return newDrivers;
}
