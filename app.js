'use strict';
console.log('script loaded');
var picOne = document.getElementById('picOne');
var picTwo = document.getElementById('picTwo');
var picThree = document.getElementById('picThree');
var resultsTable = document.getElementById('resultsTable');
var imgs = [];
var picCount = 0;
var dataChart;
var chartDrawn = false;
var displayName = [];
var clicks = [];
function BusMallPictures(name, displayName) {
  this.name = name;
  this.displayName = displayName;
  this.filepath = `images/${name}`;
  this.views = 0;
  this.clicks = 0;
  imgs.push(this);
}
function updateChartArrays() {
  for (var i =0; i < imgs.length; i++) {
    displayName[i] = imgs[i].displayName;
    clicks[i] = imgs[i].clicks;
    }
  }
new BusMallPictures('bag.jpg', 'Bag');
new BusMallPictures('banana.jpg', 'Banana');
new BusMallPictures('bathroom.jpg', 'Bathroom');
new BusMallPictures('boots.jpg', 'Boots');
new BusMallPictures('breakfast.jpg', 'Breakfast');
new BusMallPictures('bubblegum.jpg', 'Bubblegum');
new BusMallPictures('chair.jpg', 'Chair');
new BusMallPictures('cthulhu.jpg', 'Cthulhu');
new BusMallPictures('dog-duck.jpg', 'Dog Duck');
new BusMallPictures('dragon.jpg', 'Dragon');
new BusMallPictures('pen.jpg', 'Pen');
new BusMallPictures('pet-sweep.jpg', 'Pet Sweep');
new BusMallPictures('scissors.jpg', 'Scissors');
new BusMallPictures('shark.jpg', 'Shark');
new BusMallPictures('sweep.png', 'Sweep');
new BusMallPictures('tauntaun.jpg', 'Taun Taun');
new BusMallPictures('unicorn.jpg', 'Unicorn');
new BusMallPictures('usb.gif', 'USB');
new BusMallPictures('water-can.jpg', 'Water Can');
new BusMallPictures('wine-glass.jpg', 'Wine Glass');
function choosePictures() {
  var currentPictures = [];
  do {
    do {
      var randomNumber = Math.floor(Math.random() * imgs.length);
      var picture = imgs[randomNumber];
    } while (previousPictures.includes(picture) || currentPictures.includes(picture));
    currentPictures.push(picture);
  } while (currentPictures.length < 3);
  return currentPictures;
}
var previousPictures = [];
oneTurn();
function oneTurn() {
  var currentPictures = choosePictures();
  render(currentPictures);
  for (var i = 0; i < 3; i++) {
    currentPictures[i].views++;
  }
  previousPictures = currentPictures;
  picCount += 1;
  updateChartArrays();
}
function render(currentPictures) {
  picOne.src = currentPictures[0].filepath;
  picOne.style.height = "300px";
  picOne.style.width = "320px";
  picOne.title = currentPictures[0].displayName;
  
  picTwo.src = currentPictures[1].filepath;
  picTwo.style.height = "300px";
  picTwo.style.width = "320px";
  picTwo.title = currentPictures[1].displayName;
  
  picThree.src = currentPictures[2].filepath;
  picThree.style.height = "300px";
  picThree.style.width = "320px";
  picThree.title = currentPictures[2].displayName;
  
  picOne.addEventListener('click', handleClick);
  picTwo.addEventListener('click', handleClick);
  picThree.addEventListener('click', handleClick);
};

function handleClick(event) {
  if (picCount < 26) {
    increaseClickCount(event.target.title);
    oneTurn();
  } else if (picCount === 26) {
    createTable();
    picCount++;
  } else {
    return;
  }
  updateChartArrays();
  localInfo();
}

function increaseClickCount(title) {
  for (var i = 0; i < imgs.length; i++) {
    if (imgs[i].displayName === title) {
      imgs[i].clicks++;
      break;
    }
  }
  
}

function createTable() {
  var row = document.createElement('tr');
  var headerName = document.createElement('td');
  headerName.innerText = 'Item Name';
  row.appendChild(headerName);
  
  var headerTotalViews = document.createElement('td');
  headerTotalViews.innerText = 'Times Displayed';
  row.appendChild(headerTotalViews);
  
  var headerTotalClicks = document.createElement('td');
  headerTotalClicks.innerText = 'Total Clicks';
  row.appendChild(headerTotalClicks);
  
  var headerPercentClicked = document.createElement('td');
  headerPercentClicked.innerText = 'Percent Clicked';
  row.appendChild(headerPercentClicked);
  
  resultsTable.appendChild(row);
  
  for (var i = 0; i < imgs.length; i++) {
    var imgRow = document.createElement('tr');
    var nameData = document.createElement('td');
    nameData.innerText = imgs[i].displayName;
    imgRow.appendChild(nameData);
    
    var totalViewsData = document.createElement('td');
    totalViewsData.innerText = imgs[i].views;
    imgRow.appendChild(totalViewsData);
    
    var totalClicksData = document.createElement('td');
    totalClicksData.innerText = imgs[i].clicks;
    imgRow.appendChild(totalClicksData);
    
    var totalPercentClicked = document.createElement('td');
    var percentage = (Math.floor((imgs[i].clicks / imgs[i].views) * 100));
    if (isNaN (percentage)) {
      percentage = 0;
    }
    totalPercentClicked.innerText = (percentage + '%');
    imgRow.appendChild(totalPercentClicked);
    
    resultsTable.appendChild(imgRow);
  }
}
  var data = {
    labels: displayName,
    datasets: [
      {
        data: clicks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ]
      }
    ]
  };
  
  function drawChart() {
    var ctx = document.getElementById("myChart").getContext('2d');
    dataChart = new Chart(ctx, {
      type: 'bar',
      data: data,
    });
    chartDrawn = true;  
  };
  drawChart();
}
function localInfo() {
  var dataString = JSON.stringify(data);
  
  localStorage.setItem('myData', dataString);
};
function dataStorage() {
  var retrievedData = localStorage.getItem('myData');
    
    var retrievedDataParsed = JSON.parse(retrievedData);};
    
  
  dataStorage();