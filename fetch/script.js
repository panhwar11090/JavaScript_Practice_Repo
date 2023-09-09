let url  = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const opt =   {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'abd3e2958cmshb092437d072c47bp1ce6b8jsn8db0d001653d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let p = fetch(url , opt)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });