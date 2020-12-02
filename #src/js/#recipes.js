function recipesAddSpollers() {
	let list = document.querySelector('.recipes__list');

	if(list.classList.contains('_spollers')) {
		return
	} else {
		let labels = list.querySelectorAll('.recipes__label');

		list.classList.add('_spollers');
		labels.forEach(item => {
			item.classList.add('_spoller');
		})
		spollerStart();
	}
}

function recipesRemoveSpollers() {
	let list = document.querySelector('.recipes__list');
	let labels = list.querySelectorAll('.recipes__label');

	list.classList.remove('_spollers');
	labels.forEach(item => {
		item.classList.remove('_spoller');
	})
}

{
	let recipes = document.querySelector('.recipes');
	if(recipes) {
		if(document.documentElement.clientWidth < 768) {
			recipesAddSpollers();
					} else {
			window.addEventListener('resize', () => {
				if(document.documentElement.clientWidth < 768) {
					recipesAddSpollers();
				} else {
					recipesRemoveSpollers();
				}
			})
		}
	}
}