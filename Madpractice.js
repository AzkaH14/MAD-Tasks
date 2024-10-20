// Function that will be executed after 2 seconds
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);



// Function that returns a Promise
function myPromise() {
    return new Promise((resolve, reject) => {
        const success = true; // Simulate success/failure of an async operation
        setTimeout(() => {
            if (success) {
                resolve("The operation was successful!");
            } else {
                reject("The operation failed.");
            }
        }, 3000); // Simulate an async operation taking 3 seconds
    });
}

// Using the promise
myPromise()
    .then((message) => {
        console.log(message); // If resolved, this will be called
    })
    .catch((error) => {
        console.log(error); // If rejected, this will be called
    });

    // An asynchronous function
async function displayData() {
    console.log("Fetching data...");

    // Simulate a delay with a promise
    let data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received after 2 seconds");
        }, 2000);
    });

    // Once the promise is resolved, the function resumes
    console.log(data);
}

// Call the async function
displayData();
