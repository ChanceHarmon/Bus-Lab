'use strict';
console.log('script loaded');

var busMall1 = document.getElementById('busmall1');
var busMall2 = document.getElementById('busmall2');
var busMall3 = document.getElementById('busmall3');

var allPics = [];

function MallPics(name, type) {
  this.filepath = `images/${name}${type}`;
  this.name = name;
  this.type = type;
  this.views = 0;
  allPics.push(this);
}

new MallPics('bag', '.jpg');
new MallPics('banana', '.jpg');
new MallPics('bathroom', '.jpg');
new MallPics('boots', '.jpg');
new MallPics('breakfast', '.jpg');
new MallPics('bubblegum', '.jpg');
new MallPics('chair', '.jpg');
new MallPics('cthulhu', '.jpg');
new MallPics('dog-duck', '.jpg');
new MallPics('dragon', '.jpg');
new MallPics('pen', '.jpg');
new MallPics('pet-sweep', '.jpg');
new MallPics('scissors', '.jpg');
new MallPics('shark', '.jpg');
new MallPics('sweep', '.png');
new MallPics('tauntaun', '.jpg');
new MallPics('unicorn', '.jpg');
new MallPics('usb', '.gif');
new MallPics('water-can', '.jpg');
new MallPics('wine-glass', '.jpg');

function showRandomPic() {
var random1 = Math.floor(Math.random() * allPics.length);
busMall1.src = allPics[random1].filepath;
busMall1.alt = allPics[random1].name;
busMall1.title = allPics[random1].name;
allPics[random1].views++;

var random2 = Math.floor(Math.random() * allPics.length);
while (random2 === random1) {
  random2 = Math.floor(Math.random()*allPics.length);
}
busMall2.src = allPics[random2].filepath;
busMall2.alt = allPics[random2].name;
busMall2.title = allPics[random2].name;
allPics[random2].views++;

var random3 = Math.floor(Math.random() * allPics.length);
while (random2 === random1 && random3 === random2) {
  random2 = Math.floor(Math.random()*allPics.length);
}
busMall3.src = allPics[random3].filepath;
busMall3.alt = allPics[random3].name;
busMall3.title = allPics[random3].name;
allPics[random3].views++;
};

showRandomPic();

busMall1.addEventListener('click', handleClick);
busMall2.addEventListener('click', handleClick);
busMall3.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('target, ', event.target);
  showRandomPic();
}
