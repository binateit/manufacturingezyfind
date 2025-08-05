import slugifyLib from 'slugify';

export const slugify = (input: string): string => {
  return slugifyLib(input, {
    lower: true,     // Convert to lowercase
    strict: true,    // Remove special characters
    trim: true       // Trim leading/trailing whitespace
  });
};
