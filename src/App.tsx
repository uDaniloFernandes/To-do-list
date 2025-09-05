import { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import './App.css'

interface Itask {
  id: number
  text: string
  isChecked: boolean
}

const inicialState: Itask[] = [];

function App() {

  const [tasks, setTasks] = useState(inicialState);
  const [inputName, setInputName] = useState("");


  function addTask() {

    if (inputName.trim().length <= 0) {
      return;
    }

    const existTask = tasks.find(task => task.text === inputName)

    if (existTask) {
      return;
    }

    const newTask: Itask = {
      id: Math.random(),
      text: inputName,
      isChecked: false
    };

    setTasks((prevState) => [...prevState, newTask])
  }


  function taskDelete(id: number) {
    setTasks(prevTasks => prevTasks.filter(
      task => task.id != id)
    );
  }

  function cleanBar() {
    setInputName("")
  }


  function checkTask(id: number) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  useEffect(() => {
    if (tasks) {
      console.log("Lista de tarefas atualizada!!!")
    }
  }

  )
  

  return (

    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="mb-4">
         <h1 className="text-4xl font-bold">Task-Manager</h1>
      </div>

      <div className="flex flex-col items-center gap-4 w-96">
        <div className="flex flex-row gap-2 w-full">
        <Input className="border border-gray-400 p-2 rounded-md w-full"
          onChange={(t) => setInputName(t.target.value)}
          value={inputName}
         />
        <Button className="bg-blue-500 text-white p-2 rounded-md"
          onClick={addTask}>
          New Task</Button>
        <Button className="bg-gray-400 text-white p-2 rounded-md"
          onClick={cleanBar}>
          Clean</Button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          {tasks.map((task) => {
            return (
              <Card key={task.id} className="mb-2 w-full">
                <CardContent className="flex flex-row p-4 items-center justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <Checkbox
                      checked={task.isChecked}
                      onCheckedChange={() => checkTask(task.id)}
                    />
                    <p className={task.isChecked ? "line-through text-gray-500":""}>{task.text}</p>
                  </div>
                  <Button className="bg-red-500 text-white p-2 rounded-md"
                      onClick={() => taskDelete(task.id)}>
                      Delete
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>

  );
}

export default App;