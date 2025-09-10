import React from 'react';

const CloudAccountsChart = () => (
  <div style={chartContainerStyle}>
    <div style={accountsChartRing}>
      <div style={accountsChartInnerRing}>
        <div style={accountsChartText}>2</div>
      </div>
    </div>
    <div style={accountsChartLegend}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#36A2EB', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Connected (2)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FF6384', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Not Connected (2)</span>
      </div>
    </div>
  </div>
);

const RiskAssessmentChart = () => (
  <div style={chartContainerStyle}>
    <div style={riskChartRing}>
      <div style={riskChartInnerRing}>
        <div style={riskChartText}>9659</div>
      </div>
    </div>
    <div style={riskChartLegend}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FF6384', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Failed (1089)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FFCE56', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Warning (68)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#E7E9ED', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Not available (38)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#4BC0C0', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Passed (7253)</span>
      </div>
    </div>
  </div>
);

const RegistryScanChart = () => (
  <div style={chartContainerStyle}>
    <div style={registryScanChartRing}>
      <div style={registryScanChartInnerRing}>
        <div style={registryScanChartText}>1470</div>
      </div>
    </div>
    <div style={registryScanLegend}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FF6384', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Critical (1)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FFCE56', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>High (2)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FF9900', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Medium (3)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#36A2EB', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Low (1464)</span>
      </div>
    </div>
  </div>
);

const ImageRiskAssessmentChart = () => (
  <div style={chartContainerStyle}>
    <div style={imageRiskChartRing}>
      <div style={imageRiskChartInnerRing}>
        <div style={imageRiskChartText}>1470</div>
      </div>
    </div>
    <div style={imageRiskChartLegend}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FF6384', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Critical (4)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FFCE56', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>High (100)</span>
      </div>
    </div>
  </div>
);

const ImageSecurityIssuesChart = () => (
  <div style={chartContainerStyle}>
    <div style={imageSecurityChartRing}>
      <div style={imageSecurityChartInnerRing}>
        <div style={imageSecurityChartText}>2</div>
      </div>
    </div>
    <div style={imageSecurityChartLegend}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FF6384', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>Critical (1)</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ height: '12px', width: '12px', backgroundColor: '#FFCE56', borderRadius: '50%', marginRight: '8px' }}></span>
        <span style={{ fontSize: '14px' }}>High (2)</span>
      </div>
    </div>
  </div>
);

const chartContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  height: '100%',
};

const accountsChartRing = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `conic-gradient(#36A2EB 50%, #FF6384 0)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const accountsChartInnerRing = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const accountsChartText = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#333',
};

const accountsChartLegend = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const riskChartRing = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `conic-gradient(#FF6384 11.2%, #FFCE56 11.2% 11.8%, #E7E9ED 11.8% 12.2%, #4BC0C0 12.2% 87.8%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const riskChartInnerRing = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const riskChartText = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const riskChartLegend = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const registryScanChartRing = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `conic-gradient(#FF6384 0.1%, #FFCE56 0.1% 0.2%, #FF9900 0.2% 0.4%, #36A2EB 0.4% 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const registryScanChartInnerRing = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const registryScanChartText = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const registryScanLegend = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const imageRiskChartRing = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `conic-gradient(#FF6384 0.2%, #FFCE56 0.2% 6.8%, #E7E9ED 6.8% 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageRiskChartInnerRing = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageRiskChartText = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const imageRiskChartLegend = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

const imageSecurityChartRing = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  background: `conic-gradient(#FF6384 33.3%, #FFCE56 33.3% 100%)`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageSecurityChartInnerRing = {
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageSecurityChartText = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
};

const imageSecurityChartLegend = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
};

export { CloudAccountsChart, RiskAssessmentChart, RegistryScanChart, ImageRiskAssessmentChart, ImageSecurityIssuesChart };