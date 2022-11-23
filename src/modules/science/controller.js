import model from "./model.js";

const GET = async (req, res) => {
  try {
    const science = await model.GET(req.params);
    res.send(science);
  } catch (error) {
    console.error(error);
  }
};

export default {
    GET
}
