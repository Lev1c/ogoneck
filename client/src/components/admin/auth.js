import { useState } from "react";
import { loginForm } from "../../https";

function Auth() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [res, setRes] = useState()

  const sendButton = () => {
    loginForm(name, password).then(data => {
        setRes(data)
        if(data.token) {
            localStorage.setItem('token', data.token)
            window.location.replace('/admin')
        }
    })
  }

  return (
    <div className="d-flex align-items-center py-4 " style={{width: '420px', margin: 'auto', height: '720px'}}>
      <main className="form-signin w-100 m-auto">
          <h1 className="h3 mb-3 fw-normal">Авторизация</h1>
          {res?.response?.data?.error}
          <div className="form-floating mb-2">
            <input 
              type="text" 
              className="form-control" 
              id="floatingInput" 
              placeholder="name"
              setValue={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="floatingInput">Ваше имя</label>
          </div>
          <div className="form-floating mb-2">
            <input 
              type="password" 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password"
              setValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
         <button className="btn btn-primary w-100 py-2" onClick={sendButton}>Вход</button>
      </main>
    </div>
  );
}

export default Auth;
