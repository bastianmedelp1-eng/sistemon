/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// --- ICONS (SVG Strings) ---
const icons = {
    home: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>`,
    layout: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>`,
    dollar: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,
    briefcase: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.098a2.25 2.25 0 0 1-2.25 2.25h-13.5A2.25 2.25 0 0 1 2.25 18.25V14.15M6.375 18.25v-1.5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5m-3 0h3m-3 0h-1.5m1.5 0v-1.5m0 1.5v-1.5m9-1.5v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-1.5m-3 0h3m-3 0h-1.5m1.5 0v-1.5m0 1.5v-1.5M5.25 6.75h13.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125H5.25c-.621 0-1.125-.504-1.125-1.125v-4.5c0-.621.504-1.125 1.125-1.125Z" /></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    settings: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.962a8.958 8.958 0 0 1 7.48 1.053c.46.355.823.823 1.053 1.348a8.958 8.958 0 0 1 1.053 7.48c-.045.55-.52.995-1.007 1.11-.542.09-.962-.56-1.11-1.007a6.959 6.959 0 0 0-1.043-4.995 6.959 6.959 0 0 0-4.995-1.043c-.446-.149-.917.21-1.007.658-.09.542.21.962.658 1.007a8.958 8.958 0 0 1 4.995 1.043 8.958 8.958 0 0 1 1.043 4.995c.045.446-.21.917-.658.962-.542.09-1.007-.21-1.11-.658a6.959 6.959 0 0 0-4.995-1.043 6.959 6.959 0 0 0-4.995 1.043c-.149.446-.658.917-1.007.658-.542-.09-.962-.56-1.007-1.11a8.958 8.958 0 0 1-1.053-7.48c.09-.542.56-1.007 1.11-.962a8.958 8.958 0 0 1 7.48 1.053c.46.355.823.823 1.053 1.348A8.958 8.958 0 0 1 12 3.94Z" /></svg>`,
    robot: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m-9 5.25h16.5" /></svg>`,
    expand: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 20.25v-4.5m0 4.5h-4.5m4.5 0L15 15m-6 0-3.75 3.75M9 9l3.75-3.75" /></svg>`,
    paperclip: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.122 2.122l7.81-7.81" /></svg>`,
    send: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" /></svg>`,
    product: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" /></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.53-2.475M15 19.128v-3.375c0-.621-.504-1.125-1.125-1.125H4.125C3.504 14.628 3 15.132 3 15.75v3.375m0 0c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-9.75 0a4.5 4.5 0 0 1-4.5-4.5v-3.375a4.5 4.5 0 0 1 4.5-4.5h9.75a4.5 4.5 0 0 1 4.5 4.5v3.375a4.5 4.5 0 0 1-4.5 4.5m-9.75 0h9.75" /></svg>`,
    agenda: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M12 12.75h.008v.008H12v-.008Z" /></svg>`,
    chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>`,
};

function renderApp() {
    const appRoot = document.getElementById('app');
    if (!appRoot) return;

    appRoot.innerHTML = `
    <aside class="sidebar">
      <nav>
        <div class="nav-item active" title="Dashboard">${icons.home}</div>
        <div class="nav-item" title="Analytics">${icons.chart}</div>
        <div class="nav-item" title="Reports">${icons.layout}</div>
        <div class="nav-item" title="Finance">${icons.dollar}</div>
        <div class="nav-item" title="International">${icons.globe}</div>
        <div class="nav-item" title="Products">${icons.briefcase}</div>
        <div class="nav-item" title="Schedule">${icons.clock}</div>
      </nav>
      <div class="nav-item settings" title="Settings">${icons.settings}</div>
    </aside>

    <div class="main-content">
      <header>
        <div class="top-bar">
          <div class="logo">
            <img src="https://equipers.com/la_equippers_logo.png" alt="Equippers Logo" height="40">
          </div>
          <div class="user-profile">AD</div>
        </div>
        <div class="dashboard-header">
          <h1>Dashboard</h1>
          <p>Gestiona tu negocio de equipamiento 4x4</p>
        </div>
      </header>
      
      <main>
        <h2 class="main-title">Equipers 4x4 - Sistema de Pedidos</h2>
      </main>

      <div class="chat-container">
        <div class="chat-header">
            <div class="chat-title">
                <div class="ai-icon">${icons.robot}</div>
                <div>
                    <h2>Asistente IA</h2>
                    <p>OpenAI GPT</p>
                </div>
            </div>
            <div class="chat-controls">
                <select class="model-selector">
                    <option>OpenAI</option>
                </select>
                <div class="chat-actions">
                    <button title="Expand">${icons.expand}</button>
                </div>
            </div>
        </div>
        <div class="chat-body">
            <div class="message ai-message">
                <div class="message-content">
                    ¡Hola! Soy tu asistente de IA para el sistema Equipers 4x4. Puedo ayudarte con información del sistema, crear usuarios, módulos, permisos y completar formularios automáticamente. ¿En qué puedo ayudarte?
                </div>
                <div class="message-time">15:46</div>
            </div>
             <div class="message user-message">
                <div class="message-content">
                    hola
                </div>
                <div class="message-time">15:47</div>
            </div>
        </div>
        <div class="chat-input-area">
            <div class="chat-input">
              <button title="Attach file">${icons.paperclip}</button>
              <input type="text" placeholder="Pregunta sobre usuarios, crear formularios, completar datos..." />
            </div>
            <button class="send-btn" title="Send message">${icons.send}</button>
        </div>
      </div>
    </div>
  `;
}

renderApp();
