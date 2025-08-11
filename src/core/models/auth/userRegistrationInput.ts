// Optimized registration input model
export interface UserRegistrationInput {
  email: string;  // Email required for registration
  contactNo: string;  // Mobile number for registration
  userName: string;  // Username for the account
  firstName: string;  // User's first name
  lastName: string;  // User's last name
  password: string;  // User's password
  track: number;  // Track ID, assuming this is required for registration
  domainUrl: string;  // Domain URL (as seen in the mutation)
  provinceID: number;  // Province ID for the user
  cityID: number;  // City ID for the user
  suburbID: number;  // Suburb ID for the user
}
