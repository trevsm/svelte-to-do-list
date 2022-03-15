<script lang="ts">
  import Task from './components/Task.svelte';
  import { local } from './tools';
  import type { task } from './types';

  // State-like variables
  let toDoList: task[] = local('toDoList') || [];

  // Bound input value
  let inputValue = '';

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

  // Subscriptions (is updated every time "state" is updated)
  $: completed = toDoList.filter((task) => task.done).length;
  $: local('toDoList', toDoList);
  $: header = toDoList.length
    ? "Today's Tasks: " +
      (toDoList.length ? `(${completed}/${toDoList.length})` : '')
    : 'No Tasks';
</script>

<main>
  <div class="top">
    <h2>
      {header}
    </h2>
    <ul>
      {#each toDoList as { done, index, label }}
        <Task {deleteTask} {toggleDone} bind:done bind:index {label} />
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
    height: 100%;
    margin: 0 auto;
    padding: 30px;
    .top {
      ul {
        padding: 0;
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
</style>
