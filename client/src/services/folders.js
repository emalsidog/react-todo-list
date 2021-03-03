export default class FolderService {
  getFolders = async () => {
    const response = await fetch("http://localhost:3001/", {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    });
    const json = await response.json();
    return json;
  }

  createFolder = async title => {
    const response = await fetch("http://localhost:3001/create-folder", {
      method: "POST",
      body: JSON.stringify(title),
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    return json;
  }
}
