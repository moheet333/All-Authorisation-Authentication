export const basicAuth = async (req, res, next) => {
  const user = req.headers.authorization;
  if (!user) {
    throw new Error("Unauthorized!");
  }
  const auth = new Buffer.from(user.split(" ")[1], "base64")
    .toString()
    .split(":");
  const username = auth[0];
  const password = auth[1];
  const adminPassword = "admin";
  const adminUsername = "admin";
  if (username === adminUsername && password === adminPassword) {
    console.log("Success!!");
    next();
  }
};
