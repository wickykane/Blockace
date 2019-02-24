const axios = require("axios");
exports.getListBlog = async (req, res, next) => {
  try {
    const url = `https://medium.com/${req.query.username}/latest?format=json`;
    const blogs = await axios.get(url);
    const prefix = `])}while(1);</x>`
    const strip = payload => payload.replace(prefix, ``)
    res.send(JSON.parse(strip(blogs.data)));
  } catch (e) {
    next(e);
  }
};
