import { useState } from "react";

export default function DeviceForm() {
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");
  const [type, setType] = useState(""); // ← novo estado

  function handleSubmit(e) {
    e.preventDefault();

    if (!type) {
      alert("Por favor, selecione o tipo do dispositivo.");
      return;
    }

    const newDevice = {
      name,
      ip,
      type: type || "Dispositivo de Rede", // fallback caso alguém remova o required
      status: "OK",
      date: new Date().toLocaleString(),
    };

    // Salva na lista de dispositivos
    const savedDevices = JSON.parse(localStorage.getItem("devices")) || [];
    savedDevices.push(newDevice);
    localStorage.setItem("devices", JSON.stringify(savedDevices));

    // Salva também no log (igual já estava fazendo)
    const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
    savedLogs.push({ ...newDevice, name: name || "Dispositivo sem nome" });
    localStorage.setItem("logs", JSON.stringify(savedLogs));

    // Limpa o formulário
    setName("");
    setIp("");
    setType("");
    
    alert("Dispositivo cadastrado com sucesso!");
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
          style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #aaa" }}
        />

        <label>Endereço IP:</label>
        <input
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          required
          style={{ display: "block", marginBottom: "10px", padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #aaa" }}
        />

        {/* ← Campo novo Tipo do dispositivo */}
        <label>Tipo do dispositivo:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          style={{ display: "block", marginBottom: "15px", padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #aaa" }}
        >
          <option value="">Selecione o tipo...</option>
          <option value="Router">Router</option>
          <option value="Switch">Switch</option>
          <option value="Access Point">Access Point</option>
          <option value="Firewall">Firewall</option>
          <option value="Servidor">Servidor</option>
          <option value="Impressora">Impressora</option>
          <option value="Câmera IP">Câmera IP</option>
          <option value="Outro">Outro</option>
        </select>

        <button 
          type="submit" 
          style={{ 
            padding: "12px 30px", 
            background: "#0A3D62", 
            color: "white", 
            border: "none", 
            borderRadius: "6px", 
            fontSize: "16px", 
            cursor: "pointer" 
          }}
        >
          Salvar Dispositivo
        </button>
      </form>
    </div>
  );
}