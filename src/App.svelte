<script>
  let people = [
    { name: 'yoshi', beltColor: 'black', age: 25 , id: 1},
    { name: 'mario', beltColor: 'orange', age: 45 , id: 2},
    { name: 'luigi', beltColor: 'brown', age: 35 , id: 3},
  ]
</script>

<main>
  {#each people as person (person.id)}
    <div>
      <p>{person.name}</p>
      <p>{person.beltColor}</p>
      <p>{person.age}</p>
    </div>
  {:else}
    <div>There are no people to show...</div>
  {/each}
</main>