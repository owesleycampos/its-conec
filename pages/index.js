import React from "react";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
      fontFamily: "sans-serif"
    }}>
      <div style={{
        maxWidth: 400,
        width: "100%",
        backgroundColor: "#111",
        borderRadius: 12,
        padding: 24,
        boxShadow: "0 0 10px #01FF97"
      }}>
        <h1 style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 24
        }}>
          Proteja sua reputação no mundo das IAs.
        </h1>
        <p style={{
          textAlign: "center",
          color: "#ccc",
          marginBottom: 24
        }}>
          Detectia identifica deepfakes e falsificações em poucos cliques.
        </p>
        <a href="/" style={{
          display: "block",
          textAlign: "center",
          padding: "12px 20px",
          backgroundColor: "#01FF97",
          color: "#000",
          fontWeight: "bold",
          borderRadius: 8,
          textDecoration: "none"
        }}>
          Testar Detectia agora
        </a>
      </div>
    </div>
  );
}
