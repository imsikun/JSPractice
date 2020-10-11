// //learning how to fetch api and to show the data in beautiful UI form
// //All the API used over here will be fake

// const btn = document.getElementById('btn').addEventListener('click', showData)

// var con = 0
// var div = document.getElementById('cardDiv')

// // const fake_url =
// //   'https://https://jsonplaceholder.typicode.com/photos.typicode.com/posts'
// const fake_url = 'https://jsonplaceholder.typicode.com/photos'

// function showData () {
//   fetch(fake_url)
//     .then(res => {
//       return res.json()
//     })
//     .then(post => {
//       for (let i = 0; i < 8; i++) {
//         div.innerHTML += `
//         <div class='card col-3 my-3 mx-auto'>
//         <img class='card-img' src='${post[con].thumbnailUrl}'
//         <div class='card-body'>
//         <h5 class='card-title'>${post[con].id}</h5>
//         <p class='card-text'>${post[con].title}</p>
//         </div>
//         </div>
//         `
//         con += 1
//       }
//     })
//     .catch(err => console.log(err))
// }

// showData()
