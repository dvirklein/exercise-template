function run() {
  const input = document.getElementById("input").value;
  const input2 = document.getElementById("input2").value;
  let a = input;
  const output = document.getElementById("output");
  let out = shanaMeoberet(input, input2);
  output.innerText = out;
}

function shanaMeoberet(num1, num2) {
  maxPoint = Math.max(num1, num2);
  minPoint = Math.min(num1, num2);
  let d = "";
  for (; maxPoint >= minPoint; minPoint++) {
    if (minPoint % 4 === 0) {
      console.log(minPoint);
      d += "," + minPoint;
    }
  }
  return d;
}
