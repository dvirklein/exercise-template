let sum = 0;
let out = "";

function run() {
  const input = document.getElementById("input").value;
  let a = JSON.parse(input);
  const output = document.getElementById("output");
  out += "elemnt " + sum + ": " + input + "\n";
  sum++;
  /**/

  //toString(); // returns [object/num/string/ Object]
  /**/
  output.innerText = out;
}
