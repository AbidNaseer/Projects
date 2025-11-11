document.addEventListener('DOMContentLoaded', () => {

    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-button");
    const todoList = document.getElementById("todo-list")
    
    let tasks = JSON.parse(localStorage.getItem('list')) || [];


    tasks.forEach(task => renderTask(task)); 

    // --- Add Task Event Listener ---
    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        tasks.push(newTask);
        saveTasks();       // 💡 addList کو saveTasks میں تبدیل کیا
        renderTask(newTask); // 💡 renderTask کو newTask آبجیکٹ بھیجا
        todoInput.value = "";
        console.log(tasks);
    });

    // --- فنکشنز ---

    // 4. Task کو DOM پر ظاہر کرنا
    function renderTask(task) { // 💡 پیرامیٹر کا نام 'task' کر دیا
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        
        // اگر task complete ہے تو کلاس لگائیں
        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>
        `;

        // 💡 5. Delete بٹن کا فنکشن: deleteTask کو کال کریں
        li.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // li کے click event کو روکتا ہے
            
            // ✅ خرابی دور: گلوبل آررے کو ہینڈل کرنے کے لیے علیحدہ فنکشن کال کیا
            deleteTask(task.id); 
            li.remove();
            saveTasks(); // حذف کرنے کے بعد اسٹوریج کو اپ ڈیٹ کریں
        });

        // 💡 6. Toggle Complete فنکشنلٹی
        li.addEventListener('click', () => {
             toggleComplete(task.id);
             li.classList.toggle('completed'); // DOM کو اپ ڈیٹ کریں
             saveTasks();
        });

        todoList.appendChild(li);
    }
    
    // 💡 7. نیا فنکشن: Delete Logic
    function deleteTask(idToDelete) {
        tasks = tasks.filter(task => task.id !== idToDelete);
    }
    
    // 💡 8. نیا فنکشن: Toggle Complete
    function toggleComplete(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }


    // 💡 9. addList کو saveTasks میں تبدیل کیا
    function saveTasks() {
        localStorage.setItem('list', JSON.stringify(tasks));
    }
});