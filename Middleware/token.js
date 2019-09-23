const jwt = require("jsonwebtoken");

exports.generateToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}

exports.verifyToken = (req, res,next) => {
    var token  = req.header('auth-token');
    var verified = jwt.verify(token,process.env.TOKEN_SECRET);
    var response = {}
    
    if(!verified){
        response.status = false;
        response.error = "Invalid Token"
        res.send(response);
    }
    else{
        req.decode = verified;
        next();
    }
}