import React from "react";

const NameAnimation = () => {
  return (
    <div style={styles.container}>
      <h1 className="animated-name">Abhisek Mallick</h1>
      <style>
        {`
          @keyframes colorChange {
            0% { color: red; }
            25% { color: blue; }
            50% { color: green; }
            75% { color: orange; }
            100% { color: red; }
          }

          .animated-name {
            font-size: 3rem;
            font-weight: bold;
            animation: colorChange 3s infinite;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
};

export default NameAnimation;
