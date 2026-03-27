import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const devices = [
  { slug: 'heartmate-iii', name: 'HeartMate III', description: 'Durable LVAD with full magnetically levitated rotor.' },
  { slug: 'heartware-hvad', name: 'HeartWare HVAD', description: 'Implantable centrifugal LVAD for long-term support.' },
  { slug: 'centri-mag', name: 'CentriMag', description: 'Longer-term extracorporeal centrifugal pump for temporary-to-durable transition.' },
];

const DurableIntermediate = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Intermediate - Durable MCS Devices
    </Typography>
    <Typography variant="body1" paragraph>
      Intermediate-level durable device therapy and care considerations.
    </Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {devices.map((device) => (
        <Card key={device.slug} style={{ width: 'calc(33% - 16px)', minWidth: '220px' }}>
          <CardContent>
            <Typography variant="h6">{device.name}</Typography>
            <Typography variant="body2" paragraph>{device.description}</Typography>
            <Link href={`/intermediate/durable/${device.slug}`} passHref legacyBehavior>
              <Button variant="contained">Pump Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default DurableIntermediate;
