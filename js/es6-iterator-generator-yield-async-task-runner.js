// From LeanPub's Understanding ES6
// the run function takes a task definition as a parameter
// the task definition must be a * generator that returns an iterator
function run(taskDef) {

    // create the iterator from the parameter * generator function
    // make available elsewhere
    let task = taskDef();

    // start the task
    let result = task.next();

    // recursive function to keep calling next()
    function step() {

        // if there's more to do
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function(err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }

                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }

        }
    }

    // start the process
    step();
}

// example node fs.readFile async function
let fs = require("fs");

function readFile(filename) {
    return function(callback) {
        fs.readFile(filename, callback);
    };
}

// implementation of run function (on node's async readFile func)
// generator * function is passed as a parameter 
run(function*() {
    let contents = yield readFile("config.json");
    doSomethingWith(contents);
    console.log("Done");
});

// A generator is a special function that automatically creates an iterator when called. 
// Generator definitions are indicated by a star (*) character and use of the yield keyword 
// to indicate which value to return for each successive call to the next() method.
