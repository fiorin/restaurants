import axios from "axios";

export default async (req, res) => {
  const query = req.query;
  const response = await axios.get('http://localhost:3000/restaurant', { params: query });
  const json = response.data;
  res.status(200).json(json)
}
