console.log("Hello world");
setTimeout(function exec() {
    console.log("Timer done");
    setTimeout(function exec() {
        console.log("woah another one")
    }, 10);
}, 0);
for(let i = 0; i < 1000; i++) {
    // some task // 10s 
}
console.log("end");
