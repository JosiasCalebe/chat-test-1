require("dotenv-safe").config();
const app = require('../src/app')
const port = 5000

app.listen(port, function() {
	console.log(`app listening on port ${port}`)
})
