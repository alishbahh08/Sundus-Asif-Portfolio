import React, { useState } from 'react';
import { ArrowUpRight, Building2, Globe2, UsersRound, Workflow, ChartNoAxesCombined, HeartHandshake } from 'lucide-react';

const metrics = [
  { value: '08', label: 'Campuses', title: 'HR governance across 7 cities', body: 'At TMUC Pakistan, Sundus advises leadership on workforce planning, HR policy, and employee relations across eight transnational campuses.', units: 8, graphic: 'dots' },
  { value: '30%', label: 'Recruitment savings', title: 'Lower recruitment costs', body: 'At Cube Healthcare Systems, Sundus led recruitment initiatives and automated parts of the hiring workflow for teams in Pakistan and the United States.', units: 30, graphic: 'ring' },
  { value: '25+', label: 'Training programs', title: 'Building leadership capacity', body: 'At Cube Healthcare Systems, Sundus designed and delivered more than 25 programs for leaders and emerging leaders.', units: 25, graphic: 'dots' },
];

export function Impact() {
  const [index, select] = useState(0);
  const metric = metrics[index];
  return <section className="impact-section section" id="impact">
    <div className="container impact-grid">
      <div>
        <span className="visual-kicker">THE IMPACT / 01</span>
        <h2>People work, <em>in numbers.</em></h2>
        <p>Explore three results from Sundus’s work in workforce governance, recruitment, and leadership development.</p>
        <div className="visual-options" aria-label="Impact metric">
          {metrics.map((item, i) => <button key={item.label} type="button" aria-pressed={index === i} onClick={() => select(i)}>{item.label}</button>)}
        </div>
      </div>
      <div className="impact-board" aria-live="polite" aria-atomic="true">
        <div className="impact-content" key={metric.label}>
          <div className="impact-graphic">
            {metric.graphic === 'ring' ? <svg viewBox="0 0 160 160" aria-hidden="true"><circle className="metric-track" cx="80" cy="80" r="66"/><circle className="metric-ring" cx="80" cy="80" r="66" pathLength="100" strokeDasharray={`${metric.units} 100`}/></svg> :
              <div aria-hidden="true" className={`metric-dots dots-${metric.units}`}>{Array.from({length: metric.units}, (_, i) => <span key={i} style={{animationDelay: `${i * 24}ms`}} />)}</div>}
            <strong>{metric.value}</strong>
          </div>
          <div><span className="visual-kicker">{metric.label}</span><h3>{metric.title}</h3><p>{metric.body}</p></div>
        </div>
      </div>
    </div>
  </section>;
}

const stops = [
  { name: 'Islamabad', region: 'PAKISTAN', title: 'TMUC Pakistan', text: 'Leading HR governance, organizational development, and workforce planning across a national campus network.', x: 83, y: 38 },
  { name: 'Abbottabad', region: 'PAKISTAN', title: 'Cube Healthcare Systems', text: 'Led people and business operations, introduced HR automation, and developed leaders for teams in Pakistan and the US.', x: 72, y: 65 },
  { name: 'Michigan', region: 'UNITED STATES', title: 'Fulbright exchange and talent consulting', text: 'Completed the Hubert H. Humphrey Fellowship at Michigan State University and developed an international talent attraction model for MEDC.', x: 18, y: 31 },
];

export function CareerRoute() {
  const [index, select] = useState(0);
  const stop = stops[index];
  return <div className="route-board">
    <span className="visual-kicker">CAREER ROUTE / SELECT A LOCATION</span>
    <div className="route-graphic">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path className="route-shadow" d="M18 31 Q46 -7 83 38 Q94 54 72 65"/><path className="route-line" d="M18 31 Q46 -7 83 38 Q94 54 72 65"/></svg>
      {stops.map((item, i) => <button type="button" key={item.name} aria-pressed={index === i} onClick={() => select(i)} style={{left: `${item.x}%`, top: `${item.y}%`}}><span className="route-dot"/><span>{item.name}</span></button>)}
    </div>
    <div className="route-detail" aria-live="polite" aria-atomic="true"><div key={stop.name}><span className="visual-kicker">{stop.region}</span><h3>{stop.title}</h3><p>{stop.text}</p></div><ArrowUpRight aria-hidden="true" size={24}/></div>
  </div>;
}

export const expertiseIcons = [UsersRound, Building2, Workflow, Globe2, ChartNoAxesCombined, HeartHandshake];
