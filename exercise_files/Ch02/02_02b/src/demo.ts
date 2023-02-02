interface Contact extends Address {
	id: number;
	name: string;
	birtDate?: Date;
}

interface Address {
	line1: string;
	line2: string;
	province: string;
	region: string;
	postalCode: number;
}

let primaryContact: Contact = {
	birtDate: new Date('01-03-1994'),
	id: 12345,
	name: 'Martin Toman',
	postalCode: 27401,
};

let otherContact: Contact = {
	id: 54321,
	name: 'Blabla bleble',
};
