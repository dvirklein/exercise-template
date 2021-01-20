function run() {
  const input = document.getElementById("input").value;
  let a = JSON.parse(input);
  const output = document.getElementById("output");
  let out = declareOrder(a);
  /**/
  //toString(); // returns [object/num/string/ Object]
  /**/
  output.innerText = out;
}

function declareOrder(arr) {
  let a = "";
  for (let j = 0; j < arr.length; j++) {
    a += "row" + "" + j + "\n";
    for (let i = 0; i < arr[i].length; i++) {
      a += arr[j][i];
      a += " ";
    }
    a += "\n";
  }
}

declareOrder([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
]);
