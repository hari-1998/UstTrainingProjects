/**
 * Maintains all error codes
 * You may externalize this file and read it as JSON data at the time of initialization
 */
exports.errors = {
    // This is a catch all error
    // Ideally this should never be thrown
    UNKNOWN_ERROR : {
        code:500,
        text:"Unknown error !!!",
        hints:["Please contact development team wit information on 'how to reproduce this error'. Thank you for your help and support."],
        info:"http://developer.acme.com/unknownerror"
    },

    PACKAGE_ALREADY_EXISTS :{
        code:400,
        text:"Course package with the provided 'code' already exist",
        hints:["Please use PUT for update instead of POST"],
        info:"http://developer.acme.com/errors#400"
    },

    // All required/missing field errors start with number 7
    MISSING_PACKAGE_NAME : {
        code:601,
        text:"Required field course 'name' is missing",
        hints:["Please check that user has provided the non null value for 'name'"],
        info:"http://developer.acme.com/error#RequiredFields"
    },
    MISSING_PACKAGE_CODE : {
        code:602,
        text:"Required field course 'code' is missing",
        hints:["Please check that user has provided the non null value for 'code'"],
        info:"http://developer.acme.com/error#RequiredFields"
    },
    MISSING_PACKAGE_DESCRIPTION :  {
        code:603,
        text:"Required field vacation 'description' is missing",
        hints:["Please check that user has provided the non null value for description"],
        info:"http://developer.acme.com/error#RequiredFields"
    }  ,
    MISSING_PACKAGE_CATEGORY :  {
        code:604,
        text:"Required field course 'category' is missing",
        hints:["Please check that user has provided the non null value for category"],
        info:"http://developer.acme.com/error#RequiredFields"
    }  ,
    MISSING_PACKAGE_AUTHORS :  {
        code:605,
        text:"Required field course 'authors' is missing",
        hints:["Please check that user has provided the non null value for authors"],
        info:"http://developer.acme.com/error#RequiredFields"
    }  ,
    MISSING_PACKAGE_DURATION : 
    {
        code:606,
        text:"Required field course 'durationInHours' is missing",
        hints:["Please check that user has provided a number (greater than 1)"],
        info:"http://developer.acme.com/error#RequiredFields"
    },
    MISSING_PACKAGE_PRICE : 
    {
        code:607,
        text:"Required field course 'price' is missing",
        hints:["Please check that user has provided a positive number"],
        info:"http://developer.acme.com/error#RequiredFields"
    },
    // All format errors begin with 8
    FORMAT_DURATION : {
        code:608,
        text:"Duration MUST be a number (Greater than or equal to 1)",
        hints:["Please check that user has provided a numeric value for 'Duration'"],
        info:"http://developer.acme.com/error#RequiredFields"
    },
    FORMAT_PRICE : {
        code:608,
        text:"Price MUST be a number (Greater than or equal to 1)",
        hints:["Please check that user has provided a numeric value for 'price'"],
        info:"http://developer.acme.com/error#RequiredFields"
    }
}

/**
 * Utility methods
 * Creates the error response body to be sent back to the caller
 */
exports.create = function(message,httpMethod,endpointInformation,errorList,receivedPayload){
    return    { 
        text:message,
        timestamp:new Date(),
        method:httpMethod,
        endpoint:endpointInformation,
        errors : errorList,
        payload: receivedPayload
    }
}

// Mongoose validation error types
exports.kinds = {
    REQUIRED:"required",
    NOT_VALID:"notvalid",
    NUMBER_ERROR:"Number",
    MIN_ERROR:"min",
    MAX_ERROR:"max",
}

