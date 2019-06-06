export default class Resource {
	static getContacts(finishCb) {
		var items = [
			{
				login: 'typeofweb1',
				name: 'Lena',
				department: 'JavaScript Developer'
			}, {
				login: 'typeofweb2',
				name: 'Brian',
				department: 'Human Resources'
			}, {
				login: 'typeofweb3',
				name: 'Rick',
				department: 'QA'
			}, {
				login: 'damianczapiewski@gmail.com',
				name: 'Damian',
				department: 'JavaScript Developer'
			}
		];

		return new Promise(function (resolve) {
			setTimeout(function () {
				resolve(items);
			}, 1000);
		});
	}
}
