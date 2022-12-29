// get data from the back-end
export default async function getProjectsApi() {
  try {
    const API_URL = "http://localhost:5000/projects";
    const resp = await fetch(API_URL);
    const data = await resp.json();
    return data;
  } catch (e) {
    return console.log(e);
  }
}
