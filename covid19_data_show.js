const dataShowDiv = document.getElementById('showData')
const dropdownEle = document.getElementById('select')
const wrapper = document.querySelector('.wrapper')
// const api = 'https://api.thevirustracker.com/free-api?countryTotals=ALL'

function makeNewOptionBox (data) {
  const title = data.title
  if (typeof title != 'undefined') {
    const optionBox = document.createElement('option')
    optionBox.innerHTML = title
    dropdownEle.appendChild(optionBox)
  }
}

function manipulateData (data) {
  for (eachItem in data.countryitems[0]) {
    const singleData = data.countryitems[0][eachItem]

    //makdeNewoption box
    makeNewOptionBox(singleData)

    //onselect of each title changes
    dropdownEle.addEventListener('change', function (e) {
      if (e.target.value == singleData.title) {
        //to store the data in the variables
        let totalCases = singleData.total_cases
        let totalRecovered = singleData.total_recovered
        let totalUnresolved = singleData.total_unresolved
        let totalDeaths = singleData.total_deaths
        let totalNew_cases_today = singleData.total_new_cases_today
        let totalNew_deaths_today = singleData.total_new_deaths_today
        let totalActive_cases = singleData.total_active_cases
        let totalSerious_cases = singleData.total_serious_cases

        //variable which has a HTML to be executed when we change the data
        let cardTemp = `
        <div class="row justify-content-center mt-4 text-white">
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-info">
          <h2 class="mb-2">Cases</h2>
          <p>${totalCases}</p>
        </div>
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-primary">
          <h2 class="mb-2"> Recovered</h2>
          <p>${totalRecovered}</p>
        </div>
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-secondary">
          <h2 class="mb-2"> Unresolved</h2>
          <p>${totalUnresolved}</p>
        </div>
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-danger">
          <h2 class="mb-2"> Deaths</h2>
          <p>${totalDeaths}</p>
        </div>
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-warning">
          <h2 class="mb-2"> New Cases today</h2>
          <p>${totalNew_cases_today}</p>
        </div>
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-primary">
          <h2 class="mb-2"> New Deaths Today</h2>
          <p>${totalNew_deaths_today}</p>
        </div>
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-info">
          <h2 class="mb-2"> Active Cases</h2>
          <p>${totalActive_cases}</p>
        </div>
        <div class="card pl-3 pr-5 py-2 mx-2 my-2 col-md-3 bg-danger">
          <h2 class="mb-2"> Serious Cases</h2>
          <p>${totalSerious_cases}</p>
        </div>
      </div>
        
        `

        wrapper.innerHTML = cardTemp
      }
    })
  }
}

function getData () {
  fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL')
    .then(res => {
      return res.json()
    })
    .then(data => {
      manipulateData(data)
    })
}

getData()
