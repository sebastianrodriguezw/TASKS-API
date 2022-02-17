const jwt = require('jsonwebtoken')
const { User } = require('../../models');
const db_cont = require('../../config/db.config')
const {promisify} = require('util')

exports.isAuthenticated = async (req, res, next) => {
    console.log(req.cookies.jwt)
    if(req.cookies.jwt) {
        try{
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_CREDENTIALS)
            await User.findOne({ where: { id: decodificada.id } });
            if(!res){return next()}

            req.user = res[0]

            return next()

        } catch(err) { 
            console.log(err)
            return next()
        }
    }else{
        return res.status(404).json({
            status: 'failed',
            error: 'Unauthorized'
          });
    }
}
