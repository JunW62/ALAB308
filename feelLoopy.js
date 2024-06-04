var str =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,QuizMaster,58\n98,Bill,Doctor's Assistant,26";
var cells = [];
cell = "";
for (i = 0; i < str.length; i++) {
  if (str[i] == "," || str[i] == "\n") {
    cells.push(cell);
    cell = "";
    continue;
  }
  cell += str[i];
}
cells.push(cell);
for (i = 0; i < cells.length / 4; i++) {
  console.log(
    cells[4 * i],
    cells[4 * i + 1],
    cells[4 * i + 2],
    cells[4 * i + 3]
  );
}
