//Write your function here


function rotateLeft(arr) {
    var new_arr = [];
    for (i = 1; i < arr.length; i++){
      new_arr.push(arr[i]);
    }
    new_arr.push(arr[0]);
    return new_arr;
  
  }
  
  
  
// Input and output has already been handled for you



process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
let arr = chunk.toString()
arr = arr.split(' ')
let nums = []
for(const c of arr) {
    nums.push(parseInt(c))
}

const ans = rotateLeft(nums).join(' ')
process.stdout.write(ans)
process.exit();
});