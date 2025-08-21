import { gql } from "@apollo/client";

const data: string | undefined = process.env.NEXT_PUBLIC_CATEGORY_ID

export const Get_Item_Request_Service_List = gql`
query GetItemRequestServiceList {
    getItemRequestServiceList(domainCategoryIds:"${data}",page: 1, size: 100) {
        result {
            itemRequestServiceID
            itemRequestServiceStatusID
            itemRequestServiceDescription
            itemRequestServiceTitle
            thumbNailPath
            categoryID
            categoryName {
                categoryName
            }
        }
    }
}
`

