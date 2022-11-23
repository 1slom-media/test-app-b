import fs from 'fs';
import path from 'path';

export default (error, req, res) => {
    if(error.status != 500){
        return res.status(error.status).json({
            status: error.status,
            message: error.message
        })
    }

    fs.appendFileSync(path.resolve(process.cwd(), 'log.txt'), 
    `${req.url} ---- ${req.method} ---- ${new Date()} ------ ${error.message}\n`)

    res.send({
        status: error.status,
        message: error.name
    })
    process.exit()
}