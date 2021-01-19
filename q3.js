function run() {
  const input = document.getElementById("input").value;
  const input2 = Number(document.getElementById("input").value);
  let a = JSON.parse(input);
  const output = document.getElementById("output");
  let out = numTooArr(a, input2);
  /**/

  /**/
  output.innerText = out;
}
//this function getting arry and num,and set back another arrays with the length of num with a for loop, every tic it replaces spots and determing an value//
function numTooArr(arr, num) {
  let arrTest = [];
  for (let i = 0; i < num; i++) {
    arrTest[i] = arr[i];
  }
  return arrTest;
}
