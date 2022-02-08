<script lang="ts">
  export let num: number = 0;

  const binary: boolean[] = new Array(5);

  function setBinary(num: number) {
    for (let i = 0; i < binary.length; i++) {
      const digit = Math.pow(10, i);
      binary[i] = 1 === Math.floor(num / digit) % 10;
    }
  }

  $: setBinary(num);
</script>

<div class="hand-wrapper">
  <div class="thumb" class:thumb-folding={binary[0] === true} />

  <div>
    <div class="first" class:finger-folding={binary[1] === true} />
    <div class="second" class:finger-folding={binary[2] === true} />
    <div class="third" class:finger-folding={binary[3] === true} />
    <div class="fourth" class:finger-folding={binary[4] === true} />

    <div class="palm" />
  </div>
</div>

<style lang="scss">
  $finger-color: #ff3e00;
  $finger-width: 2em;

  div {
    display: inline-block;
    border-radius: 5px;
  }

  .hand-wrapper {
    height: 261px;
    margin: 16px auto;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  .thumb {
    background-color: $finger-color;
    border-radius: 5px 30px;
    height: 7rem;
    margin-bottom: 1rem;
    vertical-align: bottom;
    width: $finger-width * 1.25;
  }

  .thumb-folding {
    border-radius: 30px;
    height: 4em;
    margin-right: -1.5em;
    widows: $finger-width;
  }

  @mixin finger {
    background-color: $finger-color;
    width: $finger-width;
  }

  .first {
    @include finger;
    height: 7.2em;
  }

  .second {
    @include finger;
    height: 8em;
  }

  .third {
    @include finger;
    height: 6.8em;
  }

  .fourth {
    @include finger;
    height: 5em;
  }

  .finger-folding {
    margin-bottom: -5rem;
  }

  .palm {
    background-color: $finger-color;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    display: block;
    height: $finger-width * 4;
  }
</style>
