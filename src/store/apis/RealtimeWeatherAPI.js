import axios from 'axios';



    
    const options = {
        method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {latAndLon: '31.1,-0.25'},
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





// این  ای بی ای با دریافت  طول  و  عرض جغرافیایی  اطلاعات اب و هوایی را به ما باز می گرداند