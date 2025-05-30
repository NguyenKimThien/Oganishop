import React, { useState } from "react";
import "./style.scss";
import users from "../../data/user";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [errors, setErrors] = useState({});
  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };
  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }
    if (!repassword) {
      newErrors.repassword = "Vui lòng nhập lại mật khẩu";
    } else if (password !== repassword) {
      newErrors.repassword = "Mật khẩu không khớp";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let check = users.some((user) => user.Email === email);
      if (!check) {
        localStorage.setItem("userEmail", email);
        users.push({ Email: email, Password: password, listProduct: [] });
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "/login";
      } else {
        setErrors({
          ...errors,
          userErr: "Email đã được sử dụng ! Vui lòng sử dụng tài khoản khác.",
        });
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng ký</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className={errors.email ? "input-error" : ""}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError("email");
            }}
            placeholder="Nhập email của bạn"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            className={errors.password ? "input-error" : ""}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearError("password");
            }}
            placeholder="Nhập mật khẩu"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div className="form-group">
          <label>Nhập lại mật khẩu</label>
          <input
            type="password"
            className={errors.repassword ? "input-error" : ""}
            value={repassword}
            onChange={(e) => {
              setRePassword(e.target.value);
              clearError("repassword");
            }}
            placeholder="Nhập lại mật khẩu"
          />
          {errors.repassword && (
            <span className="error">{errors.repassword}</span>
          )}
        </div>
        {errors.userErr && <span className="error">{errors.userErr}</span>}
        <button type="submit" className="signUp-button">
          Đăng ký
        </button>
        <div className="login-footer">
          <p>Bạn đã có tài khoản? </p>
          <Link to="/login" className="login-link">
            Đăng nhập ngay
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
