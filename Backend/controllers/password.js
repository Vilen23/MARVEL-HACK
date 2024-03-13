const bcrypt = require('bcrypt');

const hashpassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

module.exports = { hashpassword }