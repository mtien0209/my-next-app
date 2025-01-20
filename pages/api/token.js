// pages/api/token.js
export default async (req, res) => {
  const { grant_token } = req.body;

  // Gửi yêu cầu tới Kuroco để lấy access token
  const response = await fetch('https://kuroco-api-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ grant_token }),
  });

  const data = await response.json();
  res.status(200).json(data);
};
