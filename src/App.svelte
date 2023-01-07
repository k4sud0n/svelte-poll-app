<script>
  let name = 'Svelte';

  // const handleInput = (e) => {
  //   name = e.target.value;
  // }
</script>

<h1>Hello {name}!</h1>
<!-- <input type="text" value={name} on:input={handleInput}> -->
<input type="text" bind:value={name}>