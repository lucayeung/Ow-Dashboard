import $ from 'jquery'
import BarChartCard from './charts/BarChartCard'
import axios from 'axios'

const navbar = `
<nav class="navbar is-light" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href=".">
        OWDash 
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
            图表类型
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="#bar">
            直线图(Bar)
          </a>
          <a class="navbar-item">
            折线图(Line)
          </a>
          <a class="navbar-item">
            饼图(Pie)
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end"></div>
  </div>
</nav>
`

const container = `
<div class="container" style="margin-top: 40px">
  <div class="notification" id="main"></div>
</div>
`

const websiteHeader = `
<p class="title is-1 is-spaced" id="bar">1. 直线图（Bar）</p>
`

// 初始化页面基本结构
$('body').append(navbar)
$('body').append(container)
$('#main').append(websiteHeader)

// 请求拉取dataset并挂载图表
axios.get('/api/heroesGameTime')
.then(function (response) {
  const heroesGameTimeChart = new BarChartCard(response.data)
  heroesGameTimeChart.render()
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});  
