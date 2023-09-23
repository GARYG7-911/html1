const url = "https://hp-api.onrender.com/api/characters"

const result = fetch(url)
    .then(response=> response.json())
    .then(data=> console.log(data))

