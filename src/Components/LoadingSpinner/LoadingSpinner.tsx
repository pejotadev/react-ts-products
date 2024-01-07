import React from 'react';
import './Animation.css'

const loading: React.CSSProperties = {
  width: "100%",
  height: "100%",
  position: "fixed",
  background: "rgba(0,0,0,0.5)",
  zIndex: 9999,
  top: 0,
  left: 0,
};

const spinner: React.CSSProperties = {
  width: "40px",
  height: "40px",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginLeft: "-20px",
  marginTop: "-20px",
  borderRadius: "50%",
  border: "3px solid transparent",
  borderTopColor: "var(--background-color)",
  WebkitAnimation: "spin 2s linear infinite",
  animation: "spin 2s linear infinite",
};

export const LoadingSpinner = () => {
  return (
    <div style={loading}>
      <div style={spinner}>
      </div>
    </div>
  )
}
