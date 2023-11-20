//기업 상세정보 카드 컴포넌트

import React from "react";
import "./style.css";

export const InfoCard = ({
  info: {
    crop_name,
    industry_name,
    establish_date,
    public_date,
    capital,
    address,
    website,
  } = {},
}) => {
  return (
    <div className="infoCard">
      <div className="list-item">
        <div className="content-2">
          <p className="infoListP">
            <span className="span">한글명: </span>
            <span className="text-wrapper-4">
              {crop_name}
              <br />
            </span>
            <span className="span">업종: </span>
            <span className="text-wrapper-4">
              {industry_name}
              <br />
            </span>
            <span className="span">설립일: </span>
            <span className="text-wrapper-4">
              {establish_date}
              <br />
            </span>
            <span className="span">상장일: </span>
            <span className="text-wrapper-4">
              {public_date}
              <br />
            </span>

            <span className="span">자본금: </span>
            <span className="text-wrapper-4">
              {capital}
              <br />
            </span>

            <span className="span">주소: </span>
            <span className="text-wrapper-4">
              {address}
              <br />
            </span>

            <span className="span">홈페이지: </span>
            <span className="text-wrapper-4">
              {website}
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};