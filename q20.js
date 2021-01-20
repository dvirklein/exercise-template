function run() {
  const input = document.getElementById("input").value;
  let a = input;
  const output = document.getElementById("output");
  let out = is_Duplicate(a);
  /**/
  //toString(); // returns [object/num/string/ Object]

  output.innerText = out;
}

function is_Duplicate(arr) {
  let count1 = 0;
  for (let i = 0; i < arr.length; i++) {
    let count2 = 0;
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log("Element " + arr[i] + " has duplicate");
        arr.splice(arr, i);
      }
    }
  }
}
let arrk = [3, 4, 6, 5, 4, 5, 6];
is_Duplicate(arrk);
