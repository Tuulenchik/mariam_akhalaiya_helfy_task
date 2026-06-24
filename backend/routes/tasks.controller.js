let tasks=[];
let nextId=1;

function getTasks(req,res){
    return res.status(200).json(tasks)
}

const priority = ['low', 'medium', 'high']

function postTask(req,res){
    const body = req.body
    if(!body.title || !body.description || priority.includes(body.priority) === false ){
        return res.status(400).json('missing task property')
    }
    const newTask={
        id: nextId++,
        title: body.title,
        description: body.description,
        completed: false,
        createdAt: new Date(),
        priority: body.priority
    }

    tasks.push(newTask)
    return res.status(201).json(newTask)
}

function updateTask(req,res){
    const taskId = Number(req.params.id)
    const taskExists = tasks.find((task)=>task.id === taskId)
    if(!taskExists){
        return res.status(404).json('task not found')
    }
    const body = req.body
    if(!body.title || !body.description || priority.includes(body.priority) === false ){
        return res.status(400).json('missing task property')
    }

    taskExists.title=body.title;
    taskExists.description=body.description;
    taskExists.priority=body.priority;

    return res.status(200).json(taskExists)
}

function deleteTask(req,res){
    const taskId = Number(req.params.id)
    const taskIndex = tasks.findIndex((task)=>task.id === taskId)
    if(taskIndex===-1){
        return res.status(404).json('task not found')
    }
    const deletedTask = tasks.splice(taskIndex, 1)
    return res.status(200).json({
        message: 'task deleted successfully',
        task: deletedTask[0]
    })
}

function toggleTask(req,res){
    const taskId = Number(req.params.id)
    const taskExists = tasks.find((task)=>task.id === taskId)
    if(!taskExists){
        return res.status(404).json('task not found')
    }
    
    taskExists.completed=!taskExists.completed
    return res.status(200).json(taskExists);
    
}

module.exports={getTasks, postTask, updateTask, deleteTask, toggleTask}