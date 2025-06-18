import React, { useState } from "react";
import "./style.scss";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate  = useNavigate();
  const id = localStorage.getItem('idToDetail');
  const { login } = useCart();

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    const errors = {};
    e.preventDefault();
    if (validate()) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.Email === email && u.Password === password
      );
      if (user != null) {
        login();  
        toast.success("Log in successfully !", {
          autoClose: 2000,
          onClose: () => {
            localStorage.setItem("userEmail", email);
            if(id){
              navigate(`/detail/${id}`);
            }else{
              navigate('/')
            }
          }
        });
      } else {
        errors.userErr =
          "Thông tin đăng nhập không chính xác ! Vui lòng kiểm tra lại.";
      }
    }
    setErrors(errors);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className={errors.email ? "input-error" : ""}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        {errors.userErr && <span className="error">{errors.userErr}</span>}
        <button type="submit" className="login-button">
          Đăng nhập
        </button>
        <div className="login-footer">
          <p>Bạn chưa có tài khoản? </p>
          <Link to="/signup" className="signup-link">
            Đăng ký ngay
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
