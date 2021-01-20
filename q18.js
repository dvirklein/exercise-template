function run() {
  const input = document.getElementById("input").value;
  const input2 = document.getElementById("input2").value;
  let a = JSON.parse(input);
  const output = document.getElementById("output");
  let out = binary_search(input, input2);
  /**/
  //toString(); // returns [object/num/string/ Object]
  /**/
  output.innerText = out;
}

function binary_search(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (num === arr[i]) {
      console.log("element " + num + " in the " + count + " spot" + "\n");
    }
  }
}
var items = [1, 2, 3, 5, 4, 7, 5, 9];
binary_search(items, 5);
