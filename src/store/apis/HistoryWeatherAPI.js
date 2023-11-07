import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/history.json',
  params: {
    q: 'London',
    dt: '<REQUIRED>',
    lang: 'en'
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


//  گزارش کلی از اطلاعات هوا شناسی  یو وی  ستاره شناسی  در تاریخ مشخصی از گذشته  را باز می گرداند
//  پارامتر هایی که میخواهد  نام لوکیشن یا ای پی  یا طول و عرض جغرافیایی و تارخ است
// پارامتر های اختیاری ان  تارخ پایان و زمان  ساعت و زبان است