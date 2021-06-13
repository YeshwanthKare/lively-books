const BASE_URL = `https://jsonplaceholder.typicode.com/todos/1`

const searchResult = () => {
	fetch(BASE_URL).then((res) => {return res.json()})
	.then(res => console.log(res))
}

searchResult()