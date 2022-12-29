const API_URL = "http://localhost:5000/projects";

// get data from the back-end
export async function getProjectsApi() {
  return fetch(API_URL)
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((e) => console.log(e));
}
