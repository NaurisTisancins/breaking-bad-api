import axios from "axios";

const API_ENDPOINT = "https://www.breakingbadapi.com/api/";

export async function getCharacters(category) {
  try {
    const response = await axios.get(`${API_ENDPOINT}characters?${category}`);
    if (response.status !== 200) throw response;
    return response.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log('Error', err.message);
    }
    console.log(err.config);
  }
}

export async function getCharacterQuotes(nameQuery) {
  try {
    const response = await axios.get(`${API_ENDPOINT}quote?author=${nameQuery}`)
    if (response.status !== 200) throw response;
    console.log(response.data)
    return response.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log('Error', err.message);
    }
    console.log(err.config);
  }
}

export async function getCharacterById(id) {
  try {
    const response = await axios.get(`${API_ENDPOINT}characters/${id}`)
    if (response.status !== 200) throw response;
    return response.data[0];
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      console.log('Error', err.message);
    }
    console.log(err.config);
  }
}
