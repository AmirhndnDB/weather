import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/timezone.json',
  params: {q: '5.52.178.143'},
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


// این ای بی ای با دریافت  ای بی  نام لوکیشن  ان ای بی را باز می گرداند و همینطور طول و عرض جغرافیایی

// این اطلاعات زیر را می دهد


// {
//     "location": {
//       "name": "Tehran",
//       "region": "",
//       "country": "Iran",
//       "lat": 35.73,
//       "lon": 51.33,
//       "tz_id": "Asia/Tehran",
//       "localtime_epoch": 1697192241,
//       "localtime": "2023-10-13 13:47"
//     }
//   }