<script>
    import Modal from './Modal.svelte';

    let showModal = false;

    const toggleModal = () => {
        showModal = !showModal;
    }

    let people = [
        { name: 'yoshi', beltColor: 'black', age: 25 , id: 1},
        { name: 'mario', beltColor: 'orange', age: 45 , id: 2},
        { name: 'luigi', beltColor: 'brown', age: 35 , id: 3},
    ]

    const deletePerson = (id) => {
        people = people.filter((person) => person.id != id)
    }
</script>

<Modal message="Sign up for more offers!" {showModal} on:click={toggleModal} /> 

<main>
    <button on:click|once={toggleModal}>Open Modal</button>

    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>
            {#if person.beltColor === 'black'}
              <p><strong>MASTER NINJA</strong></p>
            {/if}
            <p>{person.age} years old, {person.beltColor} belt.</p>
            <button on:click={() => {deletePerson(person.id)}}>delete</button>
        </div>
    {:else}
    	<div>There are no people to show...</div>
    {/each}
</main>

<style>
  main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>