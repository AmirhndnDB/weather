import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
  params: {q: '100.0.0.1'},
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


// ip:"5.52.178.143"
// type:"ipv4"
// continent_code:"AS"
// continent_name:"Asia"
// country_code:"IR"
// country_name:"Iran"
// is_eu:"false"
// geoname_id:112931
// city:"Tehran"
// region:""
// lat:35.7477
// lon:51.4021
// tz_id:"Asia/Tehran"
// localtime_epoch:1697190620
// localtime:"2023-10-13 13:20"