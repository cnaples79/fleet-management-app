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
  } else if (req.method === 'DELETE') {
    try {
      console.log('DELETE request received');
      console.log('Query parameters:', req.query);
  
      const { id } = req.query;
  
      if (!id || Array.isArray(id)) {
        console.log('Invalid ID provided, returning 400');
        res.status(400).json({ message: 'Valid vehicle ID is required.' });
        return;
      }
  
      console.log('Deleting vehicle with ID:', id);
  
      const deletedVehicle = await prisma.vehicle.delete({
        where: { id: Number(id) },
      });
  
      console.log('Deleted vehicle:', deletedVehicle);
  
      res.status(200).json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      if (error.code === 'P2025') {
        res.status(404).json({ message: 'Vehicle not found' });
      } else {
        res.status(500).json({ message: 'Error deleting vehicle', error: error.message });
      }
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}