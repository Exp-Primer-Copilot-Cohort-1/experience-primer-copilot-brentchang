function skillsMember() {
    var member = document.getElementById("member").value;
    var member = parseInt(member);
    if (member == 1) {
        document.getElementById("member").value = "2";
        document.getElementById("member").style.color = "red";
    } else {
        document.getElementById("member").value = "1";
        document.getElementById("member").style.color = "green";
    }
}