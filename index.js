/*wait(5000)
.then(n => {
    console.log(n)
})

function wait(duration) {
    return new Promise((resolve, reject) => {
        if (duration < 0) {
            reject(new Error("Podróże w czasie są na razie nie możliwe"));
        }
        setTimeout(() => resolve("SDF"), duration);
    })
}*/


async function GetBody(url) {
    let response = await fetch(url);
    let body = await response.text()
    return body;
}

//let [v1,v2] = await Promise.all([GetBody("http://www.google.pl"), GetBody("http://interia.pl")])

for await (let v of [GetBody("http://www.google.pl"), GetBody("http://interia.pl")]) {
    console.log(v);
}
