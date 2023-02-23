console.log("Hello world");
for(let i = 0; i < 3; i++) { // i = 3
    setTimeout(function exec() {
        console.log("Timer done");
    }, 10);
}
for(let i = 0; i < 10000000000; i++) {
    // some task // 10s 
}
console.log("end");
