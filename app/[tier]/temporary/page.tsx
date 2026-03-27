import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, Button } from '@mui/material';

const temporaryDevices = [
  { slug: 'impella', name: 'Impella', description: 'Short-term cath lab pump support.' },
  { slug: 'tandemheart', name: 'TandemHeart', description: 'Percutaneous left atrial bypass for acute support.' },
  { slug: 'va-ecmo', name: 'VA-ECMO', description: 'Cardiopulmonary bypass for severe shock.' },
];

const TemporaryTypePage = ({ params }: { params: { tier: string } }) => {
  const { tier } = params;

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {tier.toUpperCase()} - Temporary MCS Devices
      </Typography>
      <Typography variant="body1" paragraph>
        Short-term mechanical circulatory support devices and indications.
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {temporaryDevices.map((device) => (
          <Card key={device.slug} style={{ width: 'calc(33% - 16px)', minWidth: '220px' }}>
            <CardContent>
              <Typography variant="h6">{device.name}</Typography>
              <Typography variant="body2" paragraph>{device.description}</Typography>
              <Link href={`/${tier}/temporary/${device.slug}`} passHref legacyBehavior>
                <Button variant="contained">Pump Details</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemporaryTypePage;
