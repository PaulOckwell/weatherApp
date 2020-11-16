class Fetch {
	async getCurrent(input) {
		const myKey = '1c7b1c4c10c510e13f335090f2020a47';

		//Make Request To URL
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`);

		const data = await response.json();

		console.log(data);

		return data;
	}
}
