const baseURL = 'http://localhost:3000'

function getThisRecipe(newRecipe) {
  let title = document.querySelector("#createHead")
  let recPic = document.querySelector('#recipePic')
  let ingredList = document.querySelector('#ingredients')
  let directions = document.querySelector('#instructions')

  axios.get(`${baseURL}/recipes/`)
    .then(result => {
      console.log(result.data);
    title.innerText = result.data.name
    // const picImage = document.createElement('img')
    // picImage.setAttribute('src', result.data.picture)
    recPic.setAttribute('src', result.data.picture)
    ingredList.innerText = "Ingredients are a coming soon feature"
    directions.innerText = result.data.instructions

    })
}

getThisRecipe()
