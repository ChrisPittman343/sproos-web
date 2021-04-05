import cookie from "cookie";

export default (req, res) => {
  const token = req.body;
  const cookieHeader = cookie.serialize("IDT", token, {
    maxAge: 900000,
  });
  res.setHeader("Set-Cookie", cookieHeader);
  res.status(200).send("pong");
};
