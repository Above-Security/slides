import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import CalloutBox from '../components/CalloutBox';
import MotionTimeline from '../components/MotionTimeline';
import PackageTiles from '../components/PackageTiles';
import ICPProfile from '../components/ICPProfile';

const phases = [
	{
		stage: 'Entry Motion (0-6 months)',
		channel: 'Founder-led direct sales',
		champion: 'Security-forward mid-market CISOs',
		model: 'Design partnerships with 5-10 orgs',
		risk: 'Founder bandwidth limitations',
		icon: 'fas fa-handshake',
	},
	{
		stage: 'Scale (6-12 months)',
		channel: 'Founder + 1 AE + 1 SDR',
		champion: 'Mid-market SecOps/CISO',
		model: '3-week POV → pilot → land',
		risk: 'Need to prove value even without incidents',
		icon: 'fas fa-chart-line',
	},
	{
		stage: 'Expansion (Year 2+)',
		channel: 'Full sales team + channels',
		champion: 'Enterprise CISOs',
		model: 'Platform expansion & integrations',
		risk: 'Competition from established players',
		icon: 'fas fa-rocket',
	},
];

const packages = [
	{
		name: 'Browser Visibility',
		description:
			'Real-time session monitoring and behavioral detection (Chrome Extension only).',
		icon: 'fas fa-eye',
	},
	{
		name: 'Platform Integration',
		description:
			'Adds SIEM/XDR integration, webhook alerts, and enrichment dashboards.',
		icon: 'fas fa-link',
	},
	{
		name: 'Advanced Detection',
		description:
			'Year-2 capabilities: risk scoring, remediation actions, and coaching UX.',
		icon: 'fas fa-brain',
	},
];

const icpItems = [
	{
		label: 'Size',
		text: '100-3,000 employees (mid-market sweet spot)',
		icon: 'fas fa-users',
	},
	{
		label: 'Profile',
		text: 'Chrome-managed fleet, SaaS-heavy, browser-first work',
		icon: 'fas fa-chrome',
	},
	{
		label: 'Pain triggers',
		text: 'Low visibility into user behavior post-login, OAuth blind spots',
		icon: 'fas fa-eye-slash',
	},
	{
		label: 'Tech stack fit',
		text: 'Okta/MDM in place, >20 apps, identity-forward security posture',
		icon: 'fas fa-shield-alt',
	},
];

const GoToMarket = () => (
	<SectionContainer
		id="go-to-market"
		title="1 | YEAR‑1 GO‑TO‑MARKET (0‑12 Months)"
		variant="executive"
		priority="high"
	>
		<div>
			{/* Year-1 Go-to-Market Strategy Table from NARRATIVE.md */}
			<div style={{ marginBottom: 'var(--spacing-xl)' }}>
				<table
					style={{
						width: '100%',
						borderCollapse: 'collapse',
						marginBottom: 'var(--spacing-lg)',
						border: '1px solid rgba(0, 0, 0, 0.1)',
						borderRadius: 'var(--border-radius-md)',
						overflow: 'hidden',
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
					}}
				>
					<thead>
						<tr
							style={{
								backgroundColor: 'rgba(0, 135, 43, 0.05)',
								borderBottom: '2px solid rgba(0, 135, 43, 0.1)',
							}}
						>
							<th
								style={{
									padding: 'var(--spacing-md)',
									textAlign: 'left',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									fontSize: 'var(--font-size-sm)',
									textTransform: 'uppercase',
									letterSpacing: '0.5px',
								}}
							>
								<i className="fas fa-cog" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								Initiative
							</th>
							<th
								style={{
									padding: 'var(--spacing-md)',
									textAlign: 'left',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									fontSize: 'var(--font-size-sm)',
									textTransform: 'uppercase',
									letterSpacing: '0.5px',
								}}
							>
								<i className="fas fa-info-circle" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								Detail
							</th>
						</tr>
					</thead>
					<tbody>
						<tr style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
							<td
								style={{
									padding: 'var(--spacing-md)',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									verticalAlign: 'top',
								}}
							>
								<i className="fas fa-rocket" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								Entry Motion
							</td>
							<td
								style={{
									padding: 'var(--spacing-md)',
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									verticalAlign: 'top',
								}}
							>
								Founder-led direct sales, leveraging design partnerships with
								5–10 security-forward mid-market CISOs
							</td>
						</tr>
						<tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
							<td
								style={{
									padding: 'var(--spacing-md)',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									verticalAlign: 'top',
								}}
							>
								<i className="fas fa-users" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								Roles
							</td>
							<td
								style={{
									padding: 'var(--spacing-md)',
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									verticalAlign: 'top',
								}}
							>
								Hire 1 AE and 1 SDR for scale post-month 6
							</td>
						</tr>
						<tr style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
							<td
								style={{
									padding: 'var(--spacing-md)',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									verticalAlign: 'top',
								}}
							>
								<i className="fas fa-bullseye" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								ICP
							</td>
							<td
								style={{
									padding: 'var(--spacing-md)',
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									verticalAlign: 'top',
								}}
							>
								Mid-market orgs (100–3,000 employees), Chrome-managed fleet,
								SaaS-heavy, low visibility into user behavior post-login
							</td>
						</tr>
						<tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
							<td
								style={{
									padding: 'var(--spacing-md)',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									verticalAlign: 'top',
								}}
							>
								<i className="fas fa-route" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								Channels
							</td>
							<td
								style={{
									padding: 'var(--spacing-md)',
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									verticalAlign: 'top',
								}}
							>
								Founder outbound, mutual network intros, CISO Slack communities
							</td>
						</tr>
						<tr style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
							<td
								style={{
									padding: 'var(--spacing-md)',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									verticalAlign: 'top',
								}}
							>
								<i className="fas fa-comment-dots" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								Messaging
							</td>
							<td
								style={{
									padding: 'var(--spacing-md)',
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									verticalAlign: 'top',
								}}
							>
								Browser-based visibility post-authentication; catch insider
								misuse, SaaS misuse, OAuth grants, role drift, offboarding risk
							</td>
						</tr>
						<tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
							<td
								style={{
									padding: 'var(--spacing-md)',
									fontWeight: '600',
									color: 'var(--color-text-primary)',
									verticalAlign: 'top',
								}}
							>
								<i className="fas fa-arrow-right" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
								Conversion Flow
							</td>
							<td
								style={{
									padding: 'var(--spacing-md)',
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									verticalAlign: 'top',
								}}
							>
								Design partner → 3-week POV → pilot → land
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3 style={{
				fontSize: 'var(--font-size-2xl)',
				fontWeight: '700',
				color: 'var(--color-text-primary)',
				marginBottom: 'var(--spacing-lg)'
			}}>
				<i className="fas fa-handshake" style={{ marginRight: '12px', color: 'var(--color-primary)' }}></i>
				1.1 How We Sell (Motion)
			</h3>
			
			{/* Clean Timeline Cards */}
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 'var(--spacing-xl)',
				marginBottom: 'var(--spacing-xl)'
			}}>
				{phases.map((phase, index) => (
					<div key={index} style={{
						background: 'var(--color-background-primary)',
						border: '1px solid rgba(0, 135, 43, 0.15)',
						borderRadius: 'var(--border-radius-md)',
						padding: 'var(--spacing-lg)',
						position: 'relative',
						borderLeft: '4px solid var(--color-primary)'

					}}>
						{/* Phase Header */}
						<div style={{
							display: 'flex',
							alignItems: 'center',
							marginBottom: 'var(--spacing-md)'
						}}>
							<div style={{
								width: '44px',
								height: '44px',
								borderRadius: '50%',
								background: 'linear-gradient(135deg, var(--color-primary), #0d7d2f)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								marginRight: 'var(--spacing-md)',
								color: 'white',
								boxShadow: '0 4px 8px rgba(0, 135, 43, 0.3)'
							}}>
								<i className={phase.icon} style={{ fontSize: '20px' }}></i>
							</div>
							<h4 style={{
								margin: 0,
								fontSize: 'calc(var(--font-size-xl) * 1.1)',
								fontWeight: '700',
								color: 'var(--color-text-primary)',
								letterSpacing: '-0.5px'
							}}>
								{phase.stage}
							</h4>
						</div>
						
						{/* Phase Details Grid */}
						<div style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
							gap: 'var(--spacing-md)',
							marginBottom: 'var(--spacing-md)'
						}}>
							<div>
								<div style={{ 
									fontSize: 'calc(var(--font-size-xs) * 1.1)', 
									fontWeight: '700', 
									color: 'var(--color-primary)',
									textTransform: 'uppercase',
									marginBottom: 'var(--spacing-xs)',
									letterSpacing: '0.5px'
								}}>
									<i className="fas fa-route" style={{ marginRight: '6px' }}></i>
									Channel
								</div>
								<div style={{ 
									fontSize: 'calc(var(--font-size-sm) * 1.1)', 
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									fontWeight: '500'
								}}>
									{phase.channel}
								</div>
							</div>
							
							<div>
								<div style={{ 
									fontSize: 'calc(var(--font-size-xs) * 1.1)', 
									fontWeight: '700', 
									color: 'var(--color-primary)',
									textTransform: 'uppercase',
									marginBottom: 'var(--spacing-xs)',
									letterSpacing: '0.5px'
								}}>
									<i className="fas fa-user-tie" style={{ marginRight: '6px' }}></i>
									Champion
								</div>
								<div style={{ 
									fontSize: 'calc(var(--font-size-sm) * 1.1)', 
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									fontWeight: '500'
								}}>
									{phase.champion}
								</div>
							</div>
							
							<div>
								<div style={{ 
									fontSize: 'calc(var(--font-size-xs) * 1.1)', 
									fontWeight: '700', 
									color: 'var(--color-primary)',
									textTransform: 'uppercase',
									marginBottom: 'var(--spacing-xs)',
									letterSpacing: '0.5px'
								}}>
									<i className="fas fa-cogs" style={{ marginRight: '6px' }}></i>
									Model
								</div>
								<div style={{ 
									fontSize: 'calc(var(--font-size-sm) * 1.1)', 
									color: 'var(--color-text-secondary)',
									lineHeight: '1.5',
									fontWeight: '500'
								}}>
									{phase.model}
								</div>
							</div>
						</div>
						
						{/* Risk Warning */}
						<div style={{
							display: 'flex',
							alignItems: 'center',
							padding: 'var(--spacing-sm)',
							backgroundColor: 'rgba(255, 193, 7, 0.08)',
							borderRadius: 'var(--border-radius-sm)',
							border: '1px solid rgba(255, 193, 7, 0.2)'
						}}>
							<i className="fas fa-exclamation-triangle" style={{ 
								marginRight: '8px', 
								color: '#f39c12',
								fontSize: 'var(--font-size-sm)'
							}}></i>
							<div>
								<span style={{ 
									fontSize: 'calc(var(--font-size-xs) * 1.1)', 
									fontWeight: '700', 
									color: '#856404',
									textTransform: 'uppercase',
									letterSpacing: '0.5px'
								}}>
									Risk: 
								</span>
								<span style={{ 
									fontSize: 'calc(var(--font-size-sm) * 1.1)', 
									color: '#856404',
									marginLeft: '4px',
									fontWeight: '500',
									lineHeight: '1.4'
								}}>
									{phase.risk}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			
			<CalloutBox variant="hook">
				<em>
					<i className="fas fa-quote-left" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
					"Real-time visibility into what every user actually does in SaaS and web
					apps — to detect intent, catch insider threats, and shut down account
					misuse before it escalates."
					<i className="fas fa-quote-right" style={{ marginLeft: '8px', color: 'var(--color-primary)' }}></i>
				</em>
			</CalloutBox>

			<h3>1.2 What We Sell (Packages)</h3>
			<PackageTiles packages={packages} />
			<CalloutBox variant="critical">
				<strong>Critical stance:</strong> Don’t attempt full insider detections in
				Year‑1 – “visibility first” avoids promise / delivery gap that kills early
				deals.
			</CalloutBox>

			<h3>1.3 Ideal ICP (Beach‑head)</h3>
			<ICPProfile items={icpItems} />
		</div>
	</SectionContainer>
);

export default GoToMarket;
