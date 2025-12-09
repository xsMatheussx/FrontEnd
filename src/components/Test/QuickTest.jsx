import { useState } from "react";

export default function QuickTest() {
  const [ip, setIp] = useState("");
  const [result, setResult] = useState("");

  function handleTest() {
    if (!ip.trim()) {
      setResult("Digite um IP válido.");
      return;
    }

    const status = Math.random() > 0.5 ? "Online" : "Offline";

    const log = {
      name: "Teste rápido",
      ip,
      status,
      date: new Date().toLocaleString()
    };

    const saved = JSON.parse(localStorage.getItem("logs")) || [];
    saved.push(log);
    localStorage.setItem("logs", JSON.stringify(saved));

    setResult(`IP ${ip} está: ${status}`);
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Teste Rápido</h2>

        <label>Endereço IP:</label>
        <input
          className="input"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          type="text"
          placeholder="Digite o IP"
        />

        <button className="btn" onClick={handleTest}>Testar</button>

        {result && <p style={{ marginTop: "15px" }}>{result}</p>}
      </div>
    </div>
  );
}
