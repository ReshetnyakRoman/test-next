export default function handler(req, res) {
  let text = "Wrong request";

  if (req.method === "POST") {
    console.log("params", JSON.parse(req.body).im);
    text = "Im from post request: " + JSON.parse(req.body).im;
    console.log("url", req.url);
  } else {
    console.log("=====Wrong request method for /post resource=====");
  }

  res.status(200).json({ text });
}
