type ContactName = string;
type ContactStatus = 'active' | 'inactive' | 'new';
type ContactBirthDate = Date | number | string;

interface Contact {
	id: number;
	name: ContactName;
	birthDate?: ContactBirthDate;
	status?: ContactStatus;
	email?: string;
}

let primaryContact: Contact = {
	id: 12345,
	name: 'Jamie Johnson',
	status: 'active',
};

type ContactFields = keyof Contact;

const field: ContactFields = 'email';

// Helpfull usage of keyof -> nemůžu posrat spelling v případě níže
function getValue<T, U extends keyof T>(source: T, propertyName: U) {
	return source[propertyName];
}

const value = getValue(primaryContact, 'status');

const value2 = getValue({ min: 1, max: 200 }, ''); // samo to doplňuje z pole, díky použití <T>
