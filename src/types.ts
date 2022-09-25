export interface Driver {
	id: string;
	firstName: string;
	lastName: string;
	profileImg: string;
}
export interface Ride {
	id: string;
	driverId: string;
	userId: string;
	registrationNumber: string;
	date: string;
}
