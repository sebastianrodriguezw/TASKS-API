const checkKey = require('check-object-key');

const is_valid = async(req) => {
    let condition = true;
    checkKey({
        obj:	req.body,
        objectKey:  'username',
        objectKey:	'password'
    }, await function (err) {
        if (err) return false; 
    });
    
    return condition;
}

function validate_user_keys(){

}

exports.is_valid = is_valid;