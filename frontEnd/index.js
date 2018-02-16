const baseURL = 'http://localhost:3000'


axios.get(`${baseURL}/recipes`)
  .then(result => {
    let newDiv = document.createElement("div");
    let currentDiv = document.getElementById("recipesContainer");

    for(let i = 0; i < result.data.length; i++) {
      let cardColContainter = document.createElement('div')
      let newRecipe = getRecipe(result.data[i])

      cardColContainter.classList.add('col-md-4')
      cardColContainter.append(newRecipe)
      currentDiv.appendChild(cardColContainter)
    }
})

function getThisRecipe(newRecipe){
  let title =document.querySelector("#createHead")
  axios.get(`${baseURL}/recipes/1`)
  .then(result => {
    console.log(result);
  })
}





function getRecipe(newRecipe){

  //////recipeBox//////////////////////////////
  const recipeBox =  document.createElement('div')
  recipeBox.classList.add('card')
  ////pictureBox and image////////////////
  const pictureBox = document.createElement('div')
  pictureBox.classList.add('card-img-top')
  const picImage = document.createElement('img')
  picImage.classList.add('thumbnail')
  picImage.setAttribute('src', newRecipe.picture)
  picImage.addEventListener('click', () => {
    console.log("Hello");
    console.log(newRecipe.id)
    window.location = "viewRecipe.html?id=" + newRecipe.id

    })
  recipeBox.appendChild(picImage)
  //////////nameBox///////////////////////////////
  const nameBox = document.createElement('div')
  nameBox.classList.add('card-body')
  nameBox.innerHTML = newRecipe.name
  recipeBox.appendChild(nameBox)
  return recipeBox
}





let button = document.querySelector('#createButton')

button.addEventListener('click', function(e) {
  window.location = "createRecipe.html"
})
