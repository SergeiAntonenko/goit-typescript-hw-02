import axios from "axios";

const accessKey = "tTc1qds4ayW_fOF7KxIhi1CxBR2GTVJLZdqgkt7LdK8";

axios.defaults.baseURL = "https://api.unsplash.com/";

axios.defaults.headers.common = {
  Authorization: `Client-ID ${accessKey}`,
  "Content-Type": "application/json",
  "Accept-Version": "v1",
};

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query,
        page,
        per_page: 12,
        client_id: accessKey,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
