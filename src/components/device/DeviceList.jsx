import { useEffect, useState } from "react";

export default function DeviceList() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("devices")) || [];
    setDevices(saved);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Listagem de Dispositivos</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>IP</th>
            </tr>
          </thead>

          <tbody>
            {devices.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
