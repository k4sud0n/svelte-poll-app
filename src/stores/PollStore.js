import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: 'Python or Javascript?',
        answerA: 'Python',
        answerB: 'JavaScript',
        votesA: 7,
        votesB: 26,
    },
]);

export default PollStore;