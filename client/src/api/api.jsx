// get data from the back-end
import axios from "axios";

export default async function getProjectsApi() {
  try {
    const API_URL =
      "https://personal-website-angeltheesoto.vercel.app/projects";
    const resp = await fetch(API_URL);
    const data = await resp.json();
    return data;
  } catch (e) {
    return console.log(e);
  }
}
