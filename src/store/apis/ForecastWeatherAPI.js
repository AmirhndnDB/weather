import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {
    locationName: 'iran',
    days: '3'
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



//   این  ای بی ای با دریافت  نام مکان  اطلاعات اب و هوایی را به ما باز می گرداند و
//  بابارامز  روز ها تعداد روز برای بیش بینی را تعین میکند 
// با بارامز لنگو ایج  متن را در ای بی ای به زبان  مخورد نظر برمیگرداند
// If passing 'dt', it should be between today and next 10 day in yyyy-MM-dd format.