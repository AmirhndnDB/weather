import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=NyanVpjfAqn5DN5b03Pa63krqFc25lzB',
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



