// File: forgotPasswordQuery.ts

import { gql } from '@apollo/client';

export const FORGOT_PASSWORD = gql`
  query ForgetPassword($email: String = null, $domainUrl: Int = null) {
    forgetPassword(email: $email, domainUrl: $domainUrl) {
      success
    }
  }
`;
