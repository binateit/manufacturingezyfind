export interface MarkerData {
  id: string;
  position: google.maps.LatLngLiteral;
  type: 'pin' | 'html';
  zIndex: number;
  companyName: string;
  logoPath: string;
  compDescription: string | null;
}
