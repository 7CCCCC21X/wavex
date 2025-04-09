export default async function handler(req, res) {
  const { address } = req.query;
  const response = await fetch(`https://app.wavex.fi/api/rewards?address=${address}`);
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
