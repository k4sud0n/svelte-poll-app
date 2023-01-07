<script>
  let firstName = 'Jimi';
  let lastName = 'Hendrix';
  let beltColor = 'black';

  $: fullName = `${firstName} ${lastName}`;
  $: {
    console.log(lastName);
    console.log(beltColor);
  }
</script>

<main>
  <p>{fullName} - {beltColor}</p>
  <input type="text" bind:value={firstName}>
  <input type="text" bind:value={lastName}>
  <input type="text" bind:value={beltColor}>
</main>