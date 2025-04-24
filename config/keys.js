// This is just keys 
if (process.env.NODE_ENV === 'production') {
    // we are in prod
    module.exports = require('./prod');
}
else {
    // we are local
    module.exports = require('./dev');
}
