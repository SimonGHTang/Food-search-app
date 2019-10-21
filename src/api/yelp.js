import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer aKqmHa5LozIpXgWmxBm9hPVgGS0MC4Rg5SIoELc9r-z920jCBKVWjJW9acf580xP7NEJvphCkTQU_1TJMMziSUefN2akDaUBnlUJ2jBDWcN8KdDCqgEV66wILzGkXXYx"
  },
});
