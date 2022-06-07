let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

let logBtn = document.getElementById("btn")
logBtn.addEventListener('click', function (){
    console.log("Jane's score is: " + data[0].score)
})