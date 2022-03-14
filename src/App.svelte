<script lang="ts">
  import { local } from './tools';

  interface task {
    label: string;
    done: boolean;
    index: number;
  }

  // State-like variables
  let toDoList: task[] = local('toDoList') || [];

  // Bound input value
  let inputValue = '';

  // Subscriptions (is updated every time state is updated)
  $: completed = toDoList.filter((task) => task.done).length;
  $: local('toDoList', toDoList);

  // To-do functions
  function addTask() {
    if (!inputValue) return;
    toDoList = [
      ...toDoList,
      { label: inputValue, done: false, index: toDoList.length + 1 },
    ];
    inputValue = '';
  }
  function toggleDone(index: number) {
    toDoList = toDoList.map((task) => {
      if (task.index !== index) return task;
      return { ...task, done: !task.done };
    });
  }
  function deleteTask(index: number) {
    toDoList = toDoList.filter((task) => task.index !== index);
  }
</script>

<main>
  <div class="top">
    <h2>
      Today's Tasks: {toDoList.length
        ? `(${completed}/${toDoList.length})`
        : ''}
    </h2>
    <ul>
      {#each toDoList as task}
        <li class="task">
          <div>
            <input
              type="radio"
              checked={task.done}
              on:click={() => toggleDone(task.index)}
            />
            <span class={task.done && 'line-through'}>
              {task.label}
            </span>
          </div>
          <button on:click={() => deleteTask(task.index)}>x</button>
        </li>
      {/each}
    </ul>
  </div>
  <div class="textInput">
    <input type="text" bind:value={inputValue} />
    <button on:click={addTask}>Add task</button>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 500px;
    height: 700px;
    margin: 0 auto;
    padding: 30px;
    .top {
      ul {
        padding: 0;
        li.task {
          display: flex;
          justify-content: space-between;
          list-style-type: none;

          padding: 10px;
          margin-bottom: 10px;
          border-radius: 7px;
          box-shadow: 3px 2px 7px #00000014;
          font-size: 20px;
          input {
            margin-right: 20px;
          }
        }
      }
    }
    .textInput {
      display: flex;
      button {
        width: 20%;
      }
      input {
        width: 100%;
      }
    }
  }
  .line-through {
    text-decoration: line-through;
  }
</style>
