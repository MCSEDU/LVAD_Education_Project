import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const devices = [
  { slug: 'impella', name: 'Impella', description: 'Acute mechanical support for cardiogenic shock.' },
  { slug: 'tandemheart', name: 'TandemHeart', description: 'Temporary left atrial bypass for high-risk interventions.' },
  { slug: 'va-ecmo', name: 'VA-ECMO', description: 'Biventricular rescue support for severe acute failure.' },
];

const TemporaryAdvanced = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Advanced - Temporary MCS Devices
    </Typography>
    <Typography variant="body1" paragraph>
      Advanced analysis of temporary device physiology and integration into care pathways.
    </Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {devices.map((device) => (
        <Card key={device.slug} style={{ width: 'calc(33% - 16px)', minWidth: '220px' }}>
          <CardContent>
            <Typography variant="h6">{device.name}</Typography>
            <Typography variant="body2" paragraph>{device.description}</Typography>
            <Link href={`/advanced/temporary/${device.slug}`} passHref legacyBehavior>
              <Button variant="contained">Pump Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default TemporaryAdvanced;
