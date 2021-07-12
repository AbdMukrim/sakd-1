import userService from './user.service';
require('dotenv').config();


const KD_APP = process.env.REACT_APP_ID;

class AuthService {
    
  login(username, password) {
    return userService.getItems('/login/cek_login',{
        USERNAME: username,
        PASSWORD: password,
        KD_APP: KD_APP
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

//   register(username, email, password) {
//     return axios.post(API_URL + "signup", {
//       username,
//       email,
//       password
//     });
//   }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  verify(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      return userService.getItems('/login/verify',{})
      .then(res=>{
          if(res.status === 200){
            return true;
          }
      })
      .catch(error=>{
        if(error.response.status === 401){
          localStorage.removeItem("user");
          return false;
        }
      })
    }
    else{
      return false;
    }
  }

}

export default new AuthService();