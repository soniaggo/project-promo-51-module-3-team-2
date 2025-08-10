const callToApi = async () => {
  const res = await fetch("http://localhost:4000/project/list");
  const data = await res.json();
  if (data.success) {
    return data.results;
  } else {
    return [];
  }
};
export default callToApi;
