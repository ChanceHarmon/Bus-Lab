'use strict';

var busMall = document.getElementById('bus-mall');

var allPics = [];

function MallPics(name, type) {
this.filepath = `images/${name}${type}`;
this.name = name;
this.views = 0;
allPics.push(this);


new MallPic('bag', 'bag.jpg');
new MallPic('banana', 'banana.jpg');
new MallPic('bathroom', 'bathroom.jpg');
new MallPic('boots', 'boots.jpg');
new MallPic('breakfast', 'breakfast.jpg');
new MallPic('bubblegum', 'bubblegum.jpg');
new MallPic('chair', 'chair.jpg');
new MallPic('cthulhu', 'cthulhu.jpg');
new MallPic('dog-duck', 'dog-duck.jpg');
new MallPic('dragon', 'dragon.jpg');
new MallPic('pen', 'pen.jpg');
new MallPic('pet-sweep', 'pet-sweep.jpg');
new MallPic('scissors', 'scissors.jpg');
new MallPic('shark', 'shark.jpg');
new MallPic('sweep', 'sweep.png');
new MallPic('tauntaun', 'tauntaun.jpg');
new MallPic('unicorn', 'unicorn.jpg');
new MallPic('usb', 'usb.gif');
new MallPic('water-can', 'water-can.jpg');
new MallPic('wine-glass', 'wine-glass.jpg');

function showRandomPic() {
var random = Math.floor(Math.random() * allPics.length);
allPics.src = allPics[random].filepath;
allPics.alt = allPics[random].name;
busMall.title = allPics[random].name;
allPics[random].views++;
console.log('current goat, ', allPics[random]);

}

showRandomPic();

busMall.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('target, ', event.target);
  showRandomPic();
}
}