var juliet = {
    name: "Juliet",
    hello: function(){
        console.log("Hi, I am " + this.name);
    }
}

new (juliet.hello.bind(juliet))();


