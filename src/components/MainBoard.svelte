<script lang="ts">
  import { decimalNum } from "../stores/decimalNumController";
  import Hand from "./Hand.svelte";

  let binaryNum: number;

  $: binaryNum = Number($decimalNum.toString(2));
</script>

<div class="main-board">
  <Hand num={binaryNum} />
  <div>
    <p>二進数：<span class="binary">{binaryNum}</span></p>
    <p>十進数：<span class="decimal">{$decimalNum}</span></p>
  </div>
</div>

<style lang="scss" type="text/scss">
  @use "../styles/breakpoints" as *;

  .main-board {
    background-color: #f8f4e6;
    border: 5px solid #ff3e00;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2.5em auto;
    padding: 2em 0;
    place-items: center;
    width: 72%;

    @include small {
      grid-template-columns: 1fr;
      margin-top: 1.5em;
      width: 95%;
    }

    @include large {
      width: 50%;
    }
  }

  p {
    font-size: 1.25em;

    span {
      display: inline-block;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      text-align: right;
      width: 60px;
    }
  }
</style>
