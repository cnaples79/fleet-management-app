// pages/api/vehicles.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const vehicles = await prisma.vehicle.findMany({
        include: {
          lastLocation: true,
        },
      });
      res.status(200).json(vehicles);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      res.status(500).json({ message: 'Error fetching vehicles', error });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, type, status, latitude, longitude } = req.body;

      console.log('Received data:', { name, type, status, latitude, longitude });

      if (!name || !type || !status || latitude === undefined || longitude === undefined) {
        res.status(400).json({ message: 'All fields are required.' });
        return;
      }

      const vehicle = await prisma.vehicle.create({
        data: {
          name,
          type,
          status,
          lastLocation: {
            create: {
              latitude,
              longitude,
            },
          },
        },
      });

      res.status(201).json(vehicle);
    } catch (error) {
      console.error('Error creating vehicle:', error);
      res.status(500).json({ message: 'Error creating vehicle', error });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
