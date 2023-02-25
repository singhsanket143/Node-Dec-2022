function download(url, cb) {
    console.log("Started downloading from url", url);
    setTimeout(function exec() {
        console.log("Completed downloading after 5s");
        const content = "ABCDEF";
        // cb(content);
        // cb(content);
    }, 5000);
}


download("www.xyz.com", function processDownload(data) {
    console.log("downloaded data is", data);
})