// File: confirmEmailQuery.ts

import { gql } from "@apollo/client";

export const CONFIRM_EMAIL = gql`
  query ConfirmEmail($id: String = null) {
    confirmEmail(id: $id) {
      success
    }
  }
`;
