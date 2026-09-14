// Calculates exact distance in meters between two GPS coordinates
export function getDistanceFromVenueInMeters(
  lat1: number,
  lon1: number,
  lat2: number = 26.82213668010962, // Target Venue Lat
  lon2: number = 75.86559453090123  // Target Venue Lon
): number {
  console.log(lat1, lon1)
  const R = 6371e3; // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}