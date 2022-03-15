<script lang="ts">
  export let deleteTask, toggleDone;
  export let done, index, label;
</script>

<li class="task">
  <div>
    <input type="radio" checked={done} on:click={() => toggleDone(index)} />
    <span class={done && 'line-through'}>
      {label}
    </span>
  </div>
  <button on:click={() => deleteTask(index)}>x</button>
</li>

<style lang="scss">
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
  .line-through {
    text-decoration: line-through;
  }
</style>
