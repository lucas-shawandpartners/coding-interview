// TODO: Implement the web server here.
const express = require('express')
const bubbleSort = require('./lib/sort')
const path = require('path')

//App conf
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Router
app.post('/', (req, res) => {
  let { array } = req.body
  array = array.split(',')
  const sortedArray = bubbleSort(array)
  res.send(sortedArray.join(', '))
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.use(express.static(__dirname + '/'))

app.listen(3000, () => {
  console.log('serving in port 3000')
})
