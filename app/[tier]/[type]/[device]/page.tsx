import React from 'react';
import Link from 'next/link';
import { Typography, Card, CardContent, Button } from '@mui/material';

const deviceCatalog: Record<string, Record<string, Record<string, any>>> = {
  temporary: {
    impella: {
      name: 'Impella',
      category: 'Temporary MCS Device',
      overview: 'Percutaneous microaxial pump for short-term circulatory support in cardiogenic shock.',
      indications: ['Acute cardiogenic shock', 'High-risk PCI support', 'Bridge to recovery'],
      keyPoints: ['Flows 2.5-5 L/min', 'Femoral or axillary insertion', 'Full support < 14 days'],
    },
    tandemheart: {
      name: 'TandemHeart',
      category: 'Temporary MCS Device',
      overview: 'Extracorporeal left atrial to arterial bypass system for short-term support.',
      indications: ['Severe LV failure', 'Post-cardiotomy shock', 'Bridge to decision'],
      keyPoints: ['Flow up to 5.0 L/min', 'Transseptal cannulation', 'Anticoagulation-intensive'],
    },
    'va-ecmo': {
      name: 'VA-ECMO',
      category: 'Temporary MCS Device',
      overview: 'Venoarterial extracorporeal membrane oxygenation providing cardiopulmonary support.',
      indications: ['Refractory cardiogenic shock', 'Cardiac arrest', 'Severe pulmonary failure with hemodynamic collapse'],
      keyPoints: ['Full heart-lung bypass', 'High afterload risk', 'Bridge to recovery/decision'],
    },
  },
  durable: {
    'heartmate-iii': {
      name: 'HeartMate III',
      category: 'Durable MCS Device',
      overview: 'Continuous-flow LVAD with fully magnetically levitated rotor for long-term therapy.',
      indications: ['Destination therapy', 'Bridge to transplant', 'Bridge to recovery'],
      keyPoints: ['Pump speed 4,500–6,000 RPM', 'Lower thrombosis risk', 'Transportable controller'],
    },
    'heartware-hvad': {
      name: 'HeartWare HVAD',
      category: 'Durable MCS Device',
      overview: 'Implantable centrifugal pump for medium- and long-term support.',
      indications: ['Bridge to transplant', 'Destination therapy', 'High-risk surgical candidates'],
      keyPoints: ['Compact intrapericardial design', 'Continuous flow', 'Typical 2-5 year planned support'],
    },
    'total-artificial-heart': {
      name: 'Total Artificial Heart',
      category: 'Durable MCS Device',
      overview: 'Biventricular replacement pump used for end-stage biventricular failure.',
      indications: ['Biventricular failure not amenable to VAD', 'Bridge to transplant'],
      keyPoints: ['Willebrand membrane system', 'External pneumatic drivers', 'Full systemic/pulmonary circulation'],
    },
    'centri-mag': {
      name: 'CentriMag',
      category: 'Durable MCS Device',
      overview: 'Extracorporeal centrifugal pump for intermediate and transition support.',
      indications: ['Temporary support', 'Bridge to durable LVAD/Transplant', 'Postcardiotomy shock'],
      keyPoints: ['Up to 10 L/min', 'Low hemolysis', 'Typically < 30 days but bridgeable'],
    },
  },
};

function toTitleCase(value: string) {
  return value
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const DeviceDetailPage = ({ params }: { params: { tier: string; type: string; device: string } }) => {
  const { tier, type, device } = params;
  const typeCatalog = deviceCatalog[type];
  const item = typeCatalog ? typeCatalog[device] : null;

  if (!item) {
    return (
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Device not found
        </Typography>
        <Typography variant="body1">Could not locate details for {device} in {type}.</Typography>
        <Link href={`/${tier}/${type}`} passHref legacyBehavior>
          <Button variant="contained" style={{ marginTop: '20px' }}>
            Back to {toTitleCase(type)}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {item.name} ({item.category})
      </Typography>
      <Typography variant="body2" paragraph>{item.overview}</Typography>
      <Card style={{ maxWidth: '800px', marginTop: '16px' }}>
        <CardContent>
          <Typography variant="h6">Indications</Typography>
          <ul>
            {item.indications.map((ind: string) => (
              <li key={ind}>{ind}</li>
            ))}
          </ul>
          <Typography variant="h6">Key Points</Typography>
          <ul>
            {item.keyPoints.map((kp: string) => (
              <li key={kp}>{kp}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
        <Link href={`/${tier}/${type}`} passHref legacyBehavior>
          <Button variant="outlined">Back to {toTitleCase(type)}</Button>
        </Link>
        <Link href={`/${tier}`} passHref legacyBehavior>
          <Button variant="contained">Back to {toTitleCase(tier)}</Button>
        </Link>
      </div>
    </div>
  );
};

export default DeviceDetailPage;
