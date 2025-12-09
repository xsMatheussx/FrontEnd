import { useState } from "react";

export default function DeviceForm() {
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("devices")) || [];
    const newDevice = { id: Date.now(), name, ip };

    localStorage.setItem("devices", JSON.stringify([...saved, newDevice]));

    setName("");
    setIp("");
    alert("Dispositivo cadastrado com sucesso!");
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Cadastrar Dispositivo</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome do dispositivo</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>Endereço IP</label>
          <input value={ip} onChange={(e) => setIp(e.target.value)} />

          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
}
