import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import AuthServices from '../../services/auth.service'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.jpg';
import { Image, Row, Col } from "react-bootstrap";

const Login = () => {
    const { handleSubmit } = useForm();
    const [ loading, setLoading ] = useState(false);
    const [ user, setUser ] = useState("");
    const [ pass, setPass ] = useState("");
    const [ error, setError ] = useState(null);

   const handleChange = () => {
    setError(null);
    setLoading(true);
    const username = user.toUpperCase();
    const password = pass.toUpperCase();
    AuthServices.login(username, password)
        .then(response => {
            window.location.reload();
        })
        .catch(error => {
            console.log(error.response);
            setLoading(false);
            setError("Wrong Username or password. Please try again.");
          });
   } 

  // handle button click of login form
  const onSubmit = () => {
    console.log("hello!")
  }

    return (
        <div>
            <section className={styles.loginblock}>
                <div className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}>
                    <div className={styles.loginFormContainer}>
                        <fieldset className="border p-3 rounded">
                            <div className={styles.logincardheader}>
                                <Row as ="div" className="justify-content-md-center">
                                    <Col md={6}>
                                        <Image style={styles.img} width="150" src={logo} alt=""/>
                                    </Col>
                                </Row>
                            </div>
                            {error && <div className={styles.loginboxmsg}><small style={{ color: 'red' }}>{error}</small><br /></div>}<br />
                            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                                <div className="card-block">
                                    <div className="row m-t-10">
                                        <div className="col-md-12">
                                            <p className={styles.loginboxmsg}>Sign in to start your session</p>
                                        </div>
                                    </div>
                                    <div className="form-group form-primary">
                                        <input type="text" name="USERNAME" id="USERNAME" className="form-control" required="" autoComplete="off" placeholder="Username" onChange={(e) => setUser(e.target.value)}/>
                                        <span className="form-bar"></span>
                                    </div>
                                    <div className="form-group form-primary">
                                        <input type="password" name="PASSWORD" id="PASSWORD" className="form-control" required="" placeholder="Password" onChange={(e) => setPass(e.target.value)}/>
                                        <span className="form-bar"></span>
                                    </div>
                                    <div className="row m-t-30">
                                        <div className="col-md-12">
                                            <button type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleChange} className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20">Sign in</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </fieldset>
                    </div>
                </div>
            </section>
        </div>
    );
};


export default Login;