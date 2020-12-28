var RESOURCE_NAME = 'courses';
var VERSION = 'v1';
var URI = '/' + VERSION + '/' + RESOURCE_NAME; 
var MAX_AGE = 15;
const { isValidObjectId } = require('mongoose');
var db = require('../../db/courses')

var apiErrors = require('../../util/errors')
var apiMessages = require('../../util/errors')
module.exports = function(router){
    'use strict';

    router.route(URI).get(function(req, res,next){
        console.log("GET Course details")
        
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);

        var fields ={}
        if(req.query && req.query.fields !== undefined){
           fields =  createFields(req.query.fields)
        }
        var pagination = {limit:0, offset:0}
        
        if(req.query && req.query.limit !== undefined){
            pagination.limit = req.query.limit
        }
        if(req.query && req.query.offset !== undefined){
            pagination.offset = req.query.offset
        }

        var options = {fields:fields, pagination:pagination}
        console.log(options)



        db.select( options,function(err,docs){
           
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                if(docs.length == 0){
                    res.status(404)
                }
                console.log("Retrieved courses = %d",docs.length)
                res.send(docs)
            }
        });
    });

    router.route(URI).post(function(req, res,next){
        console.log("POST  Course Details")
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);
        var doc = req.body;

        db.save(doc, function(err,saved){
            if(err){
                var userError = processMongooseErrors(apiMessages.errors.API_MESSAGE_CREATE_FAILED, "POST", URI, err,{});
                res.setHeader('content-type', 'application/json')
                res.status(400).send(userError)
            } else {
                res.send(saved)
            }
        });
    });


    router.route(URI).put(function(req,res,next){
        console.log("update data")
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);
        var criteria = {_id:'5fe88a25297d2a1e1cb99429'}
        var doc = req.body;
        db.update(criteria,doc,function(err,updated){
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                console.log("updated courses = %d",updated.length)
                res.send(updated)
            }
        });
    });

    router.route(URI).delete(function(req,res,next){
        console.log("Remove data")
        res.header('Cache-Control', 'public, max-age='+MAX_AGE);
        var criteria = {name:"Python"}
        db.delete(criteria,function(err,deleted){
            if(err){
                console.log(err)
                res.status(500)
                res.send("Error connecting to db")
            } else {
                console.log("Deleted courses = %d",deleted.length)
                res.send(deleted)
            }
        });
    });
}


var processMongooseErrors = function (message, method, endpoint, err,payload) {
    var errorList = []
    // Check for validation error
    if (err.name === 'ValidationError'){
        errorList = processValidationErrors(err)
    } else if(err.code == 11000){
        errorList.push(apiErrors.errors.PACKAGE_ALREADY_EXISTS)
    } else {
        var errUnknown = apiErrors.errors.UNKNOWN_ERROR
        errUnknown.payload = err
        errorList = [apiErrors.errors.UNKNOWN_ERROR]
    }
    return apiErrors.create(message, method, endpoint, errorList, payload)
}


var processValidationErrors = function (err) {
    var errorList = []
    if (err.errors.durationInHours) {
        if (err.errors.durationInHours.kind === apiErrors.kinds.MIN_ERROR 
        || err.errors.durationInHours.kind === apiErrors.kinds.NUMBER_ERROR ) {
            errorList.push(apiErrors.errors.FORMAT_DURATION)
        }
    }

    if (err.errors.price) {
        if (err.errors.price.kind === apiErrors.kinds.MIN_ERROR 
        || err.errors.price.kind === apiErrors.kinds.NUMBER_ERROR ) {
            errorList.push(apiErrors.errors.FORMAT_PRICE)
        }
    }

    if (err.errors.code) {
        if (err.errors.code.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_CODE)
        }
    }

    if (err.errors.name) {
        if (err.errors.name.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_NAME)
        }
    }

    if (err.errors.category) {
        if (err.errors.category.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_CATEGORY)
        }
    }

    if (err.errors.authors) {
        if (err.errors.authors.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_AUTHORS)
        }
    }

    if (err.errors.description) {
        if (err.errors.description.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_DESCRIPTION)
        }
    }


    if (err.errors.durationInHours) {
        if (err.errors.durationInHours.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_DURATION)
        }
    }

    if (err.errors.price) {
        if (err.errors.price.kind === apiErrors.kinds.REQUIRED) {
            errorList.push(apiErrors.errors.MISSING_PACKAGE_PRICE)
        }
    }


    return errorList;
}