# How To Use EJS to Template Your Node Application

## Ortamı Hazırlama

- https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

- Jade comes as the default template engine for Express but Jade syntax can be overly complex for many use cases.

- Embedded JavaScript templates (EJS) can be used as an alternative template engine.

- > nodejs install

- > npm init -y // package.json oluştu

- > npm install express

- > npm install ejs

- > npm install -D nodemon
    -   `"start": "nodemon server.js",`

## Step 1 — Configuring with server.js

- Create server.js file

    ```javascript
        //imports
        var express = require('express');
        var app = express();

        // set the view engine to ejs
        app.set('view engine', 'ejs');

        // use res.render to load up an ejs view file

        // index page
        app.get('/', (req, res) => {
        res.render('pages/index'); // render always look views
        });

        // about page
        app.get('/about', (req, res) => {
        res.render('pages/about');
        });

        app.listen(8080);
        console.log('Server is listening on port 8080');
    ```

## Step 2 — Creating the EJS Partials

- Like a lot of the applications you build, there will be a lot of code that is reused. These are considered partials.

- > mkdir views

- > mkdir views/partials

- > touch views/partials/head.ejs

    - This code contains metadata for the head for an HTML document. It also includes Bootstrap styles.

    ```HTML
        <meta charset="UTF-8">
        <title>EJS Is Fun</title>

        <!-- CSS (load bootstrap from a CDN) -->
         <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css"> -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <style>
        body { padding-top:50px; }
        </style>
    ```

- > touch views/partials/header.ejs  

    - This code contains navigation for an HTML document and uses several classes from Bootstrap for styling.

    ```html
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">EJS Is Fun</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
            </li>
        </ul>
        </nav>
    ```

- > touch views/partials/footer.ejs

    - This code contains copyright information and uses several classes from Bootstrap for styling.

    ```html
        <p class="text-center text-muted">&copy; Copyright 2022 Infotek </p>
    ```

## Step 3 — Adding the EJS Partials to Views

- You have three partials defined. Now you can include them in your views.

- Use `<%- include('RELATIVE/PATH/TO/FILE') %>` to embed an EJS partial in another file.

- The hyphen `<%- instead of just <%` to tell EJS to render raw HTML.

- The path to the partial is relative to the current file.

- > mkdir views/pages

- > touch views/pages/index.ejs

    ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <%- include('../partials/head'); %>
        </head>
        <body class="container">

        <header>
        <%- include('../partials/header'); %>
        </header>

        <main>
        <div class="jumbotron">
            <h1>This is great</h1>
            <p>Welcome to templating using EJS</p>
        </div>
        </main>

        <footer>
        <%- include('../partials/footer'); %>
        </footer>

        </body>
        </html>
    ```

## Run Server

- > node server.js

- > npm start //nodemon package.json da ayarla

## Step 4 — Passing Data to Views and Partials

- let data = require("./data"); // server.js

    ```javascript
        app.get('/dersler', (req, res) => {
        let data = require("./data");
        let tagline = "Ders Programı"
        console.log(data)
        res.render('pages/dersler', {
            data1 : data,
            tagline : tagline
        });
        });
    ```

- dersler.ejs

    ```html
                <tr>
                    <% for(var i=0; i<data1.length; i++) {%>
                        <th>
                            <%= data1[i].gun.toUpperCase() %>
                        </th>
                        <% } %>
                </tr>
    ```

- partiala bilgi geçme

    ```html
            <header>
            <%- include('../partials/header', {variant: 'compact'}); %>
            </header>
    ```