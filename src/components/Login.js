// компонент авторизации(регистрации) пользователя

function Login() {
  
  
  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form
        className="auth__form"
        id="form__auth"
      >
        <label className="auth__label">
          <input
            className="auth__input auth__input_type_email"
            name="email"
            type="email"
            required
            id="email"
            placeholder="Email"
          />
          <span
            id="email-error"
            className="popup__error popup__error_visible"
          ></span>
        </label>
        <label className="auth__label">
          <input
            className="auth__input auth__input_type_password"
            name="password"
            type="password"
            required
            id="password"
            placeholder="Пароль"
          />
          <span
            id="password-error"
            className="popup__error popup__error_visible"
          ></span>
        </label>
      </form>
      <button
        className="auth__button"
        type="submit"
        form="form__auth"
      >
        Войти
      </button>
    </div>
  );
  
}

export default Login;
