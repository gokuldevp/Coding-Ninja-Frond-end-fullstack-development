// function generateID(start) {
//     let count = start;
  
//     return function() {
//       const year = 2021
//         const id = "A-2021_" + count;
//       count++;
//       return id;
//     };
//   }

function generateID(start) {
    // Write logic here
    let count = start;
    return () => "A-2021_" + count++;
}

// Input and output has already been handled for you



process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
    let lines = chunk.toString().split(' ');
    let start = lines[0];
    let n = lines[1];
    let ans = ''
    let id = generateID(start)
    for(let i=0;i<n;i++) {
        ans += id()+'\n'
    }

    process.stdout.write(ans);
    process.exit();
});