
const myLogger = (req,res,next) =>{
    console.log('someone entered to the site')
    next();
}

module.exports = myLogger;