/* ============================================
   QUEPAR 2026 — App iOS Mockup JS
   ============================================ */

'use strict';

function initAppMockup() {
  renderRiskList();
}

function renderRiskList() {
  const el = document.getElementById('risk-list-app');
  if (!el) return;

  const forecast = generateForecast(17);
  const tomorrow = generateForecast(17); // second day starts after 24h

  const riskColorMap = {
    1: 'var(--c-risk-1)', 2: 'var(--c-risk-2)',
    3: 'var(--c-risk-3)', 4: 'var(--c-risk-4)', 5: 'var(--c-risk-5)'
  };
  const riskShort = {
    1: 'RISC MOLT ALT', 2: 'RISC ALT',
    3: 'TRANSITORI', 4: 'RISC BAIX', 5: 'RISC MOLT BAIX'
  };

  const todayRows = forecast.slice(0, 8).map(f => `
    <div class="risk-row">
      <div class="risk-row-time">${f.hour}</div>
      <div class="risk-row-label" style="background:${riskColorMap[f.level]}">${riskShort[f.level]}</div>
    </div>
  `).join('');

  const tomorrowRows = tomorrow.slice(0, 6).map(f => `
    <div class="risk-row">
      <div class="risk-row-time">${f.hour}</div>
      <div class="risk-row-label" style="background:${riskColorMap[f.level]}">${riskShort[f.level]}</div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="risk-day-sep">Avui · 05/05/2026</div>
    ${todayRows}
    <div class="risk-day-sep">Demà · 06/05/2026</div>
    ${tomorrowRows}
  `;
}

document.addEventListener('DOMContentLoaded', initAppMockup);
