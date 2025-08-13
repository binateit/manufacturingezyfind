import { gql } from "@apollo/client";


export const CREATE_PRD_HIRE = gql`
    mutation CreatePrdHire($prdHire: PrdHireInputType!) {
        createPrdHire(prdHire: $prdHire) {
            fromDate
            hireId
            productId
            toDate
        }
    }
`