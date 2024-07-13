import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { vehicleId, latitude, longitude } = req.body;
      const location = await prisma.location.create({
        data: {
          latitude,
          longitude,
          vehicle: { connect: { id: vehicleId } },
        },
      });
      res.status(201).json(location);
    } catch (error) {
      res.status(500).json({ message: 'Error creating location', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
