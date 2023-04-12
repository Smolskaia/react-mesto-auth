// компонент регистрации пользователя
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import * as auth from '../utils/auth'

function Register() {

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  })

  const [ errorMassage, setErrorMessage ] = useState('');

  const navigate = useNavigate();

  // обработчик берет значение полей инпутов и вызывает функцию переменной состояния,
  // берет предыдущее состояние и меняет на текущее
  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue
    // здесь обработчик регистрации
    auth.register(email, password)
    .then(data => {
      // console.log(data)
      navigate('/sign-in', {replace: true})
    })
    .catch(err => {
      // console.log(err)
      setErrorMessage(err)
    })
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form
        className="auth__form"
        id="form__auth"
        onSubmit={handleSubmit}
      >
        <label className="auth__label">
          <input
            className="auth__input auth__input_type_email"
            name="email"
            type="email"
            id="email"
            required
            value={formValue.email || ""}
            placeholder="Email"
            onChange={handleChange}
            autoComplete="on"
          />
          <span
            id="email-error"
            className="popup__error popup__error_visible"
          >{errorMassage}</span>
        </label>
        <label className="auth__label">
          <input
            className="auth__input auth__input_type_password"
            name="password"
            type="password"
            required
            id="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={formValue.password || ""}
            autoComplete="on"
          />
          <span
            id="password-error"
            className="popup__error popup__error_visible"
          >{errorMassage}</span>
        </label>
      </form>
      <button
        className="auth__button"
        type="submit"
        form="form__auth"
      >
        Зарегистрироваться
      </button>
      <div className="auth__text">
        <p className="auth__text_title">
          Уже зарегистрированы?
          <Link to="/sign-in" className="auth__text_login-link"> Войти</Link>
        </p>
      </div>
    </div>
  );

}

export default Register