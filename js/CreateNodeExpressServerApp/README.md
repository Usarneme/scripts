## Create a NodeJS Express static web application server.

### Create and enter the directory
```sh
mkdir my-project && cd my-project
```

### Initialize the project with a package.json
```sh
yarn init -y
```

### Add dependency packages
```sh
yarn add express --save
yarn add pug --save
yarn add body-parser --save
yarn add cookie-parser --save
```

### Create directory structure
```sh
mkdir views
mkdir views/includes
```

#### Create boilerplate server file
```sh
touch index.js &&
cat <<EOM >index.js
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const PORT = 3000

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Route for the Main page
app.get('/', (req, res) => {
  const username = req.cookies.username
  if (username) {
    res.render('index', { username })    
  } else {
    res.redirect('/login')
  }
})

// Route for the login page View
app.get('/login', (req, res) => {
  const username = req.cookies.username
  if (username) {
    res.redirect('/')
  } else {
    res.render('login')    
  }
})

// Redirect route for after a user enters (posts) their name from the /login route 
app.post('/login', (req, res) => {
  res.cookie('username', req.body.username)  
  res.redirect('/')
  // If I only wanted to return the JSON data, say for a web app...
  // res.json(res.body)
})

// Redirect after log out form is submitted (posted)
app.post('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('/')
})

// Default route if none of the above match with better precision
app.get('*', (req, res) => {
  res.redirect('/')
})

// Start the server on the listed PORT, log to console
app.listen(PORT, () => console.log('Express Server listening on port '+PORT))

EOM
```

### Fill boilerplate in pug partials
```sh
touch views/includes/footer.pug &&
cat <<EOM >views/includes/footer.pug
footer
  h4 Footer stub from footer.pug
  p For to study
EOM
touch views/includes/header.pug &&
cat <<EOM >views/includes/header.pug
header
  h1 Flashcards 
  h4 Heading from header.pug
EOM
touch views/index.pug &&
cat <<EOM >views/index.pug
extends layout.pug

block content
  section#content
    if username
      h4 Hello, #{ username }!
      form(action='/logout', method='post')
        button(type='submit') LOGOUT
    else 
      a(href='/login') Click to log in
    p Section id #content and this h4 text content from the index.pug file. 
EOM
touch views/layout.pug &&
cat <<EOM >views/layout.pug
doctype html
html(lang="en")
  head
    title Flashcards
  body
    h5 Html, head, and body tags from layout.pug
    include includes/header.pug
    block content
    include includes/footer.pug
EOM
touch views/login.pug &&
cat <<EOM >views/login.pug
extends layout.pug

block content
  section#content
    h4 Please log in to continue
    form(action='/login', method='post')
      label Your name: 
        input(type='text' name='username')
      button(type='submit') LOGIN
EOM
```

### Start the server
```sh
nodemon
```

##### Note: Ctrl+C to exit the server

#### Navigate to http://localhost:3000 to see your application.
