const myPromise = new Promise(
    (resolve, reject) => {
        const res = 5;
        if (res % 2 === 0) resolve("OK: " + res);
        else reject("NOK: " + res);
    }
)

function getAPI(url) {
    return myPromise;
}

function myClient() {
    getAPI("https://api.exemplo.com")
    .then(
        (res) => {
            console.log("THEN: " + res)
        }
    )
    .catch(
        (err) => {
            console.log("CATCH: " + err)
        }
    )
    .finally(
        () => {
            console.log("FINALIZADO")
        }
    );

}

myClient();