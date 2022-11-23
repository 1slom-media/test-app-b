import model from './model.js'


const GET = async (req, res) => {
    try {
        const result = await model.GET(req.params,req.query)
        res.send(result)
    } catch (error) {
        console.error(error);
    }
}

const POST = async (req, res) => {
    try {
      const result = await model.POST(req.body);
       res.status(201).json({
        status:201,
        message:"result upload",
        data:result
      })
    } catch (error) {
      return new Error (error.message)
    }
};

export default {
  GET,
  POST
};