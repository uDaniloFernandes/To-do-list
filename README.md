# 📑 Documentação da Aplicação: Task Manager  

## 1. 📝 Descrição da Aplicação  
O **Task Manager** é uma aplicação web simples para **gerenciamento de tarefas** ✅.  
Ele permite que os usuários:  
- ➕ Adicionem novas tarefas  
- ☑️ Marquem tarefas como concluídas  
- ❌ Excluam tarefas  
## 2. ⚙️ Tecnologias Utilizadas  
A aplicação foi construída utilizando:  

- ⚛️ **React** → Construção da interface de usuário  
- 🟦 **TypeScript** → Tipagem.
- ⚡ **Vite** → Build moderno e rápido.
- 🎨 **Shadcn UI** → Componentes de UI acessíveis com Tailwind.  
- 💨 **Tailwind CSS** → Estilização prática.

## 3. 🧩 Estrutura de Componentes  

O projeto possui um único componente principal: **App.jsx**, que gerencia toda a lógica e interface.  
Ele é organizado da seguinte forma:  

- 🖊️ **Área de Entrada** → Input para novas tarefas, botão *New Task* ➕ e botão *Clean* 🧹  
- 📋 **Lista de Tarefas** → Contêiner que mapeia o array de tarefas e renderiza cada item  
- 🗂️ **Item de Tarefa** → Card com:  
  - Texto da tarefa 📝  
  - Checkbox ☑️ para conclusão  
  - Botão ❌ para exclusão  


## 4. 🔄 Gerenciamento de Estado (useState, useEffect)  

### useState
A aplicação utiliza o **hook `useState`** para controle dos estados dos componentes:  

- **`tasks`** 📋 → Array de objetos com:  
  - `id` (number)  
  - `text` (string)  
  - `isChecked` (boolean)  

- **`inputName`** ✍️ → String com o valor digitado no input  

Exemplo:  

```tsx
const [tasks, setTasks] = useState<Itask[]>(inicialState);
const [inputName, setInputName] = useState<string>("");
````
---
### useEffect
A aplicação utiliza o **hook `useEffect`** para monitorar o estado da lista de tarefas
criando um aviso no **console do navegador** sempre que o estado muda:  
```tsx
useEffect(() => {
	if (tasks) {
		console.log("Lista de tarefas atualizada!!!")
	}
}
````
## 5. 🛡️ Tipagem
Nessa aplicação a partir do **Typescript** foi criada essa interface que tipa as tarefas da lista que contem os atributos:
- **id:** identificador único, gerado aleatoriamente.
- **text:** Conteudo da tarefa, texto que descreve a tarefa.
- **isChecked:** Atributo que gera a dinâmica de status na tarefa (concluída / à fazer).

#### Implementação:
```tsx
interface  Itask {
	id:  number
	text:  string
	isChecked:  boolean
}
````