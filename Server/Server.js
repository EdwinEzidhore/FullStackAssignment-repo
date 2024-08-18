const app = require('./App');
const connectDB = require('./DB/connect');

require('dotenv').config();

const port = process.env.PORT || 3006;



connectDB();

app.listen(port, () => {
    console.log(`Server listening on port ${process.env.port}`);
    
})