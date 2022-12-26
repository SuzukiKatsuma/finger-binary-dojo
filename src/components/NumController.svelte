<script lang="ts">
  import { decimalNum } from "../stores/decimalNumStores";
  import { currentMode } from "../stores/modeStores";

  let interval: NodeJS.Timer;

  const stopInterval = () => {
    clearInterval(interval);
    interval = null;
  }

  const autoIncrement = () => {
    decimalNum.increment();

    if(30 < $decimalNum) {
      stopInterval();
    }
  }

  const startAutoIncrement = () => {
    if(!interval) {
      interval = setInterval(autoIncrement, 1000);
    }
  }

  $: {
    if($currentMode === "manual") {
      stopInterval();
    }
  }
</script>

<div class="controller-wrapper">

  {#if $currentMode === "manual"}
    <button on:click={decimalNum.decrement} disabled={$decimalNum < 1}>
      <p>－</p>
    </button>
    <button on:click={decimalNum.increment} disabled={30 < $decimalNum}>
      <p>＋</p>
    </button>
  {/if}

  {#if $currentMode === "automatic"}
    {#if interval == null}
      <button on:click={startAutoIncrement} disabled={30 < $decimalNum}>
        <p>
          {#if $decimalNum === 0}
            開始
          {:else}
            再開
          {/if}
        </p>
      </button>
    {:else}
      <button on:click={stopInterval} disabled={30 < $decimalNum}>
        <p>停止</p>
      </button>
    {/if}
  {/if}

  <br />

  <button on:click={decimalNum.reset} class={30 < $decimalNum ? "" : "hide"}>
    <p>0に戻す</p>
  </button>
</div>

<style lang="scss">
  @use "../styles/button";

  .controller-wrapper {
    overflow: hidden;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  .hide {
    position: relative;
    right: -10000px;
  }
</style>
