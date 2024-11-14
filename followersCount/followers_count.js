let count = 0; // Initialize count to 0

function increaseCount() {
    count++
    displayCount()
    checkCountValue()
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML=count
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetCountValue(){
    count = 0
    displayCount()
    alert("Reset all your Instagram post followers")
}