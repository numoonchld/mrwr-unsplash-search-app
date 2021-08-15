import axios from "axios";

export default axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: `Client-ID yH_umKAt5ZLL6ksciPawBktWBvwM49FUVOQxhb9BQ0s`
  }
});
