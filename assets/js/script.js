// grabbbing button
let startBtn = document.querySelector(".start");
let restartBtn = document.querySelector(".restart");

// grab all TASK li
let taskLi = document.querySelectorAll(".task-li");
let priorityContentBox = document.querySelectorAll(".priority-content-box");

function func1() {

    var box = null;
    // iterating task li
    for (list of taskLi) {
        list.addEventListener("dragstart", function () {
            // console.log("Drag Start Event Triggered.")
            box = this;
            // console.log(box);
            setTimeout(() => {
                box.classList.add("hide");
                box.classList.remove("show");
            }, 0);
            
        })

        list.addEventListener("dragend", function () {
            // console.log("Drag End Event Triggered.");
            setTimeout(() => {
                box.classList.add("show");
                box.classList.remove("hide");
                // box = null;
            }, 0);
        })
        // iterating priority content

        for (contentBox of priorityContentBox) {

            contentBox.addEventListener("dragover", function (e) {
            // console.log("Drag Over Event Triggered.");
                e.preventDefault();
            })
            contentBox.addEventListener("dragenter", function (e) {
            // console.log("Drag Enter Event Triggered.");
            })
            contentBox.addEventListener("drop", function (e) {
            // console.log("Drop Event Triggered.");
               if(box !== null){
                this.append(box);
               }
            })
        }
    }

}
// event listener on start button
startBtn.addEventListener("click", () => {
    let taskBtn = document.querySelectorAll(".task-btn");
    if (startBtn.innerHTML === "Start") {
        taskBtn.forEach(e => {
            e.setAttribute("draggable", "true");
        });
        func1();
        startBtn.innerHTML = "Stop"
    } else if (startBtn.innerHTML === "Stop") {
        taskBtn.forEach(e => {
            e.setAttribute("draggable", "false");
        });
        startBtn.innerHTML = "Start";
    }
})

// event listener on restart button
restartBtn.addEventListener("click", () => {
    window.location.reload();
})


