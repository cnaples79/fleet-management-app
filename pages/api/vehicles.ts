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
      res.status(500).json({ message: 'Error fetching vehicles', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
