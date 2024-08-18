const ErrorHandler = (error, req, res, next) => {
    
    error.statusCode = error.statusCode || 500;
    error.message = error.message || 'Internal server error!'
    
    return res.status(error.statusCode).json({
        success: false,
        msg: error.message
    });
}

module.exports = ErrorHandler;