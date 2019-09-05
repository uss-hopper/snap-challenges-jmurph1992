const onPageLoad = () => {
	axios.get('https://dog.ceo/api/breeds/list/all').then(({data}) =>{
		let breeds = data.message;
		let cards = '';

		for (let key in breeds) {
			cards = cards + '<li>' + key + '</li>';
		}
		cards = '<ul>' + cards + '</ul>';
		let html = document.getElementById("target");
		html.innerHTML = cards;
	});
};