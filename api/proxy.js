export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { address } = req.query;
  if (!address) {
    return res.status(400).json({ error: "Missing address parameter" });
  }

  try {
    const response = await fetch(`https://app.wavex.fi/api/rewards?address=${address}`);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch data", details: err.message });
  }
}
