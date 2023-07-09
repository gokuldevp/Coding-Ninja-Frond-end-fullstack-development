var juliet = {
    name: "Juliet",
    hello: function(){
        console.log("Hi, I am " + this.name);
    }
}
var globalHello = juliet.hello;
globalHello(); // this is undefined, output: Hi, I am undefined