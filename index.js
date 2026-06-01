const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Prithvi GitHub Action</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-zDLFNu7CMQf4t1Y4o4tP6SAQb6Gk27BmwHOVJNXy6mPND/d1g6dT5dkzh4kH5gWZ" crossorigin="anonymous">
  </head>
  <body class="bg-light">
    <div class="container py-5">
      <div class="card shadow-sm">
        <div class="card-body">
          <h1 class="display-6">Hi, this is Prithvi's GitHub Action</h1>
          <p class="lead">Bootstrap 5 is loaded and styling this page.</p>
        </div>
      </div>
    </div>
  </body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
