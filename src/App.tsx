import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import './App.css'

interface Itask {
  id: number
  text: string
  isChecked: boolean
}

const inicialState: Itask[] = [
  {
    id: 1,
    text: "Nova Tarefa",
    isChecked: false
  },
  {
    id: 1,
    text: "Nova Tarefa2",
    isChecked: false
  }
];

function App() {

  const [tasks, setTasks] = useState(inicialState);
  const [inputName, setInputName] = useState("");

  function addTask() {

  }

  return (

    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="mb-4">
        <h1 className="text-4xl font-bold">Task-Manager</h1>
      </div>
  
      <div className="flex flex-row gap-2">
        <Input className="border border-gray-400 p-2 rounded-md w-96" />
        <Button className="bg-blue-500 text-white p-2 rounded-md">New Task</Button>
        <Button className="bg-gray-400 text-white p-2 rounded-md">Clean</Button>
      </div>

      <div className="mt-8">
        {tasks.map((task) => {
                return (
                  <Card key={task.id} className="mb-2">
                    <CardContent className="p-4">
                      <p>{task.text}</p>
                    </CardContent>
                  </Card>
                )
              })}
      </div>
    </div>

  );
}

export default App;
