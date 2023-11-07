import axios from 'axios';


  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/search.json',
    params:{q: '<REQUIRED>'},
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




// ارایه ای از  نام و ادرس شهر ها است برای اتو تکمیل شونده سرچ  
//  یک بارامتر میگیرد  و ان میتواند ادرس و ای بی و طول و عرض و اسم  ان مکان باشد