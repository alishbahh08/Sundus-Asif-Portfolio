import React, { useState } from 'react';
import { ArrowUpRight, Award, GraduationCap, Sparkles } from 'lucide-react';

const milestones = [
  { year: '2014', label: 'Public administration', category: 'Degree', title: 'Bachelor of Public Administration', organization: 'Fatima Jinnah Women University', location: 'Rawalpindi, Pakistan', icon: GraduationCap },
  { year: '2022', label: 'HR analytics', category: 'Certification', title: 'Human Resources Analytics', organization: 'ELVTR / HRCI', location: 'United States', icon: Award },
  { year: '2023', label: 'Fulbright exchange', category: 'International fellowship', title: 'Hubert H. Humphrey Fellowship', organization: 'Michigan State University · A Fulbright Exchange', location: 'East Lansing, Michigan, USA', icon: GraduationCap },
  { year: '2023', label: 'Equitable leadership', category: 'Professional learning', title: 'Leading Effectively and Equitably', organization: 'Wayne State University', location: 'Detroit, Michigan, USA', icon: Award },
];

const toolkit = [
  ['IBM SPSS', 'Statistical analysis', 'Explore survey responses, identify patterns, and test relationships in workforce data.'],
  ['Tableau', 'Data visualization', 'Turn workforce metrics into dashboards that make trends easier to spot.'],
  ['Oracle HRMS', 'Workforce administration', 'Manage employee records and support core HR processes.'],
  ['Microsoft 365', 'Collaboration and reporting', 'Coordinate documents, spreadsheets, and team communication.'],
  ['Canva', 'Visual communication', 'Create clear materials for presentations, training, and internal communications.'],
  ['HRIS / ERP', 'HR systems and workflows', 'Connect employee records with processes such as attendance, payroll, and performance management.'],
  ['Smartsheet', 'Project coordination', 'Track project tasks, ownership, and progress across teams.'],
];

export default function Foundation() {
  const [milestoneIndex, setMilestone] = useState(2);
  const [toolIndex, setTool] = useState(0);
  const milestone = milestones[milestoneIndex];
  const Icon = milestone.icon;
  const [toolName, toolTitle, toolDescription] = toolkit[toolIndex];

  return <section className="section credentials-section foundation" id="credentials">
    <div className="container">
      <div className="section-head" data-reveal>
        <div><div className="kicker"><span className="kicker-line"/>05 / THE FOUNDATION</div>
          <h2>Always learning.<br/><em>Always evolving.</em></h2>
        </div>
        <p>Explore Sundus’s education, professional learning, and digital toolkit.</p>
      </div>
      <div className="foundation-grid">
        <div className="foundation-journey">
          <h3 className="foundation-caption"><GraduationCap size={18}/> Learning timeline</h3>
          <div className="foundation-steps" role="group" aria-label="Learning milestones">
            {milestones.map((item, index) => <button type="button" key={item.label} aria-pressed={index === milestoneIndex} aria-controls="milestone-detail" onClick={() => setMilestone(index)}>
              <span>{item.year}</span><span>{item.label}</span>
            </button>)}
          </div>
          <div className="foundation-feature" id="milestone-detail" aria-live="polite" aria-atomic="true">
            <div className="foundation-feature-inner" key={milestone.label}>
              <span className="foundation-year" aria-hidden="true">{milestone.year}</span>
              <div className="foundation-feature-meta"><span><Icon size={17}/>{milestone.category}</span><ArrowUpRight size={21} aria-hidden="true"/></div>
              <h3>{milestone.title}</h3><p>{milestone.organization}</p><small>{milestone.location} · {milestone.year}</small>
            </div>
          </div>
        </div>
        <div className="foundation-toolkit">
          <h3 className="foundation-caption"><Sparkles size={18}/> Digital toolkit</h3>
          <div className="foundation-tools" role="group" aria-label="Digital tools">
            {toolkit.map(([name], index) => <button type="button" key={name} aria-pressed={index === toolIndex} aria-controls="tool-detail" onClick={() => setTool(index)}>{name}</button>)}
          </div>
          <div className="foundation-tool-detail" id="tool-detail" aria-live="polite" aria-atomic="true">
            <div key={toolName}><span>{toolName}</span><h4>{toolTitle}</h4><p>{toolDescription}</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
