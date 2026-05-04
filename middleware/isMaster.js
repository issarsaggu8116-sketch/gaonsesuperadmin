export const isMaster = (req, res, next) => {
  const key = req.headers["x-master-key"];

  if (key !== process.env.MASTER_KEY) {
    return res.status(403).json({
      success: false,
      message: "Unauthorized Master Access",
    });
  }

  next();
};