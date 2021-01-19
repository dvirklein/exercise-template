function run() {
  const input = document.getElementById("input").value;
  let a = JSON.parse(input);
  const output = document.getElementById("output");
  let out = newOrder(a);
  /**/
  //toString(); // returns [object/num/string/ Object]
  /**/
  output.innerText = out;
}

function newOrder(arr) {
  let a = 0;
  for (let j = 0; j < arr.length; j++) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        a = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = a;
        console.log(arr);
      }
    }
  }
}
newOrder([15, 3, -4, 7, 17]);
