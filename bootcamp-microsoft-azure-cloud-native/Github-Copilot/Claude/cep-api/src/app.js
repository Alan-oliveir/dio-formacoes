const express = require('express');
const cepRoutes = require('./routes/cepRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', cepRoutes());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});