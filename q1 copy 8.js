function run() {
  const input = document.getElementById("input").value;
  let a = input;
  const output = document.getElementById("output");
  let out = "";
  /**/
  //toString(); // returns [object/num/string/ Object]
  is_array = function is_array(a) {
    if (a.toString() === "[object Array]") {
      return "true";
    }
    return "false";
  };
  /**/
  output.innerText = out;
}
