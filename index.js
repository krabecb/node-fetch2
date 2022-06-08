const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.get('/', async (req, res) => {
	const response = await fetch('https://rickandmortyapi.com/api/character')
	const data = await response.json()
	res.send(data)
})

app.listen(3000, () => {
	const d = new Date()
	console.log(`${d.toLocaleString()}: Server is running on port: 3000`)
})