function run() {
  const input = document.getElementById("input").value;
  let a = input;
  const output = document.getElementById("output");
  let out = is_Duplicate(a);
  /**/
  //toString(); // returns [object/num/string/ Object]

  output.innerText = out;
}

function Ojectfinder(arr, prop) {
  let h = [];
  for (let i = 0; i < arr.length; i++) {
    h.push(arr[i][prop]);
  }
  console.log(h);
}

let arrk = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
Ojectfinder(arrk, "title");
