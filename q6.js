function run() {
  const input = document.getElementById("input").value;
  let a = input;
  const output = document.getElementById("output");
  let out = spaces(a);
  /**/
  //toString(); // returns [object/num/string/ Object]
  /**/
  output.innerText = out;
}

function spaces(str) {
  let strTest = "";
  for (let i = 0; i < str.length; i++) {
    strTest += str[i];
    if (Number(str[i]) % 2 === 0 && Number(str[i + 1]) % 2 === 0) {
      strTest += "-";
    }
  }
}
