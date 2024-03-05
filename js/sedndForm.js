const form = document.querySelector('.form-test-drive')
form.addEventListener('submit', (event) => {

    let data = {}

    for (let { name, value } of form.elements) {
        if (name) {
            data[name] = value
        }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data)
    }).then(responce => {
        if (responce.status === 200) {
            return responce.json()
        } else {
            throw new Error(responce.status)
        }

    }).then(data => {
        alert('the data has been saved successfully!')
        form.reset()
    }).catch(error => {
        alert('no no no you made a mistake>:(')
    })
})