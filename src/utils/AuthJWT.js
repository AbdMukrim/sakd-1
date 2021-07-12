import JWT from 'jsonwebtoken';
import { getToken, removeUserLocal } from './Common';
require("dotenv").config();

export const authJWT = () => {
    const hello = getToken();
    const verify = JWT.verify(hello, process.env.REACT_APP_SECRET_TOKEN, function(err, decoded) {
        if (err) {
          removeUserLocal();
          return false;
        }
        else{
          return true;
        }
      });

    return verify;
  }