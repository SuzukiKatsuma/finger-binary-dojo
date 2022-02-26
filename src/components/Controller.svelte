<script lang="ts">
  import { decimalNum } from "../stores/decimalNumController";
</script>

<div class="controller-wrapper">
  <button on:click={decimalNum.decrement} disabled={$decimalNum < 1}>
    <p>－</p>
  </button>
  <button on:click={decimalNum.increment} disabled={30 < $decimalNum}>
    <p>＋</p>
  </button>
  <br />
  <button on:click={decimalNum.reset} class={30 < $decimalNum ? "" : "hide"}>
    <p>0に戻す</p>
  </button>
</div>

<style lang="scss">
  @use "../styles/button";

  .controller-wrapper {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  .hide {
    display: none;
  }
</style>
