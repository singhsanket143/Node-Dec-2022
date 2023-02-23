console.log("Hello world");
setTimeout(function exec() {
    console.log("Timer done");
}, 0);
for(let i = 0; i < 10000000000; i++) {
    // some task // 10s 
}
console.log("end");
