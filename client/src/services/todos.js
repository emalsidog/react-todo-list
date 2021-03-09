export default class TodoService {
  url = "http://localhost:3001"

  getTodos = async folderId => {
    const response = await fetch(`${this.url}/${folderId}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    });
    const json = await response.json();
    return json;
  }

  addTodo = async todoData => {
    const { content, folderId } = todoData;
    const response = await fetch(`${this.url}/${folderId}/add-todo`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content }),
    });
    const json = await response.json();
    return json;
  }

  deleteTodo = async todoData => {
    const { todoId, folderId } = todoData;
    const response = await fetch(`${this.url}/${folderId}/delete-todo`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: todoId }),
    }); 
    const json = await response.json();
    return json;
  }

  doneTodo = async todoData => {
    const { todoId, folderId } = todoData;
    const response = await fetch(`${this.url}/${folderId}/done-todo`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: todoId }),
    });
    const json = await response.json();
    return json;
  }

  importantTodo = async todoData => {
    const { todoId, folderId } = todoData;
    const response = await fetch(`${this.url}/${folderId}/important-todo`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: todoId }),
    });
    const json = await response.json();
    return json;
  }
}