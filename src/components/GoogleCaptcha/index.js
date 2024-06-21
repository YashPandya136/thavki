import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import InputWrapper from "../InputWrapper";
import { Input } from "../ui/input";

const GoogleCaptcha = ({ form, captchaFlag, setCaptchaFlag }) => {
  const [token, setToken] = useState(null);
  const [flag, setFlag] = useState(captchaFlag);
  const MINUTE_MS = 60000;
  useEffect(() => {
    if (captchaFlag) {
      setFlag(true);
    }
  }, [captchaFlag]);

  useEffect(() => {
    console.log(form.getValues("recaptcha")); // Check if form is received correctly
  }, [form]);

  useEffect(() => {
    if (token) {
      const recaptchaValue = form.getValues("recaptcha"); // Access form values
      if (recaptchaValue !== token) {
        form.setValue("recaptcha", token); // Set form value
      }
    }
  }, [token, form]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag(true);
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <GoogleReCaptchaProvider reCaptchaKey="6Lds0ZIpAAAAAOfZqN5OziF3_Nj4_TQp9Gbd144N">
        {flag && (
          <GoogleReCaptcha
            onVerify={async (token) => {
              if (flag && token) {
                setFlag(false);
                setCaptchaFlag(false);
                setToken(token);
              }
            }}
          />
        )}
      </GoogleReCaptchaProvider>
      <InputWrapper
        form={form}
        className={`rounded-lg border border-solid`}
        name="recaptcha"
        placeholder="recaptcha"
        type="hidden"
        renderComponent={(props) => <Input {...props} type='hidden' />}
      />
    </div>
  );
};

GoogleCaptcha.propTypes = {
  captchaFlag: PropTypes.bool,
  formContext: PropTypes.shape({
    form: PropTypes.shape({
      change: PropTypes.func,
    }),
  }).isRequired,
  setCaptchaFlag: PropTypes.func,
};

GoogleCaptcha.defaultProps = {
  captchaFlag: false,
  setCaptchaFlag: () => { },
};

export default GoogleCaptcha;
