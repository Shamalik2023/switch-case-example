var names = prompt("Name");
var time = prompt("Time of the day");

switch ((names) && (time)) {
    case "Morning" || "Reethu":
        alert("Good Morning, Reethu!");
        break;
    case "Noon" || "Sha":
        alert("Good Noon, Sha!");
        break;
    case "Evening" || "Sherin":
        alert("Good Evening, Sherin!");
        break;
    case "Night" || "Afeen":
        alert("Good Night, Afeen!");
        break;
    default:
        alert("Good Day, User!");
}