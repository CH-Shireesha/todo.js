function Task(props) {
    return <li>{props.name} {props.dueDate.toLocaleString()}&nbsp; 
    <input type="submit" value="Delete Task" onClick={()=>{props.onDeleteTask(props.id)}}/></li>
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: props.list};

        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleDeleteTask = this.handleDeleteTask.bind(this);
    }
    handleAddTask(task) {
        console.log("add task clicked");
        this.state.list.push(task);
        this.setState({list: this.state.list})
    }
    handleDeleteTask(id){
        console.log("Delete task clicked");
        this.state.list = this.state.list.filter(task =>{
            if(task.id != id)
                return task;
        })
        this.setState({list: this.state.list})
    }
    render() {
        return (
            <div>
                <ol>
                    {
                        this.state.list.map((t) =>
                        <Task key={t.id} id = {t.id} name={t.name} dueDate={t.dueDate} onDeleteTask={this.handleDeleteTask}/>)
                    }
                </ol>
                <TaskNameForm onAddTask={this.handleAddTask} />
            </div>
        );
    }
}

class TaskNameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', date: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const taskList = this.props.taskList;
        // create a task object
        event.preventDefault();
        const task = { name: this.state.value, 
        dueDate: this.state.date};
        // add the task object to the task list
        this.props.onAddTask(task);
    }

    handleChange(event) {
        // code to set the state of the component
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
					<input  type="text" onChange={this.handleChange} />&nbsp;
					<input type="date" required onChange={() => {
						this.setState({date: new Date(event.target.value)})
					}}/>&nbsp;
					<input type="submit" value="Add Task" />
				</form>
        );
    }
}

ReactDOM.render(
    <TodoList list={[]} />,
    document.getElementById('todo')
);