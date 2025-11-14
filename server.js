/* git add 
git commit -m "Beskrivelse af ændringer" 
git push
*/

const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files (like CSS, JS, images)
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true })); // Til form-data


// Route for GET /
app.get('/index', (req, res) => {
  // Example data object

  res.sendFile(path.join(__dirname, 'views', 'index.ejs'));
  
  // Render index.ejs and pass data to it
  res.render('index');
});

app.get('/logind', (req, res) => {
  res.render('logind');
});

app.get('/opret-profil', (req, res) => {
  res.render('opret-profil');
});

app.get('/rediger-profil', (req, res) => {
  res.render('rediger-profil');
})

app.post('/logind', (req, res) => {
  const {username, password} = req.body;

  // Simpelt eksempel — her ville du normalt tjekke mod en database
    if (username === "test@1" && password === "123") {
        res.redirect('rediger-profil');
    } else {
        return res.status(401).json({ message: "Forkert brugernavn eller adgangskode" });
    }

});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
