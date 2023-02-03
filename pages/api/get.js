export default function handler(req, res) {
  let text = "Wrong request";

  if (req.method === "GET") {
    text = "Im get request with prams: ";
    console.log("params", req.query);
    if (req.query) {
      Object.keys(req.query).forEach((param) => {
        text += `${param}:${req.query[param]} `;
      });
    }
    console.log("url", req.url);
  } else {
    console.log("=====Wrong request method for /post resourc=====");
  }

  res.status(200).json({ text });
}
