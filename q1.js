function run() {
  const input = document.getElementById("input").value;
  let a = JSON.parse(input);
  const output = document.getElementById("output");
  let out = is_array(a);
  /**/
  //toString(); // returns [object/num/string/ Object]
  /**/
  output.innerText = out;
}

function is_array(a) {
  if (a.toString() === "[object Array]") {
    return true;
  }
  return false;
}
