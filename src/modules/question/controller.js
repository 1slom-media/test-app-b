import model from './model.js'


const GET = async (req, res) => {
    try {
        const question = await model.GET(req.params,req.query)
        res.send(question)
    } catch (error) {
        console.error(error);
    }
}

export default {
  GET,
};