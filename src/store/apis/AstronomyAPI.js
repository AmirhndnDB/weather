import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
  params: {
    q: 'kabol',
    dt: '2023-10-20'
  },
  headers: {
    'X-RapidAPI-Key': '8d59fce8acmshba1ffed0f630742p18a83ajsn9447ef14669b',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



// زمان  طلوع غروب خورشید را میگوید و ماه موارد زیر


// astro:
// sunrise:"06:02 AM"
// sunset:"05:14 PM"
// moonrise:"11:41 AM"
// moonset:"09:08 PM"
// moon_phase:"Waxing Crescent"
// moon_illumination:"27"