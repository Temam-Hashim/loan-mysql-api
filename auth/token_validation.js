import jwt from "jsonwebtoken";

export function checkToken(req, res, next) {
  let token = req.get("authorization");
  if (token) {
    token = token.slice(7);
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        res.json({
          success: 0,
          message: "invalid token passed!",
        });
      } else {
        next();
      }
    });
  } else {
    res.json({
      success: 0,
      message: "access denied! unauthorized user",
    });
  }
}
