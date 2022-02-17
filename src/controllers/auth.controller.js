const jwt = require('jsonwebtoken')
const { User } = require('../../models');
const db_cont = require('../../config/db.config')
const {promisify} = require('util')

exports.isAuthenticated = async (req, res, next) => {
    if(req.cookies.jwt) { req.headers['jwt'] = req.cookies.jwt }

    console.log(req.headers)

    if(req.headers['jwt']) {
        try{
            const decodificada = await promisify(jwt.verify)(req.headers['jwt'], process.env.JWT_CREDENTIALS)
            await User.findOne({ where: { id: decodificada.id } });
            if(!res){return next()}

            req.user = res[0]

            return next()

        } catch(err) { 
            console.log(err)
            return res.status(404).json({
                status: 'failed',
                error: 'Unauthorized'
              });
        }
    }else{
        return res.status(404).json({
            status: 'failed',
            error: 'Unauthorized'
          });
    }
}
