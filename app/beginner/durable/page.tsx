import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Link from 'next/link';

const devices = [
  { slug: 'heartmate-iii', name: 'HeartMate III', description: 'Durable, continuous-flow LVAD for long-term therapy.' },
  { slug: 'heartware-hvad', name: 'HeartWare HVAD', description: 'Centrifugal implantable LVAD for mid-term and long-term support.' },
  { slug: 'cardiohelp', name: 'CardioHelp', description: 'Portable, durable support for extended inpatient therapy.' },
];

const DurableBeginner = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Beginner - Durable MCS Devices
    </Typography>
    <Typography variant="body1" paragraph>
      These devices are intended for long-term circulatory support.
    </Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {devices.map((device) => (
        <Card key={device.slug} style={{ width: 'calc(33% - 16px)', minWidth: '220px' }}>
          <CardContent>
            <Typography variant="h6">{device.name}</Typography>
            <Typography variant="body2" paragraph>{device.description}</Typography>
            <Link href={`/beginner/durable/${device.slug}`} passHref legacyBehavior>
              <Button variant="contained">Pump Details</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default DurableBeginner;
