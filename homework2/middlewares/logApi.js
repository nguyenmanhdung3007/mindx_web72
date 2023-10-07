const { log } = require("console");

const fs = require("fs");

const logApi = (method, mess) => {
    return (res, req, next) => {
        const time  = new Date();
        const content = `\n${time} >> ${method} >> ${mess}`;
        fs.appendFile("test.txt", content, (err) => {
            if(err) {
                throw new Error(err);
            }
            console.log("file successfully written to disk");
        });
        next();
    };
};

module.exports = logApi;