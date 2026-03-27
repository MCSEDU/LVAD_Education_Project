import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const devices = [
  { slug: 'impella', name: 'Impella', description: 'Percutaneous microaxial pump for acute cardiogenic shock.' },
  { slug: 'tandemheart', name: 'TandemHeart', description: 'Extracorporeal left atrial bypass for short-term support.' },
  { slug: 'va-ecmo', name: 'VA-ECMO', description: 'Venoarterial ECMO for temporary biventricular rescue.' },
];

const TemporaryIntermediate = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Intermediate - Temporary MCS Devices
    </Typography>
    <Typography variant="body1" paragraph>
      Intermediate-level temporary device use cases and management.
    </Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {devices.map((device) => (
        <Card key={device.slug} style={{ width: 'calc(33% - 16px)', minWidth: '220px' }}>
          <CardContent>
            <Typography variant="h6">{device.name}</Typography>
            <Typography variant="body2" paragraph>{device.description}</Typography>
            <Link href={`/intermediate/temporary/${device.slug}`} passHref legacyBehavior>
              <Button variant="contained">Pump Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default TemporaryIntermediate;
