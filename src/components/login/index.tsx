import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import $api from "../../api";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/userState";

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUser = useSetRecoilState(userState);

  const changeEmail = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setEmail(target.value);
  const changePassword = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setPassword(target.value);

  const login = async () => {
    const { user } = await $api.user.login({ email, password });
    setUser(user);
  };

  return (
    <div className="auth-page" data-testid="login-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={changeEmail}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={changePassword}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  onClick={login}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
