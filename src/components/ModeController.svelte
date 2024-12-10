<script lang="ts">
import { currentMode } from "../stores/modeStores";
</script>

<div class="controller-wrapper">
  <button on:click={currentMode.setManual} disabled={$currentMode === "manual"}>
    <p>手動</p>
  </button>
  <button on:click={currentMode.setAutomatic} disabled={$currentMode === "automatic"}>
    <p>自動</p>
  </button>
</div>

<style lang="scss">
  @use "../styles/button";
</style>
