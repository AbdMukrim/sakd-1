import JWT from 'jsonwebtoken';
require("dotenv").config();

export const generateJWT = (data) => {
    const payload = {
        id: data[0].id_user,
        username: data[0].nm_user,
      };
      return JWT.sign(payload, process.env.REACT_APP_SECRET_TOKEN, { expiresIn: '3h'});
  }