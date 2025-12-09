import { useState } from "react";

export default function DeviceForm() {
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newDevice = {
      name,
      ip,
      status: "OK",
      date: new Date().toLocaleString(),
    };

    const savedDevices = JSON.parse(localStorage.getItem("devices")) || [];
    savedDevices.push(newDevice);
    localStorage.setItem("devices", JSON.stringify(savedDevices));

    const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
    savedLogs.push(newDevice);
    localStorage.setItem("logs", JSON.stringify(savedLogs));

    setName("");
    setIp("");
    alert("Dispositivo cadastrado e log atualizado!");
  }

  return (
    <div style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Cadastrar Dispositivo</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do dispositivo:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", padding: "5px", width: "100%" }}
        />
        <label>Endereço IP:</label>
        <input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", padding: "5px", width: "100%" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Salvar</button>
      </form>
    </div>
  );
}
