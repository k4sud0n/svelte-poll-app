<script>
  import Modal from './Modal.svelte';

  let people = [
    { name: 'yoshi', beltColor: 'black', age: 25 , id: 1},
    { name: 'mario', beltColor: 'orange', age: 45 , id: 2},
    { name: 'luigi', beltColor: 'brown', age: 35 , id: 3},
  ]

  const deletePerson = (id) => {
    people = people.filter((person) => person.id != id)
  }
</script>

<Modal/>

<main>
  {#each people as person (person.id)}
    <div>
      <p>{person.name}</p>
      {#if person.beltColor === 'black'}
        <strong>MASTER NINJA</strong>
      {/if}
      <p>{person.beltColor}</p>
      <p>{person.age}</p>
      <button on:click={() => {deletePerson(person.id)}}>delete</button>
    </div>
  {:else}
    <div>There are no people to show...</div>
  {/each}
</main>