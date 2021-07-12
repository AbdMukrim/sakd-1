import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './scss/style.scss';
import authService from './services/auth.service';
// import './loader.css'
import Api from './utils/Api';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

const loading = (
  <div></div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'));
// const Register = React.lazy(() => import('./views/pages/register/Register'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Login1 = React.lazy(() => import('./views/Login/login1'));
export const Stuff = React.createContext();

class App extends Component {

  constructor(props){
    super(props);
    this.state=
    {
      pemda: [],
      tahun: [],
      periode: [],
      user: []
    };
  }

  componentDidMount(){
    Api.post('/md_pemda/tampil')
    .then(res => {
      this.setState({pemda: res.data.tampil});
    })
    Api.post('/md_tahun/tampil')
    .then(res => {
      this.setState({tahun: res.data.tampil});
    })
    Api.post('/md_periode/tampil')
    .then(res => {
      this.setState({periode: res.data.tampil});
    })
    this.setState({user: authService.getCurrentUser()})
  }

  render() {
    return (
      <Stuff.Provider value={this.state}>
          <BrowserRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                <Route exact path="/login1" name="Login" render={props => <Login1 {...props}/>} />
                <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
                <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
                <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
                <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
                <PublicRoute exact path="/login" component={Login1} />
                <PrivateRoute path="/" component={TheLayout}/>
              </Switch>
            </React.Suspense>
        </BrowserRouter>
      </Stuff.Provider>
      
    );
  }
}

export default App;
