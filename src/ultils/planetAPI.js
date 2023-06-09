const API = async () => {
  const apiFetch = fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const apiResult = await apiFetch.then((response) => response.json());
  return apiResult.results;
};
export default API;
