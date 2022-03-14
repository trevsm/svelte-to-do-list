export function local(key: string, value?: any[]) {
  if (value) {
    localStorage.setItem("toDoList", JSON.stringify(value));
  }
  return JSON.parse(localStorage.getItem(key));
}
