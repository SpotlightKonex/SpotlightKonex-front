import { useState } from "react";
import React from "react";
import "./style.css";

export const Tab = ({ section1Text, section2Text, section3Text, section1_subtitle, section2_subtitle, section3_subtitle, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState("section1");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onTabChange(tab); // 선택한 탭으로 콜백 함수 호출
  };

  return (
    <div className="MainTab">
      <div className="tab-switch">
        <button
          onClick={() => handleTabClick("section1")}
          className={selectedTab === "section1" ? "active" : "tab-btn"}
        >
          {section1Text} {/* section1Text를 표시 */}
        </button>
        <button
          onClick={() => handleTabClick("section2")}
          className={selectedTab === "section2" ? "active" : "tab-btn"}
        >
          {section2Text} {/* section2Text를 표시 */}
        </button>
        <button
          onClick={() => handleTabClick("section3")}
          className={selectedTab === "section3" ? "active" : "tab-btn"}
        >
          {section3Text} {/* section2Text를 표시 */}
        </button>
      </div>
      <div className="tab-content">
        {selectedTab === "section1" && (
          <div className="tab-subtitle">
            {/* Section 1 content */}
            {section1_subtitle && <p>{section1_subtitle}</p>}
          </div>
        )}
        {selectedTab === "section2" && (
          <div className="tab-subtitle">
            {/* Section 2 content */}
            {section2_subtitle && <p>{section2_subtitle}</p>}
          </div>
        )}
        {selectedTab === "section3" && (
          <div className="tab-subtitle">
            {/* Section 3 content */}
            {section3_subtitle && <p>{section3_subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
