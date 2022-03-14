<script lang="ts">
  import { local } from './tools';

  interface task {
    value: string;
    done: boolean;
    index: number;
  }

  let toDoList: task[] = local('toDoList');
  $: completed = toDoList.filter((task) => task.done).length;
  let value = '';

  $: local('toDoList', toDoList);

  function addTask() {
    if (!value) return;
    toDoList = [
      ...toDoList,
      { value, done: false, index: toDoList.length + 1 },
    ];
    value = '';
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

<h2>
  Today's Tasks: {toDoList.length ? `(${completed}/${toDoList.length})` : ''}
</h2>
<ul>
  {#each toDoList as task}
    <li>
      <input
        type="radio"
        checked={task.done}
        on:click={() => toggleDone(task.index)}
      />
      <span class={task.done && 'line-through'}>
        {task.value}
      </span>
      <button on:click={() => deleteTask(task.index)}>x</button>
    </li>
  {/each}
</ul>

<input type="text" bind:value />
<button on:click={addTask}>Add task</button>

<style>
  .line-through {
    text-decoration: line-through;
  }
</style>
