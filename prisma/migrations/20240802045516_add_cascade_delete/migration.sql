-- DropForeignKey
ALTER TABLE "Location" DROP CONSTRAINT "Location_vehicleId_fkey";

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
