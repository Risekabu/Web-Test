(() => {
  const contenedor = document.getElementById("countdown");
  if (!contenedor) return;

  // Inicio: 22 de abril de 2027, 10:00 a. m. (El Salvador, UTC-6)
  const INICIO = new Date("2027-04-22T10:00:00-06:00").getTime();
  const FIN = new Date("2027-04-26T00:00:00-06:00").getTime();

  const pad = n => String(n).padStart(2, "0");
  const ultimos = {};

  function poner(id, valor) {
    const el = document.getElementById(id);
    if (ultimos[id] !== undefined && ultimos[id] !== valor) {
      el.classList.remove("flip");
      void el.offsetWidth;
      el.classList.add("flip");
    }
    ultimos[id] = valor;
    el.textContent = valor;
  }

  function tick() {
    const ahora = Date.now();
    if (ahora >= INICIO && ahora < FIN) {
      contenedor.style.display = "none";
      document.getElementById("en-vivo").style.display = "block";
      return;
    }
    const diff = Math.max(0, INICIO - ahora);
    poner("d", Math.floor(diff / 86400000));
    poner("h", pad(Math.floor((diff % 86400000) / 3600000)));
    poner("m", pad(Math.floor((diff % 3600000) / 60000)));
    poner("s", pad(Math.floor((diff % 60000) / 1000)));
  }

  setInterval(tick, 1000);
  tick();
})();
