import feed from "@maaz96/kc-mock-feed";

document.querySelector("#app").innerHTML = `
  <main style="font-family: system-ui; padding: 24px; max-width: 720px; margin: 0 auto;">
    <h1>${feed.title}</h1>
    <p><b>Źródło danych:</b> paczka npm <code>@maaz96/kc-mock-feed</code></p>
    <ul>
      ${feed.items.map(i => `<li>${i.text}</li>`).join("")}
    </ul>
    <hr />
    <small>Kontrolowane demo: zmiana wersji paczki zmienia treść strony po deployu.</small>
  </main>
`;
