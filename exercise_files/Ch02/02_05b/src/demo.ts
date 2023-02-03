interface Contact {
	id: number;
	name: string;
	//třetí syntax jak definovat typ funkce
	clone?(name: string): Contact;
}
// v závorce - typ vstupu, za závorkou - typ výstupu
// Funkce - jiná syntax s šipkou, ale moc to nechápu
function clone(source: Contact, funct: (source: Contact) => Contact): Contact {
	return Object.apply({}, source);
}

const a: Contact = {
	id: 123,
	name: 'Test',
};
const b = clone(a);
