import axios from "axios";
const apiEndPoint = "https://www.omdbapi.com/?apikey=461da771&";

export const fetchMovieInfo = async (title) => {
  try {
    const url = apiEndPoint + "t=" + title;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { status: "error", mesage: error.message };
  }
};
