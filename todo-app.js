const element = (
    <div>
        <input type="text" name="taskName" id="taskName"/>
        <input type="date" name="dueDate" id="dueDate"/>
        <button class="add" onclick="createTask()">Add Task</button>
    </div>
)

ReactDOM.render(
    element,
    document.getElementById('root')
);


