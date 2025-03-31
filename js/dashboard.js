const menu = document.querySelector('#menu')
const menuBar = document.querySelector('#menu-bar')
const dropDown = document.querySelector('.dropdown')
const dropUp = document.querySelector('.dropup')
menu.addEventListener('click', function () {
  let Display = menuBar.style.display
  Display = 'none'
  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'block'
    dropDown.style.display = "none"
    dropUp.style.display = "block"
    console.log(Display);

  } else {
    menuBar.style.display = 'none'
     dropDown.style.display = "block"
    dropUp.style.display = "none"
    console.log(Display);
  }
})
const ctx = document.getElementById('myChart')
const clicks= document.getElementById('myClicks');
const views= document.getElementById('myViews');
new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['26/3/2024', '28/3/2024', '29/3/2024', '30/3/2024'],
      datasets: [{
        label: 'Views',
        data: [60, 19, 3, 5, 2, 3],
        borderWidth: 1,
        fill:true,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(clicks, {
    type: 'line',
    data: {
      labels: ['26/3/2024', '28/3/2024', '29/3/2024', '30/3/2024'],
      datasets: [{
        label: 'Clicks',
        data: [60, 19, 3, 5, 2, 3],
        borderWidth: 1,
        fill:true,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  new Chart(views, {
    type: 'line',
    data: {
      labels: ['26/3/2024', '28/3/2024', '29/3/2024', '30/3/2024'],
      datasets: [{
        label: 'Unique Views',
        data: [60, 19, 3, 5, 2, 3],
        borderWidth: 1,
        fill:true,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  