function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
  
    li.textContent = taskText;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(deleteBtn);
  
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  