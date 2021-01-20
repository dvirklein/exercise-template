function run() {
  const input = document.getElementById("input").value;
  const input2 = document.getElementById("input2").value;
  let a = JSON.parse(input);
  let b = JSON.parse(input2);
  console.log(b);
  const output = document.getElementById("output");
  let out = oneArray(a, b);

  /**/
  output.innerText = out;
}
function oneArray(arr1, arr2) {
  let x = eval(arr1);
  let y = eval(arr2);
  for (i = 0; i < y.length; i++) {
    x.push(y[i]);
  }
  return is_Duplicate(x);
}
function is_Duplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
    console.log(arr);
  }
  return newOrder(arr);
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
  return arr;
}
console.log(oneArray([1, 2, 3, 4, 5, 6], [6, 7, 134, 65, 7876]));
