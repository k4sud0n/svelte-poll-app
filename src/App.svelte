<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import CreatePollForm from './components/CreatePollForm.svelte';
	import PollList from './components/PollList.svelte';

	import Tabs from './lib/Tabs.svelte';

	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e) => {
		activeItem = e.detail;
	}

	let polls = [
		{
			id: 1,
			question: 'Python or Javascript?',
			answerA: 'Python',
			answerB: 'JavaScript',
			votesA: '7',
			votesB: '26',
		},
	]

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		console.log(polls)
	}
</script>

<Header />

<main>
  	<Tabs {items} {activeItem} on:tabChange={tabChange} />

	{#if activeItem === 'Current Polls'}
		<PollList {polls} />
	{:else if activeItem === 'Add New Poll'}
		<CreatePollForm on:add={handleAdd} />
	{/if}
</main>

<Footer />

<style>
	main {
		width: 100%;
		max-width: 960px;
		margin: 40px auto;
	}
</style>