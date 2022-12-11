import EndlessListPopup from './EndlessListPopup.svelte';

import './index.css';

const popup = new EndlessListPopup({
	target: document.getElementById('app')
});

export default popup;