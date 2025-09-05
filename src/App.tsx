import { useState } from 'react'
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

const inicialState: Itask[] = [
  {
    id: 1,
    text: "Nova Tarefa",
    isChecked: false
  },
  {
    id: 2,
    text: "Nova Tarefa2",
    isChecked: false
  }
];

function App() {

  const [tasks, setTasks] = useState(inicialState);
  const [inputName, setInputName] = useState("");

  function addTask() {

  }

  function handleCheckTask(id: number) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  }

  return (

    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="mb-4">
         <h1 className="text-4xl font-bold">Task-Manager</h1>
      </div>

      <div className="flex flex-col items-center gap-4 w-96">
        <div className="flex flex-row gap-2 w-full">
        <Input className="border border-gray-400 p-2 rounded-md w-full" />
        <Button className="bg-blue-500 text-white p-2 rounded-md">New Task</Button>
        <Button className="bg-gray-400 text-white p-2 rounded-md">Clean</Button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          {tasks.map((task) => {
            return (
              <Card key={task.id} className="mb-2 w-full">
                <CardContent className="flex flex-col gap-2 w-full p-4 ">
                  <Checkbox
                    checked={task.isChecked} // Passa o estado 'isChecked' do objeto
                    onCheckedChange={() => handleCheckTask(task.id)} // Chama a função ao clicar
                  />
                  <p>{task.text}</p>
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