import axios from "axios";

export const getImages = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://source.unsplash.com/random/?light-blue,mountain,sea,snow`,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(`Failed to fetch images, status code: ${res.status}`);
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
