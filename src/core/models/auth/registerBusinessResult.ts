// Result type to match the returned data structure after registration
export interface RegisterBusinessResult {
  firstName: string | null;
  lastName: string | null;
  paymentUrl: string | null;
  token: string | null;
  tokenExpires: Date | null;
  streetAddress: string | null;
  userProfileImage: string | null;
  longitude: string | null;
  latitude: string | null;
}