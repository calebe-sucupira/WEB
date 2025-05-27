const myPromise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                const res = 4;
                if (res % 2 === 0) resolve("OK: " + res);
                else reject("NOK: " + res);
            }
        , 3000);
    }
);

function getAPI(url) {
    // Simulate API call using myPromise, log the URL to use the parameter
    console.log("Fetching from:", url);
    return myPromise;
}

async function myClient() {
    try {
        const res = await getAPI("https://api.exemplo.com");
        console.log(res);
    } catch (err) {
        console.log("CATCH: " + err);
    } finally {
        console.log("FINALIZADO");
    }  
}

myClient() //3s
