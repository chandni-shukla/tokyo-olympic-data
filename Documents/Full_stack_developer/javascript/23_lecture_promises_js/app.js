//promises concept using callback
let doTask = (success, failed) => {
    //performing a task
    let isDone = true;
    if(isDone) {
        success("Task is finished...");
    }
    else{
        failed("Task is not finished...")
    }
};
doTask( (msg) => {
    console.log(msg);
}, (msg) => {
    console.log(msg);
});

//Actual promise using javascript
let doNewTask = new Promise( (resolve, reject) => {
    //performing a task
    let isDone = false;
    if(isDone) {
        resolve("New task is finished");
    }
    else{
        reject("New task is not finished");
    }
});
doNewTask.then( (msg) => {
    console.log(msg);
}).catch( (error) => {
    console.warn(error);
});

//dependent promises
let doProject = new Promise( (resolve, reject) => {
    //doing the project
    let isDone = true;
    if(isDone){
        resolve("project is finished");
    }
    else{
        reject("project is not finished");
    }
});

let doTechnicalRound = new Promise( (resolve, reject) => {
    //doing the project
    let isDone = true;
    if(isDone){
        resolve("TechnicalRound is finished");
    }
    else{
        reject("TechnicalRound is not finished");
    }
});

let doManagerRound = new Promise( (resolve, reject) => {
    //doing the project
    let isDone = true;
    if(isDone){
        resolve("ManagerRound is finished");
    }
    else{
        reject("ManagerRound is not finished");
    }
});

let doHrRound = new Promise( (resolve, reject) => {
    //doing the project
    let isDone = true;
    if(isDone){
        resolve("HRRound is finished & got a job");
    }
    else{
        reject("HRRound is not finished");
    }
});
doProject.then( (msg) => {
    console.log(msg);
    doTechnicalRound.then( (msg) => {
        console.log(msg);
        doManagerRound.then( (msg) => {
            console.log(msg);
            doHrRound.then( (msg) => {
                console.log(msg);
            }).catch( (error) => {
                console.warn(error);
            });
        }).catch( (error) => {
            console.warn(error);
        });
    }).catch( (error) => {
        console.warn(error);
    });
}).catch( (error) => {
    console.warn(error);
});