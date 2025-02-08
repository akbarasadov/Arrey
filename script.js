let students = ["Shahram", "Amir", "Akbar", "Zarruh"]

let name = prompt("Кого хотите удалить?")
let idx = students.indexOf(name)

switch (idx) {
    case 0:
        students.splice(idx , 1)
        console.log(students);
        break;

    case 1:
        students.splice(idx , 1)
        console.log(students);
        break;

    case 2:
        students.splice(idx , 1)
        console.log(students);
        break;

    case 3:
        students.splice(idx , 1)
        console.log(students);
        break;

    default:
    console.log("такого человека нет");
        break;
}