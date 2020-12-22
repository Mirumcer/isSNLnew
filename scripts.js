window.addEventListener("load", function() {
    var today = new Date()
    var goal = new Date('7/1/2021')
    const diffTime = Math.abs(goal - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    var daysHTML = document.getElementById('days')
    daysHTML.innerText = diffDays
})