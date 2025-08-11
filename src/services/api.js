const callToApi = async () => {
  const res = await fetch("https://girlflix.onrender.com/project/list");
  const data = await res.json();
  if (data.success) {
    return data.results;
  } else {
    return [];
  }
};
export default callToApi;
