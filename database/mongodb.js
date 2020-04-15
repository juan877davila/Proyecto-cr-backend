const mongoose = require ('mongoose');
mongoose.connect(
  'mongodb+srv://DB_USER:DB_PASS@cluster0-0zbfl.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Error connecting to database...'));

/* var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
}); */