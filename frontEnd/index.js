const baseURL = 'http://localhost:3000'
console.log("hi")
// document.querySelector

axios.get(`${baseURL}/recipes`)
  .then(result => {
    console.log(result);
      })

    // for each recipe
    // create dom element
    // add text to element
    // append element to container

    // container.innerHTML = `
    // <code>${stringify(result.data)}</code>
    // `
