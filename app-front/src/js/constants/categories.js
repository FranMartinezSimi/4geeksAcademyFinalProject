const iconDefault = 'star';
export const listCategories = {
	home: 'home',
	crafts: 'crafts',
	pets: 'pets',
	anything: 'anything',
	paperwork: 'paperwork',
	errands: 'errands',
	events: 'events',
	all: 'all'
};

const categoriesIcon = [
	{
		code: listCategories.home,
		icon: 'couch'
	},
	{
		code: listCategories.crafts,
		icon: 'cut'
	},
	{
		code: listCategories.pets,
		icon: 'paw'
	},
	{
		code: listCategories.events,
		icon: 'glass-cheers'
	},
	{
		code: listCategories.paperwork,
		icon: 'paperclip'
	},
	{
		code: listCategories.errands,
		icon: 'calendar-check'
	},
	{
		code: listCategories.anything,
		icon: 'star'
	},
	{
		code: listCategories.all,
		icon: 'thumbtack'
	}
];

export const getIconByCode = (code) => {
	const filtered = categoriesIcon.filter((item) => item.code.toUpperCase() === code.toUpperCase());
	if (filtered === null || filtered === undefined || filtered.length < 1) return iconDefault;

	return filtered[0].icon;
};

export const getIconById = (list, id) => {
	const filtered = list.filter((item) => item.id === id);
	if (filtered === null || filtered === undefined || filtered.length < 1) return iconDefault;

	return getIconByCode(filtered[0].code);
};

export default categoriesIcon;
