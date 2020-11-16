// Classes
const fet = new Fetch();
const ui = new UI();

// Event Listeners
const search = document.getElementById('searchUser');
const button = document.getElementById('submit');

button.addEventListener('click', () => {
	const currentVal = search.value;
	fet.getCurrent(currentVal).then((data) => {
		// Calling Ui Method
		ui.populateUI(data);
	});
});
