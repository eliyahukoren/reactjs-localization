import React, { useState } from "react";
import '../i18n/config';
import { useTranslation } from "react-i18next";
import "../assets/css/signin.css";
import logo from "../assets/images/brand/bootstrap-logo.svg";

const LoginScreen = () => {
	const [heLabel, setHeLabel ] = useState('');
	const [heText, setHeText ] = useState('');
	const [heCheckbox, setHeCheckbox ] = useState('');
	const { t } = useTranslation();
	const { i18n } = useTranslation();

	const switchLanguage = (e) => {
		console.log(e.target.value)
		if( e.target.value === 'he'){
			setHeLabel('hebrew-label');
			setHeText('hebrew-input');
			setHeCheckbox('hebrew-checkbox');
		}else{
			setHeLabel('');
			setHeText('');
			setHeCheckbox('');
		}
		i18n.changeLanguage(e.target.value);
	}

    return (
		<div style={{marginTop: "20%"}}>
			<main className="form-signin w-100 m-auto">
				<form>
					<img className="mb-4" src={logo} alt="" width="72" height="57" />
					<h1 className="h3 mb-3 fw-normal">{t('signin_title')}</h1>

						<div className="form-floating">
						<input type="email" className={`form-control ${heText}`} id="floatingInput" placeholder="name@example.com" />
						<label className={`${heLabel}`} htmlFor="floatingInput">{t('signin_email_ph')}</label>
						</div>
						<div className="form-floating">
						<input type="password" className={`form-control ${heText}`} id="floatingPassword" placeholder={t('signin_pass_ph')} />
						<label className={`${heLabel}`} htmlFor="floatingPassword">{t('signin_pass_ph')}</label>
						</div>

						<div className="checkbox mb-3">
							<label>
							<input className={`${heCheckbox}`} type="checkbox" value="remember-me" /> {t('signin_rmb_text')}
							</label>
						</div>
					<button className="w-100 btn btn-lg btn-primary mb-2" type="submit">{t('signin_btn_text')}</button>
					<button className="w-100 btn btn-sm btn-success mb-2" type="button" onClick={switchLanguage} value="en">English</button>
					<button className="w-100 btn btn-sm btn-warning" type="button" onClick={switchLanguage} value="he">עברית</button>
						<p className="mt-5 mb-3 text-muted">&copy; 2012–2022</p>
				</form>
			</main>
        </div>
    );
}

export default LoginScreen;
