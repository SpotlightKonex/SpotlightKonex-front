import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { HorizontalCard } from "../../components/HorizontalCard";
import { Image } from "../../components/Image";
import { ListTitle } from "../../components/ListTitle";
import { Tag } from "../../components/Tag";
import { Toggle } from "../../components/Toggle";
import { Tab } from "../../components/Tab/Tab";
import { Image7 } from "../../icons/Image7";
import { Image8 } from "../../icons/Image8";
import { Nav } from "../../components/Nav";
import { FiLogIn } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import "./style.css";
import "../../styles/styleguide.css";

export const Login = () => {
  // 초기값
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // 유효성 검사
  const [isPassword, setIsPassword] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  // 로그인 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmail && isPassword) {
      try {
        const response = await axios.post(
          `${window.API_BASE_URL}/auth/signin`,
          {
            email,
            password,
          }
        );

        const data = response.data;
        console.log("Response Data:", data);

        if (data && data.accessToken) {
          sessionStorage.setItem("company_user", data.accessToken);

          // 데이터 객체의 전체 구조를 로그에 출력하여 확인
          console.log("Data Structure:", data);

          // corpCode가 data 바로 아래에 있는지 또는 다른 속성 안에 중첩되어 있는지 확인
          sessionStorage.setItem("corpCode", data.corpCode);

          sessionStorage.setItem("corpEmail", data.email);

          console.log("로그인 성공:", data);
          navigate("/");
        } else {
          console.error("로그인 실패");
          Swal.fire({
            icon: "error",
            title: "로그인 실패",
            text: "error",
          });
        }
      } catch (error) {
        if (error.response === 400) {
          Swal.fire({
            icon: "error",
            title: "로그인 실패",
            text: "잘못된 로그인 요청입니다.",
          });
        } else {
          console.error("로그인 실패:", error.response);
          Swal.fire({
            icon: "error",
            title: "로그인 실패",
            text: error.response,
          });
        }
      }
    }
  };

  // nav bar
  const handleLeftIconClick = (link) => {
    navigate("/");
  };

  return (
    <div className="login">
      <div className="div-2">
        <Nav
          title="로그인"
          onLeftIconClick={handleLeftIconClick}
          leftIconLink="/main"
        />
        <div className="home-message">기업 회원이신가요?</div>
        <div className="login-field">
          <div className="login-input">
            <div className="subtitle">Email</div>
            <div className="input-area">
              <input
                className="input-field"
                type="email"
                name="email"
                value={email}
                placeholder="회사 이메일 계정을 입력해주세요."
                onChange={onChangeEmail}
              />
            </div>
            <div className="subtitle">Password</div>
            <div className="input-area">
              <input
                className="input-field"
                type="password"
                name="password"
                value={password}
                placeholder="비밀번호를 입력해주세요."
                onChange={onChangePassword}
              />
            </div>
            <div className="login-btn-div">
              <button
                type="submit"
                className="login-btn"
                onClick={handleSubmit}
                disabled={!(isEmail && isPassword)}
              >
                로그인
              </button>
            </div>
            <div className="rule">
              아직 회원이 아니신가요?{" "}
              <a href="/signup">
                <span>
                  회원가입하기
                  <FiLogIn />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
