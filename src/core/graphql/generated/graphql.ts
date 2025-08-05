/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Date: { input: any; output: any; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Guid: { input: any; output: any; }
  Long: { input: any; output: any; }
  /** A meta type that represents a file upload. */
  Upload: { input: any; output: any; }
};

export type ContactUsDtoInputType = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type DevFormsInputType = {
  formId: Scalars['Int']['input'];
  formName?: InputMaybe<Scalars['String']['input']>;
  formUrl?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isForm?: InputMaybe<Scalars['Boolean']['input']>;
  mapUserRoleRights?: InputMaybe<Array<InputMaybe<MapUserRoleRightsInputType>>>;
  menuLevel?: InputMaybe<Scalars['Int']['input']>;
  menuType?: InputMaybe<Scalars['Int']['input']>;
  parentForm?: InputMaybe<Scalars['Int']['input']>;
  parentFormNavigation?: InputMaybe<DevFormsInputType>;
  sortOrder?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DevFormsType = {
  __typename?: 'DevFormsType';
  formId: Scalars['Int']['output'];
  formName?: Maybe<Scalars['String']['output']>;
  formUrl?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isForm?: Maybe<Scalars['Boolean']['output']>;
  menuLevel?: Maybe<Scalars['Int']['output']>;
  menuType?: Maybe<Scalars['Int']['output']>;
  parentForm?: Maybe<Scalars['Int']['output']>;
  parentFormNavigation?: Maybe<DevFormsType>;
  sortOrder?: Maybe<Scalars['Decimal']['output']>;
};

export type ElmahErrorInputType = {
  allXml?: InputMaybe<Scalars['String']['input']>;
  application?: InputMaybe<Scalars['String']['input']>;
  errorId: Scalars['ID']['input'];
  host?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  sequence: Scalars['Int']['input'];
  source?: InputMaybe<Scalars['String']['input']>;
  statusCode: Scalars['Int']['input'];
  timeUtc: Scalars['DateTime']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type ElmahErrorType = {
  __typename?: 'ElmahErrorType';
  allXml?: Maybe<Scalars['String']['output']>;
  application?: Maybe<Scalars['String']['output']>;
  errorId: Scalars['ID']['output'];
  host?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  sequence: Scalars['Int']['output'];
  source?: Maybe<Scalars['String']['output']>;
  statusCode: Scalars['Int']['output'];
  timeUtc: Scalars['DateTime']['output'];
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type EzyFindMutation = {
  __typename?: 'EzyFindMutation';
  addCustomerEnquiry?: Maybe<Response13>;
  addCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  cancleBusinessPackage?: Maybe<Response1>;
  contactUs?: Maybe<Response>;
  createDevForms?: Maybe<DevFormsType>;
  createElmahError?: Maybe<ElmahErrorType>;
  createJob?: Maybe<JobType>;
  createMapCategoryAttributes?: Maybe<MapCategoryAttributesType>;
  createMapCompanyArea?: Maybe<MapCompanyAreaType>;
  createMapCompanyAuditLog?: Maybe<MapCompanyAuditLogType>;
  createMapCompanyCategory?: Maybe<MapCompanyCategoryType>;
  createMapCompanyDocument?: Maybe<MapCompanyDocumentType>;
  createMapCompanyEmail?: Maybe<MapCompanyEmailType>;
  createMapCompanyMagazineAd?: Maybe<MapCompanyMagazineAdType>;
  createMapCompanyPackage?: Maybe<MapCompanyPackageType>;
  createMapCompanyPayment?: Maybe<MapCompanyPaymentType>;
  createMapCompanyProvide?: Maybe<MapCompanyProvideType>;
  createMapCompanySeek?: Maybe<MapCompanySeekType>;
  createMapCompanyTask?: Maybe<MapCompanyTaskType>;
  createMapCompanyUsers?: Maybe<MapCompanyUsersType>;
  createMapCustomerEnquiryUpload?: Maybe<MapCustomerEnquiryUploadType>;
  createMapEflyersUpload?: Maybe<MapEflyersUploadType>;
  createMapItemRequestArea?: Maybe<MapItemRequestAreaType>;
  createMapItemRequestCategory?: Maybe<MapItemRequestCategoryType>;
  createMapItemRequestCategoryAttribute?: Maybe<MapItemRequestCategoryAttributeType>;
  createMapItemRequestUpload?: Maybe<MapItemRequestUploadType>;
  createMapItemResponseUpload?: Maybe<MapItemResponseUploadType>;
  createMapPackageAttributes?: Maybe<MapPackageAttributesType>;
  createMapSettingsRole?: Maybe<MapSettingsRoleType>;
  createMapSpecialUpload?: Maybe<MapSpecialUploadType>;
  createMapUserRoleRights?: Maybe<MapUserRoleRightsType>;
  createMapUsersSettings?: Maybe<MapUsersSettingsType>;
  createMstBeestatus?: Maybe<MstBeestatusType>;
  createMstCategory?: Maybe<MstCategoryType>;
  createMstCategoryAttribute?: Maybe<MstCategoryAttributeType>;
  createMstCategoryAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  createMstCity?: Maybe<MstCityType>;
  createMstCms?: Maybe<MstCmsType>;
  createMstCompanyDocumentType?: Maybe<MstCompanyDocumentTypeType>;
  createMstCompanyStatus?: Maybe<MstCompanyStatusType>;
  createMstCompanyTaskList?: Maybe<MstCompanyTaskListType>;
  createMstConfiguration?: Maybe<MstConfigurationType>;
  createMstContactForm?: Maybe<MstContactFormType>;
  createMstCountry?: Maybe<MstCountryType>;
  createMstCrmCustomer?: Maybe<MstCrmCustomerType>;
  createMstCrmCustomerComment?: Maybe<MstCrmCustomerCommentType>;
  createMstCrmInventory?: Maybe<MstCrmInventoryType>;
  createMstCrmInventoryType?: Maybe<MstCrmInventoryTypeType>;
  createMstCrmInvoice?: Maybe<MstCrmInvoiceType>;
  createMstCrmInvoiceDetails?: Maybe<MstCrmInvoiceDetailsType>;
  createMstCrmQuote?: Maybe<MstCrmQuoteType>;
  createMstCrmQuoteDetails?: Maybe<MstCrmQuoteDetailsType>;
  createMstCustomerEnquiry?: Maybe<MstCustomerEnquiryType>;
  createMstCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  createMstDocumentStatus?: Maybe<MstDocumentStatusType>;
  createMstDomain?: Maybe<MstDomainType>;
  createMstEFlyers?: Maybe<MstEFlyersType>;
  createMstEmailStack?: Maybe<MstEmailStackType>;
  createMstFavourites?: Maybe<MstFavouritesType>;
  createMstFranchisee?: Maybe<MstFranchiseeType>;
  createMstItemRequest?: Maybe<MstItemRequestType>;
  createMstItemResponse?: Maybe<MstItemResponseType>;
  createMstKeywords?: Maybe<MstKeywordsType>;
  createMstMagazineAd?: Maybe<MstMagazineAdType>;
  createMstMagazineAdType?: Maybe<MstMagazineAdTypeType>;
  createMstMagazineSection?: Maybe<MstMagazineSectionType>;
  createMstMailType?: Maybe<MstMailTypeType>;
  createMstNotificationStack?: Maybe<MstNotificationStackType>;
  createMstPackage?: Maybe<MstPackageType>;
  createMstPackageAttribute?: Maybe<MstPackageAttributeType>;
  createMstPaymentMode?: Maybe<MstPaymentModeType>;
  createMstPaymentStatus?: Maybe<MstPaymentStatusType>;
  createMstPaymentType?: Maybe<MstPaymentTypeType>;
  createMstPeriodType?: Maybe<MstPeriodTypeType>;
  createMstProvince?: Maybe<MstProvinceType>;
  createMstQuantityType?: Maybe<MstQuantityTypeType>;
  createMstRating?: Maybe<MstRatingType>;
  createMstSettingType?: Maybe<MstSettingTypeType>;
  createMstSettings?: Maybe<MstSettingsType>;
  createMstSpecials?: Maybe<MstSpecialsType>;
  createMstStatus?: Maybe<MstStatusType>;
  createMstSuburb?: Maybe<MstSuburbType>;
  createMstUser?: Maybe<ResponseMstUsers>;
  createMstUserRole?: Maybe<MstUserRoleType>;
  createMstUserStatus?: Maybe<MstUserStatusType>;
  createMstVersion?: Maybe<MstVersionType>;
  createMstVolumeType?: Maybe<MstVolumeTypeType>;
  createPost?: Maybe<PostType>;
  createPostAttachment?: Maybe<PostAttachmentType>;
  createPostReply?: Maybe<PostReplyType>;
  createPostReplyAttachment?: Maybe<PostReplyAttachmentType>;
  createPrdBid?: Maybe<PrdBidType>;
  createPrdCategory?: Maybe<PrdCategoryType>;
  createPrdHire?: Maybe<PrdHireType>;
  createPrdOrderDetails?: Maybe<PrdOrderDetailsType>;
  createPrdOrderPayment?: Maybe<PrdOrderPaymentType>;
  createPrdOrderStatus?: Maybe<PrdOrderStatusType>;
  createPrdOrderStatusType?: Maybe<PrdOrderStatusTypeType>;
  createPrdOrders?: Maybe<PrdOrdersType>;
  createPrdProducts?: Maybe<ResponsePrdProducts>;
  createPrdShoppingCart?: Maybe<PrdShoppingCartType>;
  createPrdSubCategory?: Maybe<PrdSubCategoryType>;
  createProductDocument?: Maybe<Response11>;
  createProductImage?: Maybe<Response9>;
  createSystemRole?: Maybe<SystemRoleType>;
  createSystemUser?: Maybe<SystemUserType>;
  deleteDevForms?: Maybe<Scalars['Boolean']['output']>;
  deleteElmahError?: Maybe<Scalars['Boolean']['output']>;
  deleteJob?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCategoryAttributes?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyArea?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyAuditLog?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyDocument?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyEmail?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyMagazineAd?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyPackage?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyPayment?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyProvide?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanySeek?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyTask?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCompanyUsers?: Maybe<Scalars['Boolean']['output']>;
  deleteMapCustomerEnquiryUpload?: Maybe<Scalars['Boolean']['output']>;
  deleteMapEflyersUpload?: Maybe<Scalars['Boolean']['output']>;
  deleteMapItemRequestArea?: Maybe<Scalars['Boolean']['output']>;
  deleteMapItemRequestCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteMapItemRequestCategoryAttribute?: Maybe<Scalars['Boolean']['output']>;
  deleteMapItemRequestUpload?: Maybe<Scalars['Boolean']['output']>;
  deleteMapItemResponseUpload?: Maybe<Scalars['Boolean']['output']>;
  deleteMapPackageAttributes?: Maybe<Scalars['Boolean']['output']>;
  deleteMapSettingsRole?: Maybe<Scalars['Boolean']['output']>;
  deleteMapSpecialUpload?: Maybe<Scalars['Boolean']['output']>;
  deleteMapUserRoleRights?: Maybe<Scalars['Boolean']['output']>;
  deleteMapUsersSettings?: Maybe<Scalars['Boolean']['output']>;
  deleteMstBeestatus?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCategoryAttribute?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCategoryAttributeDataType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCity?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCms?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCompany?: Maybe<Response8>;
  deleteMstCompanyDocumentType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCompanyStatus?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCompanyTaskList?: Maybe<Scalars['Boolean']['output']>;
  deleteMstConfiguration?: Maybe<Scalars['Boolean']['output']>;
  deleteMstContactForm?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCountry?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmCustomer?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmCustomerComment?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmInventory?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmInventoryType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmInvoice?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmInvoiceDetails?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmQuote?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCrmQuoteDetails?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCustomerEnquiry?: Maybe<Scalars['Boolean']['output']>;
  deleteMstCustomerEnquiryResponse?: Maybe<Scalars['Boolean']['output']>;
  deleteMstDocumentStatus?: Maybe<Scalars['Boolean']['output']>;
  deleteMstDomain?: Maybe<Scalars['Boolean']['output']>;
  deleteMstEFlyers?: Maybe<Scalars['Boolean']['output']>;
  deleteMstEmailStack?: Maybe<Scalars['Boolean']['output']>;
  deleteMstFavourites?: Maybe<Scalars['Boolean']['output']>;
  deleteMstFranchisee?: Maybe<Scalars['Boolean']['output']>;
  deleteMstItemRequest?: Maybe<Scalars['Boolean']['output']>;
  deleteMstItemResponse?: Maybe<Scalars['Boolean']['output']>;
  deleteMstKeywords?: Maybe<Scalars['Boolean']['output']>;
  deleteMstMagazineAd?: Maybe<Scalars['Boolean']['output']>;
  deleteMstMagazineAdType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstMagazineSection?: Maybe<Scalars['Boolean']['output']>;
  deleteMstMailType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstNotificationStack?: Maybe<Scalars['Boolean']['output']>;
  deleteMstPackage?: Maybe<Scalars['Boolean']['output']>;
  deleteMstPackageAttribute?: Maybe<Scalars['Boolean']['output']>;
  deleteMstPaymentMode?: Maybe<Scalars['Boolean']['output']>;
  deleteMstPaymentStatus?: Maybe<Scalars['Boolean']['output']>;
  deleteMstPaymentType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstPeriodType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstProvince?: Maybe<Scalars['Boolean']['output']>;
  deleteMstQuantityType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstRating?: Maybe<Scalars['Boolean']['output']>;
  deleteMstSettingType?: Maybe<Scalars['Boolean']['output']>;
  deleteMstSettings?: Maybe<Scalars['Boolean']['output']>;
  deleteMstSpecials?: Maybe<Scalars['Boolean']['output']>;
  deleteMstStatus?: Maybe<Scalars['Boolean']['output']>;
  deleteMstSuburb?: Maybe<Scalars['Boolean']['output']>;
  deleteMstUser?: Maybe<Response8>;
  deleteMstUserRole?: Maybe<Scalars['Boolean']['output']>;
  deleteMstUserStatus?: Maybe<Scalars['Boolean']['output']>;
  deleteMstUsers?: Maybe<Response8>;
  deleteMstVersion?: Maybe<Scalars['Boolean']['output']>;
  deleteMstVolumeType?: Maybe<Scalars['Boolean']['output']>;
  deletePost?: Maybe<Scalars['Boolean']['output']>;
  deletePostAttachment?: Maybe<Scalars['Boolean']['output']>;
  deletePostReply?: Maybe<Scalars['Boolean']['output']>;
  deletePostReplyAttachment?: Maybe<Scalars['Boolean']['output']>;
  deletePrdBid?: Maybe<Scalars['Boolean']['output']>;
  deletePrdCategory?: Maybe<Scalars['Boolean']['output']>;
  deletePrdHire?: Maybe<Scalars['Boolean']['output']>;
  deletePrdOrderDetails?: Maybe<Scalars['Boolean']['output']>;
  deletePrdOrderPayment?: Maybe<Scalars['Boolean']['output']>;
  deletePrdOrderStatus?: Maybe<Scalars['Boolean']['output']>;
  deletePrdOrderStatusType?: Maybe<Scalars['Boolean']['output']>;
  deletePrdOrders?: Maybe<Scalars['Boolean']['output']>;
  deletePrdProducts?: Maybe<ResponsePrdProducts>;
  deletePrdShoppingCart?: Maybe<ResponsePrdShoppingCartTotalDto>;
  deletePrdShoppingCartId?: Maybe<Scalars['Boolean']['output']>;
  deletePrdSubCategory?: Maybe<Scalars['Boolean']['output']>;
  deleteProductDocument?: Maybe<ResponseMapProductDocument>;
  deleteProductImage?: Maybe<Response10>;
  deleteSystemRole?: Maybe<Scalars['Boolean']['output']>;
  deleteSystemUser?: Maybe<Scalars['Boolean']['output']>;
  forgetChangePassword?: Maybe<Response12>;
  oAuthMut?: Maybe<ResponseMstLoggedInUserDto>;
  pauseBusinessPackage?: Maybe<Response1>;
  postMstItemRequest?: Maybe<Response13>;
  postMstItemRequestAttachment?: Maybe<Response13>;
  postMstItemResponse?: Maybe<MstItemResponseType>;
  postMstRating?: Maybe<Response13>;
  postPost?: Maybe<Response14>;
  postPrdShoppingCart?: Maybe<Response13>;
  postPrdShoppingCartOptimized?: Maybe<ResponsePrdShoppingCartTotalDto>;
  postReply?: Maybe<Response13>;
  postUserActivity?: Maybe<ResponseMapUserActivity>;
  postUserAddress?: Maybe<ResponseMstUserAddress>;
  postVehicle?: Maybe<ResponseMstVehicle>;
  registerBusiness?: Maybe<Response12>;
  registerUser?: Maybe<Response12>;
  sSOLoginMut?: Maybe<ResponseMstLoggedInUserDto>;
  unPauseBusinessPackage?: Maybe<Response1>;
  updateDevForms?: Maybe<DevFormsType>;
  updateElmahError?: Maybe<ElmahErrorType>;
  updateJob?: Maybe<JobType>;
  updateMapCategoryAttributes?: Maybe<MapCategoryAttributesType>;
  updateMapCompanyArea?: Maybe<MapCompanyAreaType>;
  updateMapCompanyAuditLog?: Maybe<MapCompanyAuditLogType>;
  updateMapCompanyCategory?: Maybe<MapCompanyCategoryType>;
  updateMapCompanyDocument?: Maybe<MapCompanyDocumentType>;
  updateMapCompanyEmail?: Maybe<MapCompanyEmailType>;
  updateMapCompanyMagazineAd?: Maybe<MapCompanyMagazineAdType>;
  updateMapCompanyPackage?: Maybe<MapCompanyPackageType>;
  updateMapCompanyPayment?: Maybe<MapCompanyPaymentType>;
  updateMapCompanyProvide?: Maybe<MapCompanyProvideType>;
  updateMapCompanySeek?: Maybe<MapCompanySeekType>;
  updateMapCompanyTask?: Maybe<MapCompanyTaskType>;
  updateMapCompanyUsers?: Maybe<MapCompanyUsersType>;
  updateMapCustomerEnquiryUpload?: Maybe<MapCustomerEnquiryUploadType>;
  updateMapEflyersUpload?: Maybe<MapEflyersUploadType>;
  updateMapItemRequestArea?: Maybe<MapItemRequestAreaType>;
  updateMapItemRequestCategory?: Maybe<MapItemRequestCategoryType>;
  updateMapItemRequestCategoryAttribute?: Maybe<MapItemRequestCategoryAttributeType>;
  updateMapItemRequestUpload?: Maybe<MapItemRequestUploadType>;
  updateMapItemResponseUpload?: Maybe<MapItemResponseUploadType>;
  updateMapPackageAttributes?: Maybe<MapPackageAttributesType>;
  updateMapSettingsRole?: Maybe<MapSettingsRoleType>;
  updateMapSpecialUpload?: Maybe<MapSpecialUploadType>;
  updateMapUserRoleRights?: Maybe<MapUserRoleRightsType>;
  updateMapUsersSettings?: Maybe<MapUsersSettingsType>;
  updateMstBeestatus?: Maybe<MstBeestatusType>;
  updateMstCategory?: Maybe<MstCategoryType>;
  updateMstCategoryAttribute?: Maybe<MstCategoryAttributeType>;
  updateMstCategoryAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  updateMstCity?: Maybe<MstCityType>;
  updateMstCms?: Maybe<MstCmsType>;
  updateMstCompany?: Maybe<ResponseMstCompany>;
  updateMstCompanyDocumentType?: Maybe<MstCompanyDocumentTypeType>;
  updateMstCompanyStatus?: Maybe<MstCompanyStatusType>;
  updateMstCompanyTaskList?: Maybe<MstCompanyTaskListType>;
  updateMstConfiguration?: Maybe<MstConfigurationType>;
  updateMstContactForm?: Maybe<MstContactFormType>;
  updateMstCountry?: Maybe<MstCountryType>;
  updateMstCrmCustomer?: Maybe<MstCrmCustomerType>;
  updateMstCrmCustomerComment?: Maybe<MstCrmCustomerCommentType>;
  updateMstCrmInventory?: Maybe<MstCrmInventoryType>;
  updateMstCrmInventoryType?: Maybe<MstCrmInventoryTypeType>;
  updateMstCrmInvoice?: Maybe<MstCrmInvoiceType>;
  updateMstCrmInvoiceDetails?: Maybe<MstCrmInvoiceDetailsType>;
  updateMstCrmQuote?: Maybe<MstCrmQuoteType>;
  updateMstCrmQuoteDetails?: Maybe<MstCrmQuoteDetailsType>;
  updateMstCustomerEnquiry?: Maybe<MstCustomerEnquiryType>;
  updateMstCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  updateMstDocumentStatus?: Maybe<MstDocumentStatusType>;
  updateMstDomain?: Maybe<MstDomainType>;
  updateMstEFlyers?: Maybe<MstEFlyersType>;
  updateMstEmailStack?: Maybe<MstEmailStackType>;
  updateMstFavourites?: Maybe<MstFavouritesType>;
  updateMstFranchisee?: Maybe<MstFranchiseeType>;
  updateMstItemRequest?: Maybe<MstItemRequestType>;
  updateMstItemResponse?: Maybe<MstItemResponseType>;
  updateMstKeywords?: Maybe<MstKeywordsType>;
  updateMstMagazineAd?: Maybe<MstMagazineAdType>;
  updateMstMagazineAdType?: Maybe<MstMagazineAdTypeType>;
  updateMstMagazineSection?: Maybe<MstMagazineSectionType>;
  updateMstMailType?: Maybe<MstMailTypeType>;
  updateMstNotificationStack?: Maybe<MstNotificationStackType>;
  updateMstPackage?: Maybe<MstPackageType>;
  updateMstPackageAttribute?: Maybe<MstPackageAttributeType>;
  updateMstPaymentMode?: Maybe<MstPaymentModeType>;
  updateMstPaymentStatus?: Maybe<MstPaymentStatusType>;
  updateMstPaymentType?: Maybe<MstPaymentTypeType>;
  updateMstPeriodType?: Maybe<MstPeriodTypeType>;
  updateMstProvince?: Maybe<MstProvinceType>;
  updateMstQuantityType?: Maybe<MstQuantityTypeType>;
  updateMstRating?: Maybe<MstRatingType>;
  updateMstSettingType?: Maybe<MstSettingTypeType>;
  updateMstSettings?: Maybe<MstSettingsType>;
  updateMstSpecials?: Maybe<MstSpecialsType>;
  updateMstStatus?: Maybe<MstStatusType>;
  updateMstSuburb?: Maybe<MstSuburbType>;
  updateMstUserLocation?: Maybe<Response3>;
  updateMstUserRole?: Maybe<MstUserRoleType>;
  updateMstUserStatus?: Maybe<MstUserStatusType>;
  updateMstUsers?: Maybe<ResponseMstUsers>;
  updateMstVersion?: Maybe<MstVersionType>;
  updateMstVolumeType?: Maybe<MstVolumeTypeType>;
  updatePost?: Maybe<PostType>;
  updatePostAttachment?: Maybe<PostAttachmentType>;
  updatePostReply?: Maybe<PostReplyType>;
  updatePostReplyAttachment?: Maybe<PostReplyAttachmentType>;
  updatePrdBid?: Maybe<PrdBidType>;
  updatePrdCategory?: Maybe<PrdCategoryType>;
  updatePrdHire?: Maybe<PrdHireType>;
  updatePrdOrderDetails?: Maybe<PrdOrderDetailsType>;
  updatePrdOrderPayment?: Maybe<PrdOrderPaymentType>;
  updatePrdOrderStatus?: Maybe<PrdOrderStatusType>;
  updatePrdOrderStatusType?: Maybe<PrdOrderStatusTypeType>;
  updatePrdOrders?: Maybe<PrdOrdersType>;
  updatePrdProducts?: Maybe<ResponsePrdProducts>;
  updatePrdShoppingCart?: Maybe<PrdShoppingCartType>;
  updatePrdSubCategory?: Maybe<PrdSubCategoryType>;
  updateProductDocument?: Maybe<ResponseMapProductDocument>;
  updateProductImage?: Maybe<Response10>;
  updateSystemRole?: Maybe<SystemRoleType>;
  updateSystemUser?: Maybe<SystemUserType>;
  upgradeBusinessPackage?: Maybe<Response12>;
};


export type EzyFindMutationAddCustomerEnquiryArgs = {
  customerEnquiry: MstCustomerEnquiryInputType;
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
};


export type EzyFindMutationAddCustomerEnquiryResponseArgs = {
  customerEnquiryResponse: MstCustomerEnquiryResponseInputType;
};


export type EzyFindMutationContactUsArgs = {
  contactUs: ContactUsDtoInputType;
};


export type EzyFindMutationCreateDevFormsArgs = {
  devForms: DevFormsInputType;
};


export type EzyFindMutationCreateElmahErrorArgs = {
  elmahError: ElmahErrorInputType;
};


export type EzyFindMutationCreateJobArgs = {
  job: JobInputType;
};


export type EzyFindMutationCreateMapCategoryAttributesArgs = {
  mapCategoryAttributes: MapCategoryAttributesInputType;
};


export type EzyFindMutationCreateMapCompanyAreaArgs = {
  mapCompanyArea: MapCompanyAreaInputType;
};


export type EzyFindMutationCreateMapCompanyAuditLogArgs = {
  mapCompanyAuditLog: MapCompanyAuditLogInputType;
};


export type EzyFindMutationCreateMapCompanyCategoryArgs = {
  mapCompanyCategory: MapCompanyCategoryInputType;
};


export type EzyFindMutationCreateMapCompanyDocumentArgs = {
  mapCompanyDocument: MapCompanyDocumentInputType;
};


export type EzyFindMutationCreateMapCompanyEmailArgs = {
  mapCompanyEmail: MapCompanyEmailInputType;
};


export type EzyFindMutationCreateMapCompanyMagazineAdArgs = {
  mapCompanyMagazineAd: MapCompanyMagazineAdInputType;
};


export type EzyFindMutationCreateMapCompanyPackageArgs = {
  mapCompanyPackage: MapCompanyPackageInputType;
};


export type EzyFindMutationCreateMapCompanyPaymentArgs = {
  mapCompanyPayment: MapCompanyPaymentInputType;
};


export type EzyFindMutationCreateMapCompanyProvideArgs = {
  mapCompanyProvide: MapCompanyProvideInputType;
};


export type EzyFindMutationCreateMapCompanySeekArgs = {
  mapCompanySeek: MapCompanySeekInputType;
};


export type EzyFindMutationCreateMapCompanyTaskArgs = {
  mapCompanyTask: MapCompanyTaskInputType;
};


export type EzyFindMutationCreateMapCompanyUsersArgs = {
  mapCompanyUsers: MapCompanyUsersInputType;
};


export type EzyFindMutationCreateMapCustomerEnquiryUploadArgs = {
  mapCustomerEnquiryUpload: MapCustomerEnquiryUploadInputType;
};


export type EzyFindMutationCreateMapEflyersUploadArgs = {
  mapEflyersUpload: MapEflyersUploadInputType;
};


export type EzyFindMutationCreateMapItemRequestAreaArgs = {
  mapItemRequestArea: MapItemRequestAreaInputType;
};


export type EzyFindMutationCreateMapItemRequestCategoryArgs = {
  mapItemRequestCategory: MapItemRequestCategoryInputType;
};


export type EzyFindMutationCreateMapItemRequestCategoryAttributeArgs = {
  mapItemRequestCategoryAttribute: MapItemRequestCategoryAttributeInputType;
};


export type EzyFindMutationCreateMapItemRequestUploadArgs = {
  mapItemRequestUpload: MapItemRequestUploadInputType;
};


export type EzyFindMutationCreateMapItemResponseUploadArgs = {
  mapItemResponseUpload: MapItemResponseUploadInputType;
};


export type EzyFindMutationCreateMapPackageAttributesArgs = {
  mapPackageAttributes: MapPackageAttributesInputType;
};


export type EzyFindMutationCreateMapSettingsRoleArgs = {
  mapSettingsRole: MapSettingsRoleInputType;
};


export type EzyFindMutationCreateMapSpecialUploadArgs = {
  mapSpecialUpload: MapSpecialUploadInputType;
};


export type EzyFindMutationCreateMapUserRoleRightsArgs = {
  mapUserRoleRights: MapUserRoleRightsInputType;
};


export type EzyFindMutationCreateMapUsersSettingsArgs = {
  mapUsersSettings: MapUsersSettingsInputType;
};


export type EzyFindMutationCreateMstBeestatusArgs = {
  mstBeestatus: MstBeestatusInputType;
};


export type EzyFindMutationCreateMstCategoryArgs = {
  mstCategory: MstCategoryInputType;
};


export type EzyFindMutationCreateMstCategoryAttributeArgs = {
  mstCategoryAttribute: MstCategoryAttributeInputType;
};


export type EzyFindMutationCreateMstCategoryAttributeDataTypeArgs = {
  mstCategoryAttributeDataType: MstCategoryAttributeDataTypeInputType;
};


export type EzyFindMutationCreateMstCityArgs = {
  mstCity: MstCityInputType;
};


export type EzyFindMutationCreateMstCmsArgs = {
  mstCms: MstCmsInputType;
};


export type EzyFindMutationCreateMstCompanyDocumentTypeArgs = {
  mstCompanyDocumentType: MstCompanyDocumentTypeInputType;
};


export type EzyFindMutationCreateMstCompanyStatusArgs = {
  mstCompanyStatus: MstCompanyStatusInputType;
};


export type EzyFindMutationCreateMstCompanyTaskListArgs = {
  mstCompanyTaskList: MstCompanyTaskListInputType;
};


export type EzyFindMutationCreateMstConfigurationArgs = {
  mstConfiguration: MstConfigurationInputType;
};


export type EzyFindMutationCreateMstContactFormArgs = {
  mstContactForm: MstContactFormInputType;
};


export type EzyFindMutationCreateMstCountryArgs = {
  mstCountry: MstCountryInputType;
};


export type EzyFindMutationCreateMstCrmCustomerArgs = {
  mstCrmCustomer: MstCrmCustomerInputType;
};


export type EzyFindMutationCreateMstCrmCustomerCommentArgs = {
  mstCrmCustomerComment: MstCrmCustomerCommentInputType;
};


export type EzyFindMutationCreateMstCrmInventoryArgs = {
  mstCrmInventory: MstCrmInventoryInputType;
};


export type EzyFindMutationCreateMstCrmInventoryTypeArgs = {
  mstCrmInventoryType: MstCrmInventoryTypeInputType;
};


export type EzyFindMutationCreateMstCrmInvoiceArgs = {
  mstCrmInvoice: MstCrmInvoiceInputType;
};


export type EzyFindMutationCreateMstCrmInvoiceDetailsArgs = {
  mstCrmInvoiceDetails: MstCrmInvoiceDetailsInputType;
};


export type EzyFindMutationCreateMstCrmQuoteArgs = {
  mstCrmQuote: MstCrmQuoteInputType;
};


export type EzyFindMutationCreateMstCrmQuoteDetailsArgs = {
  mstCrmQuoteDetails: MstCrmQuoteDetailsInputType;
};


export type EzyFindMutationCreateMstCustomerEnquiryArgs = {
  mstCustomerEnquiry: MstCustomerEnquiryInputType;
};


export type EzyFindMutationCreateMstCustomerEnquiryResponseArgs = {
  mstCustomerEnquiryResponse: MstCustomerEnquiryResponseInputType;
};


export type EzyFindMutationCreateMstDocumentStatusArgs = {
  mstDocumentStatus: MstDocumentStatusInputType;
};


export type EzyFindMutationCreateMstDomainArgs = {
  mstDomain: MstDomainInputType;
};


export type EzyFindMutationCreateMstEFlyersArgs = {
  mstEFlyers: MstEFlyersInputType;
};


export type EzyFindMutationCreateMstEmailStackArgs = {
  mstEmailStack: MstEmailStackInputType;
};


export type EzyFindMutationCreateMstFavouritesArgs = {
  mstFavourites: MstFavouritesInputType;
};


export type EzyFindMutationCreateMstFranchiseeArgs = {
  mstFranchisee: MstFranchiseeInputType;
};


export type EzyFindMutationCreateMstItemRequestArgs = {
  mstItemRequest: MstItemRequestInputType;
};


export type EzyFindMutationCreateMstItemResponseArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mstItemResponse: MstItemResponseInputType;
};


export type EzyFindMutationCreateMstKeywordsArgs = {
  mstKeywords: MstKeywordsInputType;
};


export type EzyFindMutationCreateMstMagazineAdArgs = {
  mstMagazineAd: MstMagazineAdInputType;
};


export type EzyFindMutationCreateMstMagazineAdTypeArgs = {
  mstMagazineAdType: MstMagazineAdTypeInputType;
};


export type EzyFindMutationCreateMstMagazineSectionArgs = {
  mstMagazineSection: MstMagazineSectionInputType;
};


export type EzyFindMutationCreateMstMailTypeArgs = {
  mstMailType: MstMailTypeInputType;
};


export type EzyFindMutationCreateMstNotificationStackArgs = {
  mstNotificationStack: MstNotificationStackInputType;
};


export type EzyFindMutationCreateMstPackageArgs = {
  mstPackage: MstPackageInputType;
};


export type EzyFindMutationCreateMstPackageAttributeArgs = {
  mstPackageAttribute: MstPackageAttributeInputType;
};


export type EzyFindMutationCreateMstPaymentModeArgs = {
  mstPaymentMode: MstPaymentModeInputType;
};


export type EzyFindMutationCreateMstPaymentStatusArgs = {
  mstPaymentStatus: MstPaymentStatusInputType;
};


export type EzyFindMutationCreateMstPaymentTypeArgs = {
  mstPaymentType: MstPaymentTypeInputType;
};


export type EzyFindMutationCreateMstPeriodTypeArgs = {
  mstPeriodType: MstPeriodTypeInputType;
};


export type EzyFindMutationCreateMstProvinceArgs = {
  mstProvince: MstProvinceInputType;
};


export type EzyFindMutationCreateMstQuantityTypeArgs = {
  mstQuantityType: MstQuantityTypeInputType;
};


export type EzyFindMutationCreateMstRatingArgs = {
  mstRating: MstRatingInputType;
};


export type EzyFindMutationCreateMstSettingTypeArgs = {
  mstSettingType: MstSettingTypeInputType;
};


export type EzyFindMutationCreateMstSettingsArgs = {
  mstSettings: MstSettingsInputType;
};


export type EzyFindMutationCreateMstSpecialsArgs = {
  mstSpecials: MstSpecialsInputType;
};


export type EzyFindMutationCreateMstStatusArgs = {
  mstStatus: MstStatusInputType;
};


export type EzyFindMutationCreateMstSuburbArgs = {
  mstSuburb: MstSuburbInputType;
};


export type EzyFindMutationCreateMstUserArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mstUsers: MstUsersInputType;
};


export type EzyFindMutationCreateMstUserRoleArgs = {
  mstUserRole: MstUserRoleInputType;
};


export type EzyFindMutationCreateMstUserStatusArgs = {
  mstUserStatus: MstUserStatusInputType;
};


export type EzyFindMutationCreateMstVersionArgs = {
  mstVersion: MstVersionInputType;
};


export type EzyFindMutationCreateMstVolumeTypeArgs = {
  mstVolumeType: MstVolumeTypeInputType;
};


export type EzyFindMutationCreatePostArgs = {
  post: PostInputType;
};


export type EzyFindMutationCreatePostAttachmentArgs = {
  postAttachment: PostAttachmentInputType;
};


export type EzyFindMutationCreatePostReplyArgs = {
  postReply: PostReplyInputType;
};


export type EzyFindMutationCreatePostReplyAttachmentArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postReplyAttachment: PostReplyAttachmentInputType;
};


export type EzyFindMutationCreatePrdBidArgs = {
  prdBid: PrdBidInputType;
};


export type EzyFindMutationCreatePrdCategoryArgs = {
  prdCategory: PrdCategoryInputType;
};


export type EzyFindMutationCreatePrdHireArgs = {
  prdHire: PrdHireInputType;
};


export type EzyFindMutationCreatePrdOrderDetailsArgs = {
  prdOrderDetails: PrdOrderDetailsInputType;
};


export type EzyFindMutationCreatePrdOrderPaymentArgs = {
  prdOrderPayment: PrdOrderPaymentInputType;
};


export type EzyFindMutationCreatePrdOrderStatusArgs = {
  prdOrderStatus: PrdOrderStatusInputType;
};


export type EzyFindMutationCreatePrdOrderStatusTypeArgs = {
  prdOrderStatusType: PrdOrderStatusTypeInputType;
};


export type EzyFindMutationCreatePrdOrdersArgs = {
  prdOrders: PrdOrdersInputType;
};


export type EzyFindMutationCreatePrdProductsArgs = {
  docs?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  prdProducts: PrdProductsInputType;
};


export type EzyFindMutationCreatePrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationCreatePrdSubCategoryArgs = {
  prdSubCategory: PrdSubCategoryInputType;
};


export type EzyFindMutationCreateProductDocumentArgs = {
  docs?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mapProductDocument: MapProductDocumentInputType;
};


export type EzyFindMutationCreateProductImageArgs = {
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mapProductImages: MapProductImagesInputType;
};


export type EzyFindMutationCreateSystemRoleArgs = {
  systemRole: SystemRoleInputType;
};


export type EzyFindMutationCreateSystemUserArgs = {
  systemUser: SystemUserInputType;
};


export type EzyFindMutationDeleteDevFormsArgs = {
  devFormsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteElmahErrorArgs = {
  elmahErrorId: Scalars['Guid']['input'];
};


export type EzyFindMutationDeleteJobArgs = {
  jobId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCategoryAttributesArgs = {
  mapCategoryAttributesId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyAreaArgs = {
  mapCompanyAreaId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyAuditLogArgs = {
  mapCompanyAuditLogId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyCategoryArgs = {
  mapCompanyCategoryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyDocumentArgs = {
  mapCompanyDocumentId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyEmailArgs = {
  mapCompanyEmailId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyMagazineAdArgs = {
  mapCompanyMagazineAdId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyPackageArgs = {
  mapCompanyPackageId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyPaymentArgs = {
  mapCompanyPaymentId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyProvideArgs = {
  mapCompanyProvideId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanySeekArgs = {
  mapCompanySeekId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyTaskArgs = {
  mapCompanyTaskId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCompanyUsersArgs = {
  mapCompanyUsersId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapCustomerEnquiryUploadArgs = {
  mapCustomerEnquiryUploadId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapEflyersUploadArgs = {
  mapEflyersUploadId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapItemRequestAreaArgs = {
  mapItemRequestAreaId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapItemRequestCategoryArgs = {
  mapItemRequestCategoryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapItemRequestCategoryAttributeArgs = {
  mapItemRequestCategoryAttributeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapItemRequestUploadArgs = {
  mapItemRequestUploadId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapItemResponseUploadArgs = {
  mapItemResponseUploadId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapPackageAttributesArgs = {
  mapPackageAttributesId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapSettingsRoleArgs = {
  mapSettingsRoleId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapSpecialUploadArgs = {
  mapSpecialUploadId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapUserRoleRightsArgs = {
  mapUserRoleRightsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMapUsersSettingsArgs = {
  mapUsersSettingsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstBeestatusArgs = {
  mstBeestatusId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCategoryArgs = {
  mstCategoryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCategoryAttributeArgs = {
  mstCategoryAttributeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCategoryAttributeDataTypeArgs = {
  mstCategoryAttributeDataTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCityArgs = {
  mstCityId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCmsArgs = {
  mstCmsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCompanyArgs = {
  mstCompany: MstCompanyInputType;
};


export type EzyFindMutationDeleteMstCompanyDocumentTypeArgs = {
  mstCompanyDocumentTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCompanyStatusArgs = {
  mstCompanyStatusId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCompanyTaskListArgs = {
  mstCompanyTaskListId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstConfigurationArgs = {
  mstConfigurationId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstContactFormArgs = {
  mstContactFormId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCountryArgs = {
  mstCountryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmCustomerArgs = {
  mstCrmCustomerId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmCustomerCommentArgs = {
  mstCrmCustomerCommentId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmInventoryArgs = {
  mstCrmInventoryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmInventoryTypeArgs = {
  mstCrmInventoryTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmInvoiceArgs = {
  mstCrmInvoiceId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmInvoiceDetailsArgs = {
  mstCrmInvoiceDetailsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmQuoteArgs = {
  mstCrmQuoteId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCrmQuoteDetailsArgs = {
  mstCrmQuoteDetailsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCustomerEnquiryArgs = {
  mstCustomerEnquiryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstCustomerEnquiryResponseArgs = {
  mstCustomerEnquiryResponseId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstDocumentStatusArgs = {
  mstDocumentStatusId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstDomainArgs = {
  mstDomainId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstEFlyersArgs = {
  mstEFlyersId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstEmailStackArgs = {
  mstEmailStackId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstFavouritesArgs = {
  mstFavouritesId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstFranchiseeArgs = {
  mstFranchiseeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstItemRequestArgs = {
  mstItemRequestId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstItemResponseArgs = {
  mstItemResponseId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstKeywordsArgs = {
  mstKeywordsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstMagazineAdArgs = {
  mstMagazineAdId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstMagazineAdTypeArgs = {
  mstMagazineAdTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstMagazineSectionArgs = {
  mstMagazineSectionId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstMailTypeArgs = {
  mstMailTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstNotificationStackArgs = {
  mstNotificationStackId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstPackageArgs = {
  mstPackageId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstPackageAttributeArgs = {
  mstPackageAttributeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstPaymentModeArgs = {
  mstPaymentModeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstPaymentStatusArgs = {
  mstPaymentStatusId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstPaymentTypeArgs = {
  mstPaymentTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstPeriodTypeArgs = {
  mstPeriodTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstProvinceArgs = {
  mstProvinceId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstQuantityTypeArgs = {
  mstQuantityTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstRatingArgs = {
  mstRatingId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstSettingTypeArgs = {
  mstSettingTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstSettingsArgs = {
  mstSettingsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstSpecialsArgs = {
  mstSpecialsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstStatusArgs = {
  mstStatusId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstSuburbArgs = {
  mstSuburbId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstUserArgs = {
  userId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstUserRoleArgs = {
  mstUserRoleId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstUserStatusArgs = {
  mstUserStatusId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstUsersArgs = {
  mstUsers: MstUsersInputType;
};


export type EzyFindMutationDeleteMstVersionArgs = {
  mstVersionId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteMstVolumeTypeArgs = {
  mstVolumeTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePostArgs = {
  postId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePostAttachmentArgs = {
  postAttachmentId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePostReplyArgs = {
  postReplyId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePostReplyAttachmentArgs = {
  postReplyAttachmentId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdBidArgs = {
  prdBidId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdCategoryArgs = {
  prdCategoryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdHireArgs = {
  prdHireId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdOrderDetailsArgs = {
  prdOrderDetailsId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdOrderPaymentArgs = {
  prdOrderPaymentId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdOrderStatusArgs = {
  prdOrderStatusId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdOrderStatusTypeArgs = {
  prdOrderStatusTypeId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdOrdersArgs = {
  prdOrdersId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdProductsArgs = {
  prdProducts: PrdProductsInputType;
};


export type EzyFindMutationDeletePrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationDeletePrdShoppingCartIdArgs = {
  prdShoppingCartId: Scalars['Int']['input'];
};


export type EzyFindMutationDeletePrdSubCategoryArgs = {
  prdSubCategoryId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteProductDocumentArgs = {
  mapProductDocument: MapProductDocumentInputType;
};


export type EzyFindMutationDeleteProductImageArgs = {
  mapProductImages: MapProductImagesInputType;
};


export type EzyFindMutationDeleteSystemRoleArgs = {
  systemRoleId: Scalars['Int']['input'];
};


export type EzyFindMutationDeleteSystemUserArgs = {
  systemUserId: Scalars['Int']['input'];
};


export type EzyFindMutationForgetChangePasswordArgs = {
  forgetPass: ForgetChangePasswordInputType;
};


export type EzyFindMutationOAuthMutArgs = {
  jti?: InputMaybe<Scalars['String']['input']>;
};


export type EzyFindMutationPostMstItemRequestArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mstItemRequest: MstItemRequestInputType;
};


export type EzyFindMutationPostMstItemRequestAttachmentArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mapItemRequestUpload: MapItemRequestUploadInputType;
};


export type EzyFindMutationPostMstItemResponseArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mstItemResponse: MstItemResponseInputType;
};


export type EzyFindMutationPostMstRatingArgs = {
  mstRating: MstRatingInputType;
};


export type EzyFindMutationPostPostArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  post: PostInputType;
};


export type EzyFindMutationPostPrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationPostPrdShoppingCartOptimizedArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationPostReplyArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  post: PostReplyInputType;
};


export type EzyFindMutationPostUserActivityArgs = {
  mapUserActivity: MapUserActivityInputType;
};


export type EzyFindMutationPostUserAddressArgs = {
  mstUserAddress: MstUserAddressInputType;
};


export type EzyFindMutationPostVehicleArgs = {
  mstVehicle: PostVehicleInputType;
};


export type EzyFindMutationRegisterBusinessArgs = {
  userDto: MstUserDtoInputType;
};


export type EzyFindMutationRegisterUserArgs = {
  platform: Scalars['Int']['input'];
  userDto: MstUserDtoInputType;
};


export type EzyFindMutationSSoLoginMutArgs = {
  jti?: InputMaybe<Scalars['String']['input']>;
};


export type EzyFindMutationUpdateDevFormsArgs = {
  devForms: DevFormsInputType;
};


export type EzyFindMutationUpdateElmahErrorArgs = {
  elmahError: ElmahErrorInputType;
};


export type EzyFindMutationUpdateJobArgs = {
  job: JobInputType;
};


export type EzyFindMutationUpdateMapCategoryAttributesArgs = {
  mapCategoryAttributes: MapCategoryAttributesInputType;
};


export type EzyFindMutationUpdateMapCompanyAreaArgs = {
  mapCompanyArea: MapCompanyAreaInputType;
};


export type EzyFindMutationUpdateMapCompanyAuditLogArgs = {
  mapCompanyAuditLog: MapCompanyAuditLogInputType;
};


export type EzyFindMutationUpdateMapCompanyCategoryArgs = {
  mapCompanyCategory: MapCompanyCategoryInputType;
};


export type EzyFindMutationUpdateMapCompanyDocumentArgs = {
  mapCompanyDocument: MapCompanyDocumentInputType;
};


export type EzyFindMutationUpdateMapCompanyEmailArgs = {
  mapCompanyEmail: MapCompanyEmailInputType;
};


export type EzyFindMutationUpdateMapCompanyMagazineAdArgs = {
  mapCompanyMagazineAd: MapCompanyMagazineAdInputType;
};


export type EzyFindMutationUpdateMapCompanyPackageArgs = {
  mapCompanyPackage: MapCompanyPackageInputType;
};


export type EzyFindMutationUpdateMapCompanyPaymentArgs = {
  mapCompanyPayment: MapCompanyPaymentInputType;
};


export type EzyFindMutationUpdateMapCompanyProvideArgs = {
  mapCompanyProvide: MapCompanyProvideInputType;
};


export type EzyFindMutationUpdateMapCompanySeekArgs = {
  mapCompanySeek: MapCompanySeekInputType;
};


export type EzyFindMutationUpdateMapCompanyTaskArgs = {
  mapCompanyTask: MapCompanyTaskInputType;
};


export type EzyFindMutationUpdateMapCompanyUsersArgs = {
  mapCompanyUsers: MapCompanyUsersInputType;
};


export type EzyFindMutationUpdateMapCustomerEnquiryUploadArgs = {
  mapCustomerEnquiryUpload: MapCustomerEnquiryUploadInputType;
};


export type EzyFindMutationUpdateMapEflyersUploadArgs = {
  mapEflyersUpload: MapEflyersUploadInputType;
};


export type EzyFindMutationUpdateMapItemRequestAreaArgs = {
  mapItemRequestArea: MapItemRequestAreaInputType;
};


export type EzyFindMutationUpdateMapItemRequestCategoryArgs = {
  mapItemRequestCategory: MapItemRequestCategoryInputType;
};


export type EzyFindMutationUpdateMapItemRequestCategoryAttributeArgs = {
  mapItemRequestCategoryAttribute: MapItemRequestCategoryAttributeInputType;
};


export type EzyFindMutationUpdateMapItemRequestUploadArgs = {
  mapItemRequestUpload: MapItemRequestUploadInputType;
};


export type EzyFindMutationUpdateMapItemResponseUploadArgs = {
  mapItemResponseUpload: MapItemResponseUploadInputType;
};


export type EzyFindMutationUpdateMapPackageAttributesArgs = {
  mapPackageAttributes: MapPackageAttributesInputType;
};


export type EzyFindMutationUpdateMapSettingsRoleArgs = {
  mapSettingsRole: MapSettingsRoleInputType;
};


export type EzyFindMutationUpdateMapSpecialUploadArgs = {
  mapSpecialUpload: MapSpecialUploadInputType;
};


export type EzyFindMutationUpdateMapUserRoleRightsArgs = {
  mapUserRoleRights: MapUserRoleRightsInputType;
};


export type EzyFindMutationUpdateMapUsersSettingsArgs = {
  mapUsersSettings: MapUsersSettingsInputType;
};


export type EzyFindMutationUpdateMstBeestatusArgs = {
  mstBeestatus: MstBeestatusInputType;
};


export type EzyFindMutationUpdateMstCategoryArgs = {
  mstCategory: MstCategoryInputType;
};


export type EzyFindMutationUpdateMstCategoryAttributeArgs = {
  mstCategoryAttribute: MstCategoryAttributeInputType;
};


export type EzyFindMutationUpdateMstCategoryAttributeDataTypeArgs = {
  mstCategoryAttributeDataType: MstCategoryAttributeDataTypeInputType;
};


export type EzyFindMutationUpdateMstCityArgs = {
  mstCity: MstCityInputType;
};


export type EzyFindMutationUpdateMstCmsArgs = {
  mstCms: MstCmsInputType;
};


export type EzyFindMutationUpdateMstCompanyArgs = {
  image?: InputMaybe<Scalars['Upload']['input']>;
  mstCompany: MstCompanyInputType;
};


export type EzyFindMutationUpdateMstCompanyDocumentTypeArgs = {
  mstCompanyDocumentType: MstCompanyDocumentTypeInputType;
};


export type EzyFindMutationUpdateMstCompanyStatusArgs = {
  mstCompanyStatus: MstCompanyStatusInputType;
};


export type EzyFindMutationUpdateMstCompanyTaskListArgs = {
  mstCompanyTaskList: MstCompanyTaskListInputType;
};


export type EzyFindMutationUpdateMstConfigurationArgs = {
  mstConfiguration: MstConfigurationInputType;
};


export type EzyFindMutationUpdateMstContactFormArgs = {
  mstContactForm: MstContactFormInputType;
};


export type EzyFindMutationUpdateMstCountryArgs = {
  mstCountry: MstCountryInputType;
};


export type EzyFindMutationUpdateMstCrmCustomerArgs = {
  mstCrmCustomer: MstCrmCustomerInputType;
};


export type EzyFindMutationUpdateMstCrmCustomerCommentArgs = {
  mstCrmCustomerComment: MstCrmCustomerCommentInputType;
};


export type EzyFindMutationUpdateMstCrmInventoryArgs = {
  mstCrmInventory: MstCrmInventoryInputType;
};


export type EzyFindMutationUpdateMstCrmInventoryTypeArgs = {
  mstCrmInventoryType: MstCrmInventoryTypeInputType;
};


export type EzyFindMutationUpdateMstCrmInvoiceArgs = {
  mstCrmInvoice: MstCrmInvoiceInputType;
};


export type EzyFindMutationUpdateMstCrmInvoiceDetailsArgs = {
  mstCrmInvoiceDetails: MstCrmInvoiceDetailsInputType;
};


export type EzyFindMutationUpdateMstCrmQuoteArgs = {
  mstCrmQuote: MstCrmQuoteInputType;
};


export type EzyFindMutationUpdateMstCrmQuoteDetailsArgs = {
  mstCrmQuoteDetails: MstCrmQuoteDetailsInputType;
};


export type EzyFindMutationUpdateMstCustomerEnquiryArgs = {
  mstCustomerEnquiry: MstCustomerEnquiryInputType;
};


export type EzyFindMutationUpdateMstCustomerEnquiryResponseArgs = {
  mstCustomerEnquiryResponse: MstCustomerEnquiryResponseInputType;
};


export type EzyFindMutationUpdateMstDocumentStatusArgs = {
  mstDocumentStatus: MstDocumentStatusInputType;
};


export type EzyFindMutationUpdateMstDomainArgs = {
  mstDomain: MstDomainInputType;
};


export type EzyFindMutationUpdateMstEFlyersArgs = {
  mstEFlyers: MstEFlyersInputType;
};


export type EzyFindMutationUpdateMstEmailStackArgs = {
  mstEmailStack: MstEmailStackInputType;
};


export type EzyFindMutationUpdateMstFavouritesArgs = {
  mstFavourites: MstFavouritesInputType;
};


export type EzyFindMutationUpdateMstFranchiseeArgs = {
  mstFranchisee: MstFranchiseeInputType;
};


export type EzyFindMutationUpdateMstItemRequestArgs = {
  mstItemRequest: MstItemRequestInputType;
};


export type EzyFindMutationUpdateMstItemResponseArgs = {
  mstItemResponse: MstItemResponseInputType;
};


export type EzyFindMutationUpdateMstKeywordsArgs = {
  mstKeywords: MstKeywordsInputType;
};


export type EzyFindMutationUpdateMstMagazineAdArgs = {
  mstMagazineAd: MstMagazineAdInputType;
};


export type EzyFindMutationUpdateMstMagazineAdTypeArgs = {
  mstMagazineAdType: MstMagazineAdTypeInputType;
};


export type EzyFindMutationUpdateMstMagazineSectionArgs = {
  mstMagazineSection: MstMagazineSectionInputType;
};


export type EzyFindMutationUpdateMstMailTypeArgs = {
  mstMailType: MstMailTypeInputType;
};


export type EzyFindMutationUpdateMstNotificationStackArgs = {
  mstNotificationStack: MstNotificationStackInputType;
};


export type EzyFindMutationUpdateMstPackageArgs = {
  mstPackage: MstPackageInputType;
};


export type EzyFindMutationUpdateMstPackageAttributeArgs = {
  mstPackageAttribute: MstPackageAttributeInputType;
};


export type EzyFindMutationUpdateMstPaymentModeArgs = {
  mstPaymentMode: MstPaymentModeInputType;
};


export type EzyFindMutationUpdateMstPaymentStatusArgs = {
  mstPaymentStatus: MstPaymentStatusInputType;
};


export type EzyFindMutationUpdateMstPaymentTypeArgs = {
  mstPaymentType: MstPaymentTypeInputType;
};


export type EzyFindMutationUpdateMstPeriodTypeArgs = {
  mstPeriodType: MstPeriodTypeInputType;
};


export type EzyFindMutationUpdateMstProvinceArgs = {
  mstProvince: MstProvinceInputType;
};


export type EzyFindMutationUpdateMstQuantityTypeArgs = {
  mstQuantityType: MstQuantityTypeInputType;
};


export type EzyFindMutationUpdateMstRatingArgs = {
  mstRating: MstRatingInputType;
};


export type EzyFindMutationUpdateMstSettingTypeArgs = {
  mstSettingType: MstSettingTypeInputType;
};


export type EzyFindMutationUpdateMstSettingsArgs = {
  mstSettings: MstSettingsInputType;
};


export type EzyFindMutationUpdateMstSpecialsArgs = {
  mstSpecials: MstSpecialsInputType;
};


export type EzyFindMutationUpdateMstStatusArgs = {
  mstStatus: MstStatusInputType;
};


export type EzyFindMutationUpdateMstSuburbArgs = {
  mstSuburb: MstSuburbInputType;
};


export type EzyFindMutationUpdateMstUserLocationArgs = {
  mstUserInfo: MstUsersInputType;
};


export type EzyFindMutationUpdateMstUserRoleArgs = {
  mstUserRole: MstUserRoleInputType;
};


export type EzyFindMutationUpdateMstUserStatusArgs = {
  mstUserStatus: MstUserStatusInputType;
};


export type EzyFindMutationUpdateMstUsersArgs = {
  files?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  mstUsers: MstUsersInputType;
};


export type EzyFindMutationUpdateMstVersionArgs = {
  mstVersion: MstVersionInputType;
};


export type EzyFindMutationUpdateMstVolumeTypeArgs = {
  mstVolumeType: MstVolumeTypeInputType;
};


export type EzyFindMutationUpdatePostArgs = {
  post: PostInputType;
};


export type EzyFindMutationUpdatePostAttachmentArgs = {
  postAttachment: PostAttachmentInputType;
};


export type EzyFindMutationUpdatePostReplyArgs = {
  postReply: PostReplyInputType;
};


export type EzyFindMutationUpdatePostReplyAttachmentArgs = {
  postReplyAttachment: PostReplyAttachmentInputType;
};


export type EzyFindMutationUpdatePrdBidArgs = {
  prdBid: PrdBidInputType;
};


export type EzyFindMutationUpdatePrdCategoryArgs = {
  prdCategory: PrdCategoryInputType;
};


export type EzyFindMutationUpdatePrdHireArgs = {
  prdHire: PrdBidInputType;
};


export type EzyFindMutationUpdatePrdOrderDetailsArgs = {
  prdOrderDetails: PrdOrderDetailsInputType;
};


export type EzyFindMutationUpdatePrdOrderPaymentArgs = {
  prdOrderPayment: PrdOrderPaymentInputType;
};


export type EzyFindMutationUpdatePrdOrderStatusArgs = {
  prdOrderStatus: PrdOrderStatusInputType;
};


export type EzyFindMutationUpdatePrdOrderStatusTypeArgs = {
  prdOrderStatusType: PrdOrderStatusTypeInputType;
};


export type EzyFindMutationUpdatePrdOrdersArgs = {
  prdOrders: PrdOrdersInputType;
};


export type EzyFindMutationUpdatePrdProductsArgs = {
  docs?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['Upload']['input']>>>;
  prdProducts: PrdProductsInputType;
};


export type EzyFindMutationUpdatePrdShoppingCartArgs = {
  prdShoppingCart: PrdShoppingCartInputType;
};


export type EzyFindMutationUpdatePrdSubCategoryArgs = {
  prdSubCategory: PrdSubCategoryInputType;
};


export type EzyFindMutationUpdateProductDocumentArgs = {
  doc?: InputMaybe<Scalars['Upload']['input']>;
  mapProductDocument: MapProductDocumentInputType;
};


export type EzyFindMutationUpdateProductImageArgs = {
  image?: InputMaybe<Scalars['Upload']['input']>;
  mapProductImages: MapProductImagesInputType;
};


export type EzyFindMutationUpdateSystemRoleArgs = {
  systemRole: SystemRoleInputType;
};


export type EzyFindMutationUpdateSystemUserArgs = {
  systemUser: SystemUserInputType;
};


export type EzyFindMutationUpgradeBusinessPackageArgs = {
  userDto: MstUserDtoInputType;
};

export type ForgetChangePasswordInputType = {
  confirmPassword?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gUID?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type JobInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  domainId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  jobId: Scalars['Int']['input'];
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  postedDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCategoryId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type JobType = {
  __typename?: 'JobType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domainId?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  jobId: Scalars['Int']['output'];
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  postedDate?: Maybe<Scalars['DateTime']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleCategoryId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type JwtTokenType = {
  __typename?: 'JwtTokenType';
  validTo?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type MapCategoryAttributesInputType = {
  catAttribute?: InputMaybe<MstCategoryAttributeInputType>;
  catAttributeId?: InputMaybe<Scalars['Int']['input']>;
  category?: InputMaybe<MstCategoryInputType>;
  categoryAttributeId: Scalars['Int']['input'];
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapItemRequestCategoryAttribute?: InputMaybe<Array<InputMaybe<MapItemRequestCategoryAttributeInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MapCategoryAttributesType = {
  __typename?: 'MapCategoryAttributesType';
  catAttribute?: Maybe<MstCategoryAttributeType>;
  catAttributeId?: Maybe<Scalars['Int']['output']>;
  category?: Maybe<MstCategoryType>;
  categoryAttributeId: Scalars['Int']['output'];
  categoryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapItemRequestCategoryAttribute?: Maybe<Array<Maybe<MapItemRequestCategoryAttributeType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MapCompanyAreaInputType = {
  city?: InputMaybe<MstCityInputType>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']['input']>;
  companyAreaId: Scalars['Int']['input'];
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  province?: InputMaybe<MstProvinceInputType>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
  suburb?: InputMaybe<MstSuburbInputType>;
  suburbId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapCompanyAreaType = {
  __typename?: 'MapCompanyAreaType';
  city?: Maybe<MstCityType>;
  cityId?: Maybe<Scalars['Int']['output']>;
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  companyAreaId: Scalars['Int']['output'];
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  province?: Maybe<MstProvinceType>;
  provinceId?: Maybe<Scalars['Int']['output']>;
  suburb?: Maybe<MstSuburbType>;
  suburbId?: Maybe<Scalars['Int']['output']>;
};

export type MapCompanyAuditLogInputType = {
  auditDate?: InputMaybe<Scalars['DateTime']['input']>;
  auditLog?: InputMaybe<Scalars['String']['input']>;
  auditLogId: Scalars['Int']['input'];
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapCompanyAuditLogType = {
  __typename?: 'MapCompanyAuditLogType';
  auditDate?: Maybe<Scalars['DateTime']['output']>;
  auditLog?: Maybe<Scalars['String']['output']>;
  auditLogId: Scalars['Int']['output'];
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MapCompanyCategoryInputType = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']['input']>;
  companyCategoryId: Scalars['Int']['input'];
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MapCompanyCategoryType = {
  __typename?: 'MapCompanyCategoryType';
  categoryId?: Maybe<Scalars['Int']['output']>;
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  companyCategoryId: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MapCompanyDocumentInputType = {
  aboutDocument?: InputMaybe<Scalars['String']['input']>;
  compDocId: Scalars['Int']['input'];
  company?: InputMaybe<Array<InputMaybe<MstCompanyInputType>>>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  documentPath?: InputMaybe<Scalars['String']['input']>;
  documentStatus?: InputMaybe<Array<InputMaybe<MstDocumentStatusInputType>>>;
  documentStatusId?: InputMaybe<Scalars['Int']['input']>;
  documentType?: InputMaybe<Array<InputMaybe<MstCompanyDocumentTypeInputType>>>;
  documentTypeId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  rejectReason?: InputMaybe<Scalars['String']['input']>;
};

export type MapCompanyDocumentType = {
  __typename?: 'MapCompanyDocumentType';
  aboutDocument?: Maybe<Scalars['String']['output']>;
  compDocId: Scalars['Int']['output'];
  company?: Maybe<Array<Maybe<MstCompanyType>>>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  documentPath?: Maybe<Scalars['String']['output']>;
  documentStatus?: Maybe<Array<Maybe<MstDocumentStatusType>>>;
  documentStatusId?: Maybe<Scalars['Int']['output']>;
  documentType?: Maybe<Array<Maybe<MstCompanyDocumentTypeType>>>;
  documentTypeId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  rejectReason?: Maybe<Scalars['String']['output']>;
};

export type MapCompanyEmailInputType = {
  compMailId: Scalars['Int']['input'];
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MapCompanyEmailType = {
  __typename?: 'MapCompanyEmailType';
  compMailId: Scalars['Int']['output'];
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MapCompanyMagazineAdInputType = {
  compMagId: Scalars['Int']['input'];
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  magazineAd?: InputMaybe<Array<InputMaybe<MstMagazineAdInputType>>>;
  magazineAdId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  purchaseDate?: InputMaybe<Scalars['DateTime']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
  totalAmount?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MapCompanyMagazineAdType = {
  __typename?: 'MapCompanyMagazineAdType';
  compMagId: Scalars['Int']['output'];
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  magazineAd?: Maybe<Array<Maybe<MstMagazineAdType>>>;
  magazineAdId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  price?: Maybe<Scalars['Decimal']['output']>;
  purchaseDate?: Maybe<Scalars['DateTime']['output']>;
  qty?: Maybe<Scalars['Int']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
};

export type MapCompanyPackageInputType = {
  addCategory?: InputMaybe<Scalars['Boolean']['input']>;
  catalogueAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  catalogueUsedCount?: InputMaybe<Scalars['Int']['input']>;
  categoryAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  categoryNotExist?: InputMaybe<Scalars['Boolean']['input']>;
  categoryUsedCount?: InputMaybe<Scalars['Int']['input']>;
  compPackageId: Scalars['Int']['input'];
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  emailAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  emailUsedCount?: InputMaybe<Scalars['Int']['input']>;
  followBusinessAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  followBusinessUsedCount?: InputMaybe<Scalars['Int']['input']>;
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  keywordAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  keywordUsedCount?: InputMaybe<Scalars['Int']['input']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  mapCompanyCategory?: InputMaybe<Array<InputMaybe<MapCompanyCategoryInputType>>>;
  mapCompanyEmail?: InputMaybe<Array<InputMaybe<MapCompanyEmailInputType>>>;
  mapCompanyPayment?: InputMaybe<Array<InputMaybe<MapCompanyPaymentInputType>>>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  package?: InputMaybe<MstPackageInputType>;
  packageId?: InputMaybe<Scalars['Int']['input']>;
  requestAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  requestUsedCount?: InputMaybe<Scalars['Int']['input']>;
  salesLeadAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  salesLeadUsedCount?: InputMaybe<Scalars['Int']['input']>;
  specialAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  specialUsedCount?: InputMaybe<Scalars['Int']['input']>;
  timeDelay: Scalars['Int']['input'];
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
  usersAllowedCount?: InputMaybe<Scalars['Int']['input']>;
  usersUsedCount?: InputMaybe<Scalars['Int']['input']>;
};

export type MapCompanyPackageType = {
  __typename?: 'MapCompanyPackageType';
  addCategory?: Maybe<Scalars['Boolean']['output']>;
  catalogueAllowedCount?: Maybe<Scalars['Int']['output']>;
  catalogueUsedCount?: Maybe<Scalars['Int']['output']>;
  categoryAllowedCount?: Maybe<Scalars['Int']['output']>;
  categoryNotExist?: Maybe<Scalars['Boolean']['output']>;
  categoryUsedCount?: Maybe<Scalars['Int']['output']>;
  compPackageId: Scalars['Int']['output'];
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  emailAllowedCount?: Maybe<Scalars['Int']['output']>;
  emailUsedCount?: Maybe<Scalars['Int']['output']>;
  followBusinessAllowedCount?: Maybe<Scalars['Int']['output']>;
  followBusinessUsedCount?: Maybe<Scalars['Int']['output']>;
  fromDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  keywordAllowedCount?: Maybe<Scalars['Int']['output']>;
  keywordUsedCount?: Maybe<Scalars['Int']['output']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  mapCompanyCategory?: Maybe<Array<Maybe<MapCompanyCategoryType>>>;
  mapCompanyEmail?: Maybe<Array<Maybe<MapCompanyEmailType>>>;
  mapCompanyPayment?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  package?: Maybe<MstPackageType>;
  packageId?: Maybe<Scalars['Int']['output']>;
  requestAllowedCount?: Maybe<Scalars['Int']['output']>;
  requestUsedCount?: Maybe<Scalars['Int']['output']>;
  salesLeadAllowedCount?: Maybe<Scalars['Int']['output']>;
  salesLeadUsedCount?: Maybe<Scalars['Int']['output']>;
  specialAllowedCount?: Maybe<Scalars['Int']['output']>;
  specialUsedCount?: Maybe<Scalars['Int']['output']>;
  timeDelay: Scalars['Int']['output'];
  toDate?: Maybe<Scalars['DateTime']['output']>;
  usersAllowedCount?: Maybe<Scalars['Int']['output']>;
  usersUsedCount?: Maybe<Scalars['Int']['output']>;
};

export type MapCompanyPaymentInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']['input']>;
  compPaymentId: Scalars['Int']['input'];
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']['input']>;
  invoiceNumber?: InputMaybe<Scalars['String']['input']>;
  invoicePath?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  payFastToken?: InputMaybe<Scalars['String']['input']>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  paymentMode?: InputMaybe<MstPaymentModeInputType>;
  paymentModeId?: InputMaybe<Scalars['Int']['input']>;
  paymentStatus?: InputMaybe<MstPaymentStatusInputType>;
  paymentStatusId?: InputMaybe<Scalars['Int']['input']>;
  totalAmount?: InputMaybe<Scalars['Decimal']['input']>;
  totalAmountUsd?: InputMaybe<Scalars['Decimal']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
};

export type MapCompanyPaymentType = {
  __typename?: 'MapCompanyPaymentType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  compPaymentId: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  invoiceDate?: Maybe<Scalars['DateTime']['output']>;
  invoiceNumber?: Maybe<Scalars['String']['output']>;
  invoicePath?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  payFastToken?: Maybe<Scalars['String']['output']>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentMode?: Maybe<MstPaymentModeType>;
  paymentModeId?: Maybe<Scalars['Int']['output']>;
  paymentStatus?: Maybe<MstPaymentStatusType>;
  paymentStatusId?: Maybe<Scalars['Int']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  totalAmountUsd?: Maybe<Scalars['Decimal']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
};

export type MapCompanyProvideInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  keyword?: InputMaybe<MstKeywordsInputType>;
  keywordId: Scalars['Int']['input'];
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  periodType?: InputMaybe<MstPeriodTypeInputType>;
  periodTypeId?: InputMaybe<Scalars['Int']['input']>;
  periodValue?: InputMaybe<Scalars['Int']['input']>;
  provideKeywordId: Scalars['Int']['input'];
  quantityType?: InputMaybe<MstQuantityTypeInputType>;
  quantityTypeId?: InputMaybe<Scalars['Int']['input']>;
  volumeType?: InputMaybe<MstVolumeTypeInputType>;
  volumeTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapCompanyProvideType = {
  __typename?: 'MapCompanyProvideType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  keyword?: Maybe<MstKeywordsType>;
  keywordId: Scalars['Int']['output'];
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  periodType?: Maybe<MstPeriodTypeType>;
  periodTypeId?: Maybe<Scalars['Int']['output']>;
  periodValue?: Maybe<Scalars['Int']['output']>;
  provideKeywordId: Scalars['Int']['output'];
  quantityType?: Maybe<MstQuantityTypeType>;
  quantityTypeId?: Maybe<Scalars['Int']['output']>;
  volumeType?: Maybe<MstVolumeTypeType>;
  volumeTypeId?: Maybe<Scalars['Int']['output']>;
};

export type MapCompanySeekInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  keyword?: InputMaybe<MstKeywordsInputType>;
  keywordId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  periodType?: InputMaybe<MstPeriodTypeInputType>;
  periodTypeId?: InputMaybe<Scalars['Int']['input']>;
  periodValue?: InputMaybe<Scalars['Int']['input']>;
  quantityType?: InputMaybe<MstQuantityTypeInputType>;
  quantityTypeId?: InputMaybe<Scalars['Int']['input']>;
  seekKeywordId: Scalars['Int']['input'];
  volumeType?: InputMaybe<MstVolumeTypeInputType>;
  volumeTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapCompanySeekType = {
  __typename?: 'MapCompanySeekType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  keyword?: Maybe<MstKeywordsType>;
  keywordId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  periodType?: Maybe<MstPeriodTypeType>;
  periodTypeId?: Maybe<Scalars['Int']['output']>;
  periodValue?: Maybe<Scalars['Int']['output']>;
  quantityType?: Maybe<MstQuantityTypeType>;
  quantityTypeId?: Maybe<Scalars['Int']['output']>;
  seekKeywordId: Scalars['Int']['output'];
  volumeType?: Maybe<MstVolumeTypeType>;
  volumeTypeId?: Maybe<Scalars['Int']['output']>;
};

export type MapCompanyTaskInputType = {
  compTaskId: Scalars['Int']['input'];
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  completionDate?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  task?: InputMaybe<MstCompanyTaskListInputType>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapCompanyTaskType = {
  __typename?: 'MapCompanyTaskType';
  compTaskId: Scalars['Int']['output'];
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  completed?: Maybe<Scalars['Boolean']['output']>;
  completionDate?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  task?: Maybe<MstCompanyTaskListType>;
  taskId?: Maybe<Scalars['Int']['output']>;
};

export type MapCompanyUsersInputType = {
  compPackage?: InputMaybe<MapCompanyPackageInputType>;
  compPackageId?: InputMaybe<Scalars['Int']['input']>;
  companyUserId: Scalars['Int']['input'];
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  getRequests?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isMainBusinessUser?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapCompanyUsersType = {
  __typename?: 'MapCompanyUsersType';
  compPackage?: Maybe<MapCompanyPackageType>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  companyUserId: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  getRequests?: Maybe<Scalars['Boolean']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isMainBusinessUser?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MapCustomerEnquiryUploadInputType = {
  ceUploadId: Scalars['Int']['input'];
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  customerEnquiry?: InputMaybe<MstCustomerEnquiryInputType>;
  customerEnquiryId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  thumbNailPath?: InputMaybe<Scalars['String']['input']>;
  uploadPath?: InputMaybe<Scalars['String']['input']>;
};

export type MapCustomerEnquiryUploadType = {
  __typename?: 'MapCustomerEnquiryUploadType';
  ceUploadId: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customerEnquiry?: Maybe<MstCustomerEnquiryType>;
  customerEnquiryId?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  thumbNailPath?: Maybe<Scalars['String']['output']>;
  uploadPath?: Maybe<Scalars['String']['output']>;
};

export type MapEflyersUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  documentType?: InputMaybe<Scalars['Int']['input']>;
  eflyerUploadId: Scalars['Int']['input'];
  efm?: InputMaybe<MstUsersInputType>;
  efmid?: InputMaybe<Scalars['Int']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  thumbNailImagePath?: InputMaybe<Scalars['String']['input']>;
};

export type MapEflyersUploadType = {
  __typename?: 'MapEflyersUploadType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  documentType?: Maybe<Scalars['Int']['output']>;
  eflyerUploadId: Scalars['Int']['output'];
  efm?: Maybe<MstUsersType>;
  efmid?: Maybe<Scalars['Int']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  thumbNailImagePath?: Maybe<Scalars['String']['output']>;
};

export type MapItemRequestAreaInputType = {
  cityId?: InputMaybe<Scalars['Int']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  irAreaId: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
  suburbId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapItemRequestAreaType = {
  __typename?: 'MapItemRequestAreaType';
  cityId?: Maybe<Scalars['Int']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  irAreaId: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  itemRequestId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  provinceId?: Maybe<Scalars['Int']['output']>;
  suburbId?: Maybe<Scalars['Int']['output']>;
};

export type MapItemRequestCategoryAttributeInputType = {
  categoryAttribute?: InputMaybe<Array<InputMaybe<MapCategoryAttributesInputType>>>;
  categoryAttributeId?: InputMaybe<Scalars['Int']['input']>;
  categoryValue?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  irCategoryAttributeId: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  itemRequest?: InputMaybe<Array<InputMaybe<MstItemRequestInputType>>>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MapItemRequestCategoryAttributeType = {
  __typename?: 'MapItemRequestCategoryAttributeType';
  categoryAttribute?: Maybe<Array<Maybe<MapCategoryAttributesType>>>;
  categoryAttributeId?: Maybe<Scalars['Int']['output']>;
  categoryValue?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  irCategoryAttributeId: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  itemRequest?: Maybe<Array<Maybe<MstItemRequestType>>>;
  itemRequestId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MapItemRequestCategoryInputType = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  irCategoryId: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MapItemRequestCategoryType = {
  __typename?: 'MapItemRequestCategoryType';
  categoryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  irCategoryId: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  itemRequestId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MapItemRequestUploadDtoType = {
  __typename?: 'MapItemRequestUploadDtoType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  irUploadId?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  itemRequestId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  thumbNailPath?: Maybe<Scalars['String']['output']>;
  uploadPath?: Maybe<Scalars['String']['output']>;
};

export type MapItemRequestUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  irUploadId: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  thumbNailPath?: InputMaybe<Scalars['String']['input']>;
  uploadPath?: InputMaybe<Scalars['String']['input']>;
};

export type MapItemRequestUploadType = {
  __typename?: 'MapItemRequestUploadType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  irUploadId: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  itemRequestId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  thumbNailPath?: Maybe<Scalars['String']['output']>;
  uploadPath?: Maybe<Scalars['String']['output']>;
};

export type MapItemResponseUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  irUploadId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  itemResponse?: InputMaybe<Array<InputMaybe<MstItemResponseInputType>>>;
  itemResponseId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  uploadPath?: InputMaybe<Scalars['String']['input']>;
};

export type MapItemResponseUploadType = {
  __typename?: 'MapItemResponseUploadType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  irUploadId: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  itemResponse?: Maybe<Array<Maybe<MstItemResponseType>>>;
  itemResponseId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  uploadPath?: Maybe<Scalars['String']['output']>;
};

export type MapPackageAttributesInputType = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  package?: InputMaybe<MstPackageInputType>;
  packageDetailId: Scalars['Int']['input'];
  packageId?: InputMaybe<Scalars['Int']['input']>;
  pattribute?: InputMaybe<MstPackageAttributeInputType>;
  pattributeId?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type MapPackageAttributesType = {
  __typename?: 'MapPackageAttributesType';
  amount?: Maybe<Scalars['Decimal']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  package?: Maybe<MstPackageType>;
  packageDetailId: Scalars['Int']['output'];
  packageId?: Maybe<Scalars['Int']['output']>;
  pattribute?: Maybe<MstPackageAttributeType>;
  pattributeId?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type MapProductDocumentInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentId: Scalars['Int']['input'];
  documentName?: InputMaybe<Scalars['String']['input']>;
  documentPath?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapProductDocumentType = {
  __typename?: 'MapProductDocumentType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['Int']['output'];
  documentName?: Maybe<Scalars['String']['output']>;
  documentPath?: Maybe<Scalars['String']['output']>;
  product?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']['output']>;
};

export type MapProductImagesInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  imageId: Scalars['Int']['input'];
  imageName?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  product?: InputMaybe<PrdProductsInputType>;
  productId?: InputMaybe<Scalars['Int']['input']>;
};

export type MapProductImagesType = {
  __typename?: 'MapProductImagesType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  imageId: Scalars['Int']['output'];
  imageName?: Maybe<Scalars['String']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  product?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']['output']>;
  thumbNailPath?: Maybe<Scalars['String']['output']>;
};

export type MapSettingsRoleInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<MstUsersInputType>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  setting?: InputMaybe<MstUsersInputType>;
  settingId?: InputMaybe<Scalars['Int']['input']>;
  srid: Scalars['Int']['input'];
};

export type MapSettingsRoleType = {
  __typename?: 'MapSettingsRoleType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<MstUsersType>;
  roleId?: Maybe<Scalars['Int']['output']>;
  setting?: Maybe<MstUsersType>;
  settingId?: Maybe<Scalars['Int']['output']>;
  srid: Scalars['Int']['output'];
};

export type MapSpecialUploadInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  special?: InputMaybe<MstSpecialsInputType>;
  specialId?: InputMaybe<Scalars['Int']['input']>;
  specialUploadId: Scalars['Int']['input'];
  thumbNailPath?: InputMaybe<Scalars['String']['input']>;
  uploadPath?: InputMaybe<Scalars['String']['input']>;
};

export type MapSpecialUploadType = {
  __typename?: 'MapSpecialUploadType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  special?: Maybe<MstSpecialsType>;
  specialId?: Maybe<Scalars['Int']['output']>;
  specialUploadId: Scalars['Int']['output'];
  thumbNailPath?: Maybe<Scalars['String']['output']>;
  uploadPath?: Maybe<Scalars['String']['output']>;
};

export type MapUserActivityInputType = {
  action?: InputMaybe<Scalars['String']['input']>;
  activityID?: InputMaybe<Scalars['Int']['input']>;
  categoryID?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  domainCategoryID?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  searchText?: InputMaybe<Scalars['String']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
  subCategoryID?: InputMaybe<Scalars['Int']['input']>;
  userActivityID?: InputMaybe<Scalars['Int']['input']>;
  userID?: InputMaybe<Scalars['Int']['input']>;
};

export type MapUserActivityType = {
  __typename?: 'MapUserActivityType';
  action?: Maybe<Scalars['String']['output']>;
  activityID?: Maybe<Scalars['Int']['output']>;
  categoryID?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  domainCategoryID?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  searchText?: Maybe<Scalars['String']['output']>;
  sessionID?: Maybe<Scalars['String']['output']>;
  subCategoryID?: Maybe<Scalars['Int']['output']>;
  userActivityID?: Maybe<Scalars['Int']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
};

export type MapUserRoleRightsInputType = {
  addRights?: InputMaybe<Scalars['Boolean']['input']>;
  deleteRights?: InputMaybe<Scalars['Boolean']['input']>;
  form?: InputMaybe<DevFormsInputType>;
  formId?: InputMaybe<Scalars['Int']['input']>;
  modifyRights?: InputMaybe<Scalars['Boolean']['input']>;
  rightsId: Scalars['Int']['input'];
  role?: InputMaybe<MstUserRoleInputType>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  viewRights?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MapUserRoleRightsType = {
  __typename?: 'MapUserRoleRightsType';
  addRights?: Maybe<Scalars['Boolean']['output']>;
  deleteRights?: Maybe<Scalars['Boolean']['output']>;
  form?: Maybe<DevFormsType>;
  formId?: Maybe<Scalars['Int']['output']>;
  modifyRights?: Maybe<Scalars['Boolean']['output']>;
  rightsId: Scalars['Int']['output'];
  role?: Maybe<MstUserRoleType>;
  roleId?: Maybe<Scalars['Int']['output']>;
  viewRights?: Maybe<Scalars['Boolean']['output']>;
};

export type MapUsersSettingsInputType = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  sPost?: InputMaybe<Scalars['Boolean']['input']>;
  sUserId?: InputMaybe<Scalars['String']['input']>;
  setting?: InputMaybe<MstSettingsInputType>;
  settingId?: InputMaybe<Scalars['Int']['input']>;
  sms?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  userSettingId: Scalars['Int']['input'];
};

export type MapUsersSettingsType = {
  __typename?: 'MapUsersSettingsType';
  accessToken?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  sPost?: Maybe<Scalars['Boolean']['output']>;
  sUserId?: Maybe<Scalars['String']['output']>;
  setting?: Maybe<MstSettingsType>;
  settingId?: Maybe<Scalars['Int']['output']>;
  sms?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userSettingId: Scalars['Int']['output'];
};

export type MstBeestatusInputType = {
  beestatus?: InputMaybe<MstBeestatusInputType>;
  beestatusId: Scalars['Int']['input'];
  beestatusName?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCompany?: InputMaybe<Array<InputMaybe<MstCompanyInputType>>>;
  procurementRecognition?: InputMaybe<Scalars['Decimal']['input']>;
  scorePoint?: InputMaybe<Scalars['String']['input']>;
};

export type MstBeestatusType = {
  __typename?: 'MstBeestatusType';
  beestatus?: Maybe<MstBeestatusType>;
  beestatusId: Scalars['Int']['output'];
  beestatusName?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCompany?: Maybe<Array<Maybe<MstCompanyType>>>;
  procurementRecognition?: Maybe<Scalars['Decimal']['output']>;
  scorePoint?: Maybe<Scalars['String']['output']>;
};

export type MstBusinessUserDtoType = {
  __typename?: 'MstBusinessUserDtoType';
  bidAmount?: Maybe<Scalars['Decimal']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  orderID?: Maybe<Scalars['Int']['output']>;
  product?: Maybe<PrdProductsType>;
  productID?: Maybe<Scalars['Int']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  purchasedAmount?: Maybe<Scalars['Decimal']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  userProfileImage?: Maybe<Scalars['String']['output']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']['output']>;
  userStatus?: Maybe<Scalars['Int']['output']>;
};

export type MstCategoryAttributeDataTypeInputType = {
  catAttributeDataType?: InputMaybe<Scalars['String']['input']>;
  catAttributeDataTypeId: Scalars['Int']['input'];
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCategoryAttribute?: InputMaybe<Array<InputMaybe<MstCategoryAttributeInputType>>>;
};

export type MstCategoryAttributeDataTypeType = {
  __typename?: 'MstCategoryAttributeDataTypeType';
  catAttributeDataType?: Maybe<Scalars['String']['output']>;
  catAttributeDataTypeId: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCategoryAttribute?: Maybe<Array<Maybe<MstCategoryAttributeType>>>;
};

export type MstCategoryAttributeInputType = {
  catAttribute?: InputMaybe<Scalars['String']['input']>;
  catAttributeDataType?: InputMaybe<MstCategoryAttributeDataTypeInputType>;
  catAttributeDataTypeId?: InputMaybe<Scalars['Int']['input']>;
  catAttributeId: Scalars['Int']['input'];
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCategoryAttributes?: InputMaybe<Array<InputMaybe<MapCategoryAttributesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MstCategoryAttributeType = {
  __typename?: 'MstCategoryAttributeType';
  catAttribute?: Maybe<Scalars['String']['output']>;
  catAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  catAttributeDataTypeId?: Maybe<Scalars['Int']['output']>;
  catAttributeId: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCategoryAttributes?: Maybe<Array<Maybe<MapCategoryAttributesType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MstCategoryInputType = {
  categoryIcon?: InputMaybe<Scalars['String']['input']>;
  categoryId: Scalars['Int']['input'];
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryThumbNailIcon?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isCategory?: InputMaybe<Scalars['Boolean']['input']>;
  isMainCategory?: InputMaybe<Scalars['Boolean']['input']>;
  isMenuAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  parentCategoryId?: InputMaybe<Scalars['Int']['input']>;
  timeDelayException?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MstCategoryParameter = {
  categoryIcon?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryThumbNailIcon?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isCategory?: InputMaybe<Scalars['Boolean']['input']>;
  isMainCategory?: InputMaybe<Scalars['Boolean']['input']>;
  isMenuAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  parentCategoryId?: InputMaybe<Scalars['Int']['input']>;
  timeDelayException?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MstCategoryType = {
  __typename?: 'MstCategoryType';
  categoryIcon?: Maybe<Scalars['String']['output']>;
  categoryId: Scalars['Int']['output'];
  categoryName?: Maybe<Scalars['String']['output']>;
  categoryThumbNailIcon?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isCategory?: Maybe<Scalars['Boolean']['output']>;
  isMainCategory?: Maybe<Scalars['Boolean']['output']>;
  isMenuAllowed?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  parentCategoryId?: Maybe<Scalars['Int']['output']>;
  timeDelayException?: Maybe<Scalars['Boolean']['output']>;
};

export type MstCityInputType = {
  cityId: Scalars['Int']['input'];
  cityName?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  mstSuburb?: InputMaybe<Array<InputMaybe<MstSuburbInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  province?: InputMaybe<MstProvinceInputType>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstCityType = {
  __typename?: 'MstCityType';
  cityId: Scalars['Int']['output'];
  cityName?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstSuburb?: Maybe<Array<Maybe<MstSuburbType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  province?: Maybe<MstProvinceType>;
  provinceId?: Maybe<Scalars['Int']['output']>;
};

export type MstCmsInputType = {
  cmsid: Scalars['Int']['input'];
  cmstext?: InputMaybe<Scalars['String']['input']>;
  cmstitle?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MstCmsType = {
  __typename?: 'MstCmsType';
  cmsid: Scalars['Int']['output'];
  cmstext?: Maybe<Scalars['String']['output']>;
  cmstitle?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MstCompanyAuditLogType = {
  __typename?: 'MstCompanyAuditLogType';
  auditDate?: Maybe<Scalars['DateTime']['output']>;
  auditLog?: Maybe<Scalars['String']['output']>;
  auditLogId: Scalars['Int']['output'];
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  mapUsers?: Maybe<Array<Maybe<MstReportUserDtoType>>>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstCompanyDocumentTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentType?: InputMaybe<Scalars['String']['input']>;
  documentTypeId: Scalars['Int']['input'];
  mapCompanyDocument?: InputMaybe<Array<InputMaybe<MapCompanyDocumentInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MstCompanyDocumentTypeType = {
  __typename?: 'MstCompanyDocumentTypeType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentType?: Maybe<Scalars['String']['output']>;
  documentTypeId: Scalars['Int']['output'];
  mapCompanyDocument?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MstCompanyDtoType = {
  __typename?: 'MstCompanyDtoType';
  bEEScorePoint?: Maybe<Scalars['String']['output']>;
  bEEStatus?: Maybe<Scalars['String']['output']>;
  bEEStatusID?: Maybe<Scalars['Int']['output']>;
  callType?: Maybe<Scalars['Int']['output']>;
  categoryIds?: Maybe<Scalars['String']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  cityId?: Maybe<Scalars['Int']['output']>;
  cityIds?: Maybe<Scalars['String']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  clickCount?: Maybe<Scalars['Int']['output']>;
  compCategory?: Maybe<Scalars['String']['output']>;
  compCityID?: Maybe<Scalars['Int']['output']>;
  compCityName?: Maybe<Scalars['String']['output']>;
  compCountryID?: Maybe<Scalars['Int']['output']>;
  compCountryName?: Maybe<Scalars['String']['output']>;
  compDescription?: Maybe<Scalars['String']['output']>;
  compEmailId?: Maybe<Scalars['String']['output']>;
  compHelpDeskNumber?: Maybe<Scalars['String']['output']>;
  compPackageID?: Maybe<Scalars['Int']['output']>;
  compPackageId?: Maybe<Scalars['Int']['output']>;
  compPhone?: Maybe<Scalars['String']['output']>;
  compProvinceID?: Maybe<Scalars['Int']['output']>;
  compProvinceName?: Maybe<Scalars['String']['output']>;
  compStreetAddress?: Maybe<Scalars['String']['output']>;
  compSuburb?: Maybe<Scalars['String']['output']>;
  compSuburbID?: Maybe<Scalars['Int']['output']>;
  compWebSite?: Maybe<Scalars['String']['output']>;
  companyID?: Maybe<Scalars['Int']['output']>;
  companyId?: Maybe<Scalars['Int']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyPercentage?: Maybe<Scalars['Decimal']['output']>;
  companyStatus?: Maybe<Scalars['String']['output']>;
  companyStatusID?: Maybe<Scalars['Int']['output']>;
  countryID?: Maybe<Scalars['Int']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  directorsCount?: Maybe<Scalars['Int']['output']>;
  documentPath?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  franchiseId?: Maybe<Scalars['Int']['output']>;
  intCategoryIds?: Maybe<Scalars['String']['output']>;
  intCompPackageID?: Maybe<Scalars['Int']['output']>;
  intCompanyMBUDeviceID?: Maybe<Scalars['String']['output']>;
  intCompanyMBUDeviceType?: Maybe<Scalars['Int']['output']>;
  intCompanyMBUEmail?: Maybe<Scalars['String']['output']>;
  intCompanyMBUID?: Maybe<Scalars['Int']['output']>;
  intCompanyMBUName?: Maybe<Scalars['String']['output']>;
  intFavouriteID?: Maybe<Scalars['Int']['output']>;
  intFranchiseID?: Maybe<Scalars['Int']['output']>;
  intRatingScore?: Maybe<Scalars['Decimal']['output']>;
  joinDate?: Maybe<Scalars['DateTime']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  logoPath?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  mainBusinessUserID?: Maybe<Scalars['Int']['output']>;
  mainCategoryID?: Maybe<Scalars['Int']['output']>;
  procurementRecognition?: Maybe<Scalars['String']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceIds?: Maybe<Scalars['String']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  ratingScore?: Maybe<Scalars['Decimal']['output']>;
  selectedCity?: Maybe<Scalars['Boolean']['output']>;
  selectedProvince?: Maybe<Scalars['Boolean']['output']>;
  selectedSuburb?: Maybe<Scalars['Boolean']['output']>;
  serviceTax?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbIds?: Maybe<Scalars['String']['output']>;
  suburbName?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  vATNumber?: Maybe<Scalars['String']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstCompanyInputType = {
  beestatus?: InputMaybe<MstBeestatusInputType>;
  beestatusId?: InputMaybe<Scalars['Int']['input']>;
  companyId: Scalars['Int']['input'];
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyPercent?: InputMaybe<Scalars['Decimal']['input']>;
  companyStatus?: InputMaybe<MstCompanyStatusInputType>;
  companyStatusId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  crmInvoiceFooter?: InputMaybe<Scalars['String']['input']>;
  crmInvoiceHeader?: InputMaybe<Scalars['String']['input']>;
  crmQuoteFooter?: InputMaybe<Scalars['String']['input']>;
  crmQuoteHeader?: InputMaybe<Scalars['String']['input']>;
  crmcolorCode?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  directorsCount?: InputMaybe<Scalars['Int']['input']>;
  domainUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  franchiseeId?: InputMaybe<Scalars['Int']['input']>;
  helpDeskNumber?: InputMaybe<Scalars['String']['input']>;
  logoPath?: InputMaybe<Scalars['String']['input']>;
  mainBusinessUserId?: InputMaybe<Scalars['Int']['input']>;
  mapCompanyAuditLog?: InputMaybe<Array<InputMaybe<MapCompanyAuditLogInputType>>>;
  mapCompanyDocument?: InputMaybe<Array<InputMaybe<MapCompanyDocumentInputType>>>;
  mapCompanyTask?: InputMaybe<Array<InputMaybe<MapCompanyTaskInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCrmInventory?: InputMaybe<Array<InputMaybe<MstCrmInventoryInputType>>>;
  mstCrmInvoice?: InputMaybe<Array<InputMaybe<MstCrmInvoiceInputType>>>;
  mstCrmQuote?: InputMaybe<Array<InputMaybe<MstCrmQuoteInputType>>>;
  mstCustomerEnquiry?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryInputType>>>;
  mstCustomerEnquiryResponse?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryResponseInputType>>>;
  mstItemResponse?: InputMaybe<Array<InputMaybe<MstItemResponseInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  payFastMerchantId?: InputMaybe<Scalars['String']['input']>;
  payFastMerchantKey?: InputMaybe<Scalars['String']['input']>;
  payGateMerchantId?: InputMaybe<Scalars['String']['input']>;
  payGateMerchantKey?: InputMaybe<Scalars['String']['input']>;
  payPalMerchantId?: InputMaybe<Scalars['String']['input']>;
  payPalMerchantKey?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  serviceTax?: InputMaybe<Scalars['Decimal']['input']>;
  vatnumber?: InputMaybe<Scalars['String']['input']>;
  webSite?: InputMaybe<Scalars['String']['input']>;
};

export type MstCompanyLimitedType = {
  __typename?: 'MstCompanyLimitedType';
  companyId: Scalars['Int']['output'];
  companyName?: Maybe<Scalars['String']['output']>;
  logoPath?: Maybe<Scalars['String']['output']>;
};

export type MstCompanyStatusInputType = {
  companyStatusId: Scalars['Int']['input'];
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCompany?: InputMaybe<MstCompanyInputType>;
  statusName?: InputMaybe<Scalars['String']['input']>;
};

export type MstCompanyStatusType = {
  __typename?: 'MstCompanyStatusType';
  companyStatusId: Scalars['Int']['output'];
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCompany?: Maybe<Array<Maybe<MstCompanyType>>>;
  statusName?: Maybe<Scalars['String']['output']>;
};

export type MstCompanyTaskListInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyTask?: InputMaybe<Array<InputMaybe<MapCompanyTaskInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  taskDescription?: InputMaybe<Scalars['String']['input']>;
  taskId: Scalars['Int']['input'];
  taskName?: InputMaybe<Scalars['String']['input']>;
};

export type MstCompanyTaskListType = {
  __typename?: 'MstCompanyTaskListType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyTask?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  percentage?: Maybe<Scalars['Decimal']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  taskDescription?: Maybe<Scalars['String']['output']>;
  taskId: Scalars['Int']['output'];
  taskName?: Maybe<Scalars['String']['output']>;
};

export type MstCompanyType = {
  __typename?: 'MstCompanyType';
  beestatus?: Maybe<MstBeestatusType>;
  beestatusId?: Maybe<Scalars['Int']['output']>;
  companyId: Scalars['Int']['output'];
  companyName?: Maybe<Scalars['String']['output']>;
  companyPercent?: Maybe<Scalars['Decimal']['output']>;
  companyStatus?: Maybe<MstCompanyStatusType>;
  companyStatusId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  crmInvoiceFooter?: Maybe<Scalars['String']['output']>;
  crmInvoiceHeader?: Maybe<Scalars['String']['output']>;
  crmQuoteFooter?: Maybe<Scalars['String']['output']>;
  crmQuoteHeader?: Maybe<Scalars['String']['output']>;
  crmcolorCode?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  directorsCount?: Maybe<Scalars['Int']['output']>;
  domainUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  franchiseeId?: Maybe<Scalars['Int']['output']>;
  helpDeskNumber?: Maybe<Scalars['String']['output']>;
  logoPath?: Maybe<Scalars['String']['output']>;
  mainBusinessUserId?: Maybe<Scalars['Int']['output']>;
  mapCompanyAuditLog?: Maybe<Array<Maybe<MapCompanyAuditLogType>>>;
  mapCompanyDocument?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  mapCompanyTask?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCrmInventory?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
  mstCrmInvoice?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  mstCrmQuote?: Maybe<Array<Maybe<MstCrmQuoteType>>>;
  mstCustomerEnquiry?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  mstCustomerEnquiryResponse?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  mstItemResponse?: Maybe<Array<Maybe<MstItemResponseType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  payFastMerchantId?: Maybe<Scalars['String']['output']>;
  payFastMerchantKey?: Maybe<Scalars['String']['output']>;
  payGateMerchantId?: Maybe<Scalars['String']['output']>;
  payGateMerchantKey?: Maybe<Scalars['String']['output']>;
  payPalMerchantId?: Maybe<Scalars['String']['output']>;
  payPalMerchantKey?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  serviceTax?: Maybe<Scalars['Decimal']['output']>;
  vatnumber?: Maybe<Scalars['String']['output']>;
  webSite?: Maybe<Scalars['String']['output']>;
};

export type MstConfigurationInputType = {
  configurationId: Scalars['Int']['input'];
  fbApiclientId?: InputMaybe<Scalars['String']['input']>;
  fbApisecretKey?: InputMaybe<Scalars['String']['input']>;
  fbFanPageLink?: InputMaybe<Scalars['String']['input']>;
  gpApiclientId?: InputMaybe<Scalars['String']['input']>;
  gpApisecretKey?: InputMaybe<Scalars['String']['input']>;
  gpFanPageLink?: InputMaybe<Scalars['String']['input']>;
  igApiclientId?: InputMaybe<Scalars['String']['input']>;
  igApisecretKey?: InputMaybe<Scalars['String']['input']>;
  igFanPageLink?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  smsIsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  smsPassword?: InputMaybe<Scalars['String']['input']>;
  smsUserName?: InputMaybe<Scalars['String']['input']>;
  smtpEnableSsl?: InputMaybe<Scalars['Boolean']['input']>;
  smtpFromEmail?: InputMaybe<Scalars['String']['input']>;
  smtpFromName?: InputMaybe<Scalars['String']['input']>;
  smtpHostServer?: InputMaybe<Scalars['String']['input']>;
  smtpPassword?: InputMaybe<Scalars['String']['input']>;
  smtpPort?: InputMaybe<Scalars['String']['input']>;
  smtpUserName?: InputMaybe<Scalars['String']['input']>;
  twApiclientId?: InputMaybe<Scalars['String']['input']>;
  twApisecretKey?: InputMaybe<Scalars['String']['input']>;
  twFanPageLink?: InputMaybe<Scalars['String']['input']>;
};

export type MstConfigurationType = {
  __typename?: 'MstConfigurationType';
  configurationId: Scalars['Int']['output'];
  fbApiclientId?: Maybe<Scalars['String']['output']>;
  fbApisecretKey?: Maybe<Scalars['String']['output']>;
  fbFanPageLink?: Maybe<Scalars['String']['output']>;
  gpApiclientId?: Maybe<Scalars['String']['output']>;
  gpApisecretKey?: Maybe<Scalars['String']['output']>;
  gpFanPageLink?: Maybe<Scalars['String']['output']>;
  igApiclientId?: Maybe<Scalars['String']['output']>;
  igApisecretKey?: Maybe<Scalars['String']['output']>;
  igFanPageLink?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  smsIsEnabled?: Maybe<Scalars['Boolean']['output']>;
  smsPassword?: Maybe<Scalars['String']['output']>;
  smsUserName?: Maybe<Scalars['String']['output']>;
  smtpEnableSsl?: Maybe<Scalars['Boolean']['output']>;
  smtpFromEmail?: Maybe<Scalars['String']['output']>;
  smtpFromName?: Maybe<Scalars['String']['output']>;
  smtpHostServer?: Maybe<Scalars['String']['output']>;
  smtpPassword?: Maybe<Scalars['String']['output']>;
  smtpPort?: Maybe<Scalars['String']['output']>;
  smtpUserName?: Maybe<Scalars['String']['output']>;
  twApiclientId?: Maybe<Scalars['String']['output']>;
  twApisecretKey?: Maybe<Scalars['String']['output']>;
  twFanPageLink?: Maybe<Scalars['String']['output']>;
};

export type MstContactFormInputType = {
  contactId: Scalars['Int']['input'];
  contactNo?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type MstContactFormType = {
  __typename?: 'MstContactFormType';
  contactId: Scalars['Int']['output'];
  contactNo?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type MstCountryInputType = {
  countryId: Scalars['Int']['input'];
  countryName?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Int']['input']>;
  mapCompanyAreas?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstFranchises?: InputMaybe<Array<InputMaybe<MstFranchiseeInputType>>>;
  mstProvinces?: InputMaybe<Array<InputMaybe<MstProvinceInputType>>>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
};

export type MstCountryParameter = {
  countryId?: InputMaybe<Scalars['ID']['input']>;
  countryName?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MstCountryQuery = {
  __typename?: 'MstCountryQuery';
  companyCheck?: Maybe<Response1>;
  confirmEmail?: Maybe<Response>;
  devForm?: Maybe<DevFormsType>;
  devForms?: Maybe<PaginationListDevForms>;
  elmahError?: Maybe<ElmahErrorType>;
  elmahErrors?: Maybe<PaginationListElmahError>;
  emailCheck?: Maybe<Response>;
  forgetPassword?: Maybe<Response>;
  getAllItemRequestList?: Maybe<ResponseMstItemRequestDto>;
  getBusinessIncomingEnquiry?: Maybe<ResponseMstCustomerEnquiry>;
  getBusinessList?: Maybe<ResponseMstCompanyDto>;
  getBusinessOrdersUsers?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopBids?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopHire?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopOrderedBids?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessTopUserOrdersUsers?: Maybe<ResponseMstBusinessUsersDto>;
  getBusinessUsers?: Maybe<ResponseMstUserDto>;
  getCity?: Maybe<ResponseMstCity>;
  getCityByProvince?: Maybe<ResponseMstCity>;
  getCompanyAuditLog?: Maybe<ResponseMapCompanyAuditLog>;
  getCompanyCategories?: Maybe<ResponseMapCompanyCategory>;
  getCompanyTaskAsync?: Maybe<ResponseMapCompanyTask>;
  getCustomerEnquiryList?: Maybe<ResponseMstCustomerEnquiry>;
  getHierarchyResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getIncomingItemRequestList?: Maybe<ResponseMstItemRequestDto>;
  getIncommingHierarchyResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getIncommingTopLevelResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getItemRequestList?: Maybe<ResponseMstItemRequestDto>;
  getItemRequestServiceList?: Maybe<ResponseMstItemRequestServiceDto>;
  getLinkedBusinessesItemRequest?: Maybe<ResponseMstCompanyDto>;
  getMagazinesList?: Maybe<ResponseMstEFlyersDto>;
  getMapProductImages?: Maybe<ResponseMapProductImages>;
  getMstCategoryByParentId?: Maybe<ResponseMstCategory>;
  getMstCategoryMain?: Maybe<ResponseMstCategory>;
  getMstFavouritesProductList?: Maybe<ResponseProductDt>;
  getMstPackageDetailList?: Maybe<ResponseMstPackageDetailsDto>;
  getMstPackageList?: Maybe<ResponseMstPackageListDto>;
  getMstRatingScoreList?: Maybe<Response6>;
  getMstSpecialList?: Maybe<ResponseMstSpecialsDto>;
  getPostList?: Maybe<ResponsePostDto>;
  getPostReply?: Maybe<ResponsePostReplyDto>;
  getPrdBidList?: Maybe<ResponsePrdBid>;
  getPrdCategoryList?: Maybe<ResponsePrdCategoryDto>;
  getPrdProductList?: Maybe<ResponseProductDt>;
  getPrdSalesType?: Maybe<ResponsePrdSalesType>;
  getPrdScope?: Maybe<ResponsePrdScope>;
  getPrdShoppingCart?: Maybe<ResponsePrdShoppingCartTotalDto>;
  getPrdType?: Maybe<ResponsePrdType>;
  getProvince?: Maybe<ResponseMstProvince>;
  getProvinceByCountry?: Maybe<ResponseMstProvince>;
  getRatingList?: Maybe<Response6>;
  getResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getSession?: Maybe<Response2>;
  getSuburb?: Maybe<ResponseMstSuburb>;
  getSuburbByCity?: Maybe<ResponseMstSuburb>;
  getTenderCountPerCompanyList?: Maybe<ResponseTenderDto>;
  getTenderCountPerProvinceList?: Maybe<ResponseTenderDto>;
  getTenderList?: Maybe<ResponseTenderDto>;
  getTopLevelResponseItems?: Maybe<Array<Maybe<MstItemResponseType>>>;
  getUser?: Maybe<Response3>;
  getUserActivity?: Maybe<ResponseMapUserActivity>;
  getUserAddress?: Maybe<ResponseMstUserAddress>;
  getUserTopBids?: Maybe<ResponseMstBusinessUsersDto>;
  getUserTopHire?: Maybe<ResponseMstBusinessUsersDto>;
  getVehicles?: Maybe<ResponseMstVehicle>;
  guestLogin?: Maybe<Response4>;
  job?: Maybe<JobType>;
  jobs?: Maybe<PaginationListJob>;
  mapCategoryAttribute?: Maybe<MapCategoryAttributesType>;
  mapCategoryAttributes?: Maybe<PaginationListMapCategoryAttributes>;
  mapCompanyArea?: Maybe<MapCompanyAreaType>;
  mapCompanyAreas?: Maybe<PaginationListMapCompanyArea>;
  mapCompanyAuditLog?: Maybe<MapCompanyAuditLogType>;
  mapCompanyAuditLogs?: Maybe<PaginationListMapCompanyAuditLog>;
  mapCompanyCategories?: Maybe<PaginationListMapCompanyCategory>;
  mapCompanyCategory?: Maybe<MapCompanyCategoryType>;
  mapCompanyDocument?: Maybe<MapCompanyDocumentType>;
  mapCompanyDocuments?: Maybe<PaginationListMapCompanyDocument>;
  mapCompanyEmail?: Maybe<MapCompanyEmailType>;
  mapCompanyEmails?: Maybe<PaginationListMapCompanyEmail>;
  mapCompanyMagazineAd?: Maybe<MapCompanyMagazineAdType>;
  mapCompanyMagazineAds?: Maybe<PaginationListMapCompanyMagazineAd>;
  mapCompanyPackage?: Maybe<MapCompanyPackageType>;
  mapCompanyPackageById?: Maybe<MapCompanyPackageType>;
  mapCompanyPackages?: Maybe<PaginationListMapCompanyPackage>;
  mapCompanyPayment?: Maybe<MapCompanyPaymentType>;
  mapCompanyPayments?: Maybe<PaginationListMapCompanyPayment>;
  mapCompanyProvide?: Maybe<MapCompanyProvideType>;
  mapCompanyProvides?: Maybe<PaginationListMapCompanyProvide>;
  mapCompanySeek?: Maybe<MapCompanySeekType>;
  mapCompanySeeks?: Maybe<PaginationListMapCompanySeek>;
  mapCompanyTask?: Maybe<MapCompanyTaskType>;
  mapCompanyTasks?: Maybe<PaginationListMapCompanyTask>;
  mapCompanyUsers?: Maybe<MapCompanyUsersType>;
  mapCompanyUserss?: Maybe<PaginationListMapCompanyUsers>;
  mapCustomerEnquiryUpload?: Maybe<MapCustomerEnquiryUploadType>;
  mapCustomerEnquiryUploads?: Maybe<PaginationListMapCustomerEnquiryUpload>;
  mapEflyersUpload?: Maybe<MapEflyersUploadType>;
  mapEflyersUploads?: Maybe<PaginationListMapEflyersUpload>;
  mapItemRequestArea?: Maybe<MapItemRequestAreaType>;
  mapItemRequestAreas?: Maybe<PaginationListMapItemRequestArea>;
  mapItemRequestCategory?: Maybe<MapItemRequestCategoryType>;
  mapItemRequestCategoryAttribute?: Maybe<MapItemRequestCategoryAttributeType>;
  mapItemRequestCategoryAttributes?: Maybe<PaginationListMapItemRequestCategoryAttribute>;
  mapItemRequestCategorys?: Maybe<PaginationListMapItemRequestCategory>;
  mapItemRequestUpload?: Maybe<MapItemRequestUploadType>;
  mapItemRequestUploads?: Maybe<PaginationListMapItemRequestUpload>;
  mapItemResponseUpload?: Maybe<MapItemResponseUploadType>;
  mapItemResponseUploads?: Maybe<PaginationListMapItemResponseUpload>;
  mapPackageAttributes?: Maybe<MapPackageAttributesType>;
  mapPackageAttributess?: Maybe<PaginationListMapPackageAttributes>;
  mapProductDocument?: Maybe<MapProductDocumentType>;
  mapProductDocuments?: Maybe<PaginationListMapProductDocument>;
  mapProductImages?: Maybe<MapProductImagesType>;
  mapProductImagess?: Maybe<PaginationListMapProductImages>;
  mapSettingsRole?: Maybe<MapSettingsRoleType>;
  mapSettingsRoles?: Maybe<PaginationListMapSettingsRole>;
  mapSpecialUpload?: Maybe<MapSpecialUploadType>;
  mapSpecialUploads?: Maybe<PaginationListMapSpecialUpload>;
  mapUserRoleRights?: Maybe<MapUserRoleRightsType>;
  mapUserRoleRightss?: Maybe<PaginationListMapUserRoleRights>;
  mapUsersSettings?: Maybe<MapUsersSettingsType>;
  mapUsersSettingss?: Maybe<PaginationListMapUsersSettings>;
  mobileCheck?: Maybe<Response1>;
  mstBeestatus?: Maybe<MstBeestatusType>;
  mstBeestatuss?: Maybe<PaginationListMstBeestatus>;
  mstCategory?: Maybe<MstCategoryType>;
  mstCategoryAttribute?: Maybe<MstCategoryAttributeType>;
  mstCategoryAttributeDataType?: Maybe<MstCategoryAttributeDataTypeType>;
  mstCategoryAttributeDataTypes?: Maybe<PaginationListMstCategoryAttributeDataType>;
  mstCategoryAttributes?: Maybe<PaginationListMstCategoryAttribute>;
  mstCategorys?: Maybe<Array<Maybe<MstCategoryType>>>;
  mstCity?: Maybe<MstCityType>;
  mstCitys?: Maybe<PaginationListMstCity>;
  mstCms?: Maybe<MstCmsType>;
  mstCmss?: Maybe<PaginationListMstCms>;
  mstCompany?: Maybe<MstCompanyType>;
  mstCompanyDocumentType?: Maybe<MstCompanyDocumentTypeType>;
  mstCompanyDocumentTypes?: Maybe<PaginationListMstCompanyDocumentType>;
  mstCompanyStatus?: Maybe<MstCompanyStatusType>;
  mstCompanyStatuss?: Maybe<PaginationListMstCompanyStatus>;
  mstCompanyTaskList?: Maybe<MstCompanyTaskListType>;
  mstCompanyTaskLists?: Maybe<PaginationListMstCompanyTaskList>;
  mstCompanys?: Maybe<PaginationListMstCompany>;
  mstConfiguration?: Maybe<MstConfigurationType>;
  mstConfigurations?: Maybe<PaginationListMstConfiguration>;
  mstContactForm?: Maybe<MstContactFormType>;
  mstContactForms?: Maybe<PaginationListMstContactForm>;
  mstCountries?: Maybe<PaginationListMstCountry>;
  mstCountry?: Maybe<MstCountryType>;
  mstCrmCustomer?: Maybe<MstCrmCustomerType>;
  mstCrmCustomerComment?: Maybe<MstCrmCustomerCommentType>;
  mstCrmCustomerComments?: Maybe<PaginationListMstCrmCustomerComment>;
  mstCrmCustomers?: Maybe<PaginationListMstCrmCustomer>;
  mstCrmInventory?: Maybe<MstCrmInventoryType>;
  mstCrmInventoryType?: Maybe<MstCrmInventoryTypeType>;
  mstCrmInventoryTypes?: Maybe<PaginationListMstCrmInventoryType>;
  mstCrmInventorys?: Maybe<PaginationListMstCrmInventory>;
  mstCrmInvoice?: Maybe<MstCrmInvoiceType>;
  mstCrmInvoiceDetails?: Maybe<MstCrmInvoiceDetailsType>;
  mstCrmInvoiceDetailss?: Maybe<PaginationListMstCrmInvoiceDetails>;
  mstCrmInvoices?: Maybe<PaginationListMstCrmInvoice>;
  mstCrmQuote?: Maybe<MstCrmQuoteType>;
  mstCrmQuoteDetails?: Maybe<MstCrmQuoteDetailsType>;
  mstCrmQuoteDetailss?: Maybe<PaginationListMstCrmQuoteDetails>;
  mstCrmQuotes?: Maybe<PaginationListMstCrmQuote>;
  mstCustomerEnquiry?: Maybe<MstCustomerEnquiryType>;
  mstCustomerEnquiryResponse?: Maybe<MstCustomerEnquiryResponseType>;
  mstCustomerEnquiryResponses?: Maybe<PaginationListMstCustomerEnquiryResponse>;
  mstCustomerEnquirys?: Maybe<PaginationListMstCustomerEnquiry>;
  mstDocumentStatus?: Maybe<MstDocumentStatusType>;
  mstDocumentStatuss?: Maybe<PaginationListMstDocumentStatus>;
  mstDomain?: Maybe<MstDomainType>;
  mstDomains?: Maybe<PaginationListMstDomain>;
  mstEFlyers?: Maybe<MstEFlyersType>;
  mstEFlyerss?: Maybe<PaginationListMstEFlyers>;
  mstEmailStack?: Maybe<MstEmailStackType>;
  mstEmailStacks?: Maybe<PaginationListMstEmailStack>;
  mstFavourites?: Maybe<MstFavouritesType>;
  mstFavouritess?: Maybe<PaginationListMstFavourites>;
  mstFranchisee?: Maybe<MstFranchiseeType>;
  mstFranchisees?: Maybe<PaginationListMstFranchisee>;
  mstItemRequest?: Maybe<MstItemRequestType>;
  mstItemRequests?: Maybe<PaginationListMstItemRequest>;
  mstItemResponse?: Maybe<MstItemResponseType>;
  mstItemResponses?: Maybe<PaginationListMstItemResponse>;
  mstKeywords?: Maybe<MstKeywordsType>;
  mstKeywordss?: Maybe<PaginationListMstKeywords>;
  mstMagazineAd?: Maybe<MstMagazineAdType>;
  mstMagazineAdType?: Maybe<MstMagazineAdTypeType>;
  mstMagazineAdTypes?: Maybe<PaginationListMstMagazineAdType>;
  mstMagazineAds?: Maybe<PaginationListMstMagazineAd>;
  mstMagazineSection?: Maybe<MstMagazineSectionType>;
  mstMagazineSections?: Maybe<PaginationListMstMagazineSection>;
  mstMailType?: Maybe<MstMailTypeType>;
  mstMailTypes?: Maybe<PaginationListMstMailType>;
  mstNotificationStack?: Maybe<MstNotificationStackType>;
  mstNotificationStacks?: Maybe<PaginationListMstNotificationStack>;
  mstPackage?: Maybe<MstPackageType>;
  mstPackageAttribute?: Maybe<MstPackageAttributeType>;
  mstPackageAttributes?: Maybe<PaginationListMstPackageAttribute>;
  mstPackages?: Maybe<PaginationListMstPackage>;
  mstPaymentMode?: Maybe<MstPaymentModeType>;
  mstPaymentModes?: Maybe<PaginationListMstPaymentMode>;
  mstPaymentStatus?: Maybe<MstPaymentStatusType>;
  mstPaymentStatuss?: Maybe<PaginationListMstPaymentStatus>;
  mstPaymentType?: Maybe<MstPaymentTypeType>;
  mstPaymentTypes?: Maybe<PaginationListMstPaymentType>;
  mstPeriodType?: Maybe<MstPeriodTypeType>;
  mstPeriodTypes?: Maybe<PaginationListMstPeriodType>;
  mstProvince?: Maybe<MstProvinceType>;
  mstProvinces?: Maybe<PaginationListMstProvince>;
  mstQuantityType?: Maybe<MstQuantityTypeType>;
  mstQuantityTypes?: Maybe<PaginationListMstQuantityType>;
  mstRating?: Maybe<MstRatingType>;
  mstRatings?: Maybe<PaginationListMstRating>;
  mstSettingType?: Maybe<MstSettingTypeType>;
  mstSettingTypes?: Maybe<PaginationListMstSettingType>;
  mstSettings?: Maybe<MstSettingsType>;
  mstSettingss?: Maybe<PaginationListMstSettings>;
  mstSpecials?: Maybe<MstSpecialsType>;
  mstSpecialss?: Maybe<PaginationListMstSpecials>;
  mstStatus?: Maybe<MstStatusType>;
  mstStatuss?: Maybe<PaginationListMstStatus>;
  mstSuburb?: Maybe<MstSuburbType>;
  mstSuburbs?: Maybe<PaginationListMstSuburb>;
  mstUserRole?: Maybe<MstUserRoleType>;
  mstUserRoles?: Maybe<PaginationListMstUserRole>;
  mstUserStatus?: Maybe<MstUserStatusType>;
  mstUserStatuss?: Maybe<PaginationListMstUserStatus>;
  mstUsers?: Maybe<MstUsersType>;
  mstUserss?: Maybe<PaginationListMstUsers>;
  mstVersion?: Maybe<MstVersionType>;
  mstVersions?: Maybe<PaginationListMstVersion>;
  mstVolumeType?: Maybe<MstVolumeTypeType>;
  mstVolumeTypes?: Maybe<PaginationListMstVolumeType>;
  oAuth?: Maybe<ResponseMstLoggedInUserDto>;
  post?: Maybe<PostType>;
  postAttachment?: Maybe<PostAttachmentType>;
  postAttachments?: Maybe<PaginationListPostAttachment>;
  postReply?: Maybe<PostReplyType>;
  postReplyAttachment?: Maybe<PostReplyAttachmentType>;
  postReplyAttachments?: Maybe<PaginationListPostReplyAttachment>;
  postReplys?: Maybe<PaginationListPostReply>;
  posts?: Maybe<PaginationListPost>;
  prdBid?: Maybe<PrdBidType>;
  prdBids?: Maybe<PaginationListPrdBid>;
  prdCategory?: Maybe<PrdCategoryType>;
  prdCategorys?: Maybe<PaginationListPrdCategory>;
  prdHire?: Maybe<PrdHireType>;
  prdHires?: Maybe<PaginationListPrdHire>;
  prdOrderDetails?: Maybe<PrdOrderDetailsType>;
  prdOrderDetailss?: Maybe<PaginationListPrdOrderDetails>;
  prdOrderPayment?: Maybe<PrdOrderPaymentType>;
  prdOrderPayments?: Maybe<PaginationListPrdOrderPayment>;
  prdOrderStatus?: Maybe<PrdOrderStatusType>;
  prdOrderStatusType?: Maybe<PrdOrderStatusTypeType>;
  prdOrderStatusTypes?: Maybe<PaginationListPrdOrderStatusType>;
  prdOrderStatuss?: Maybe<PaginationListPrdOrderStatus>;
  prdOrders?: Maybe<PrdOrdersType>;
  prdOrdersByUser?: Maybe<ResponsePrdOrders>;
  prdOrdersForBusiness?: Maybe<ResponsePrdOrders>;
  prdOrdersGrowth?: Maybe<ResponsePrdOrdersSummary>;
  prdOrdersStats?: Maybe<ResponsePrdOrdersStats>;
  prdOrdersSummary?: Maybe<ResponsePrdOrdersSummary>;
  prdOrderss?: Maybe<PaginationListPrdOrders>;
  prdProducts?: Maybe<PrdProductsType>;
  prdProductss?: Maybe<PaginationListPrdProducts>;
  prdShoppingCart?: Maybe<PrdShoppingCartType>;
  prdShoppingCarts?: Maybe<PaginationListPrdShoppingCart>;
  prdSubCategory?: Maybe<PrdSubCategoryType>;
  prdSubCategorys?: Maybe<PaginationListPrdSubCategory>;
  prdTopOrdersProducts?: Maybe<ResponsePrdOrdersProducts>;
  purchaseShoppingCartAsync?: Maybe<Response7>;
  sSOLogin?: Maybe<ResponseMstLoggedInUserDto>;
  sSOLoginEncrypt?: Maybe<Response5>;
  sendEmail?: Maybe<Response>;
  systemRole?: Maybe<SystemRoleType>;
  systemRoles?: Maybe<PaginationListSystemRole>;
  systemUser?: Maybe<SystemUserType>;
  systemUsers?: Maybe<PaginationListSystemUser>;
};


export type MstCountryQueryCompanyCheckArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryConfirmEmailArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryDevFormArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryDevFormsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryElmahErrorArgs = {
  id?: InputMaybe<Scalars['Guid']['input']>;
};


export type MstCountryQueryElmahErrorsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryEmailCheckArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryForgetPasswordArgs = {
  domainUrl?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetAllItemRequestListArgs = {
  categoryIds?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Scalars['String']['input']>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  itemRequestTitle?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Int']['input'];
  provinceIds?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
  suburbIds?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetBusinessIncomingEnquiryArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetBusinessListArgs = {
  categoryIds?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  franchiseeId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  provinceIds?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  statusIds?: InputMaybe<Scalars['String']['input']>;
  suburbIds?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetBusinessOrdersUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetBusinessTopBidsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetBusinessTopHireArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetBusinessTopOrderedBidsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetBusinessTopUserOrdersUsersArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetBusinessUsersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetCityByProvinceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetCompanyAuditLogArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetCompanyCategoriesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryGetCompanyTaskAsyncArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetCustomerEnquiryListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetHierarchyResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  replyToId?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryGetIncomingItemRequestListArgs = {
  categoryIds?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Scalars['String']['input']>;
  itemRequestTitle?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Int']['input'];
  provinceIds?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
  suburbIds?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetIncommingHierarchyResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  replyToId?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryGetIncommingTopLevelResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryGetItemRequestListArgs = {
  categoryIds?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Scalars['String']['input']>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  itemRequestTitle?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Int']['input'];
  provinceIds?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
  suburbIds?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetItemRequestServiceListArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  domainCategoryIds?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
  subCategoryId?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetLinkedBusinessesItemRequestArgs = {
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};


export type MstCountryQueryGetMagazinesListArgs = {
  categoryIds?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Scalars['String']['input']>;
  companyIds?: InputMaybe<Scalars['String']['input']>;
  eflyerId?: InputMaybe<Scalars['String']['input']>;
  franchiseId?: InputMaybe<Scalars['Int']['input']>;
  magazineName?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  provinceIds?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  statusIds?: InputMaybe<Scalars['String']['input']>;
  suburbIds?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetMapProductImagesArgs = {
  productId?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetMstCategoryByParentIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetMstFavouritesProductListArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryGetMstPackageDetailListArgs = {
  packageId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MstCountryQueryGetMstPackageListArgs = {
  excludePackageIds?: InputMaybe<Scalars['String']['input']>;
  includePackageIds?: InputMaybe<Scalars['String']['input']>;
  packageId?: InputMaybe<Scalars['Int']['input']>;
  packageIds?: InputMaybe<Scalars['String']['input']>;
  packageName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MstCountryQueryGetMstRatingScoreListArgs = {
  key?: InputMaybe<Scalars['Int']['input']>;
  keyType?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetMstSpecialListArgs = {
  categoryIds?: InputMaybe<Scalars['String']['input']>;
  cityIds?: InputMaybe<Scalars['String']['input']>;
  companyIds?: InputMaybe<Scalars['String']['input']>;
  distance?: InputMaybe<Scalars['Decimal']['input']>;
  franchiseId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  provinceIds?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  specialId?: InputMaybe<Scalars['Int']['input']>;
  specialName?: InputMaybe<Scalars['String']['input']>;
  statusIds?: InputMaybe<Scalars['String']['input']>;
  suburbIds?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetPostListArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  domainId?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetPostReplyArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetPrdBidListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetPrdCategoryListArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryIds?: InputMaybe<Scalars['String']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  domainId?: InputMaybe<Scalars['Int']['input']>;
  excludeCategoryIds?: InputMaybe<Scalars['String']['input']>;
  includeCategoryIds?: InputMaybe<Scalars['String']['input']>;
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MstCountryQueryGetPrdProductListArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  domainCategoryIds?: InputMaybe<Scalars['String']['input']>;
  fromPrice?: InputMaybe<Scalars['Decimal']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  salesTypeId?: InputMaybe<Scalars['Int']['input']>;
  scopeId?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  toPrice?: InputMaybe<Scalars['Decimal']['input']>;
  typeId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetPrdShoppingCartArgs = {
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
};


export type MstCountryQueryGetProvinceByCountryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetRatingListArgs = {
  documentPath?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['Int']['input']>;
  keyType?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryGetSessionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetSuburbByCityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetTenderCountPerCompanyListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetTenderCountPerProvinceListArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetTenderListArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  cityIds?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  domainId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  franchiseeId?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  postedDate?: InputMaybe<Scalars['String']['input']>;
  provinceIds?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  suburbIds?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryGetTopLevelResponseItemsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryGetUserActivityArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetUserTopBidsArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryGetUserTopHireArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryJobArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryJobsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCategoryAttributeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCategoryAttributesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyAreaArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyAreasArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyAuditLogArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyAuditLogsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyCategoriesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyDocumentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyDocumentsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyEmailArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyEmailsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyMagazineAdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyMagazineAdsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyPackageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyPackageByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyPackagesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyPaymentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyPaymentsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyProvideArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyProvidesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanySeekArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanySeeksArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyTaskArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyTasksArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCompanyUsersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCompanyUserssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapCustomerEnquiryUploadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapCustomerEnquiryUploadsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapEflyersUploadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapEflyersUploadsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapItemRequestAreaArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapItemRequestAreasArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapItemRequestCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapItemRequestCategoryAttributeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapItemRequestCategoryAttributesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapItemRequestCategorysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapItemRequestUploadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapItemRequestUploadsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapItemResponseUploadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapItemResponseUploadsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapPackageAttributesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapPackageAttributessArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapProductDocumentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapProductDocumentsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapProductImagesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapProductImagessArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapSettingsRoleArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapSettingsRolesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapSpecialUploadArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapSpecialUploadsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapUserRoleRightsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapUserRoleRightssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMapUsersSettingsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMapUsersSettingssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMobileCheckArgs = {
  mobile?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryMstBeestatusArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstBeestatussArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCategoryAttributeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCategoryAttributeDataTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCategoryAttributeDataTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCategoryAttributesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCategorysArgs = {
  filter?: InputMaybe<MstCategoryParameter>;
};


export type MstCountryQueryMstCityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCitysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCmsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCmssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCompanyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCompanyDocumentTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCompanyDocumentTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCompanyStatusArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCompanyStatussArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCompanyTaskListArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCompanyTaskListsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCompanysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstConfigurationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstConfigurationsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstContactFormArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstContactFormsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCountriesArgs = {
  filter?: InputMaybe<MstCountryParameter>;
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCountryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmCustomerArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmCustomerCommentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmCustomerCommentsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCrmCustomersArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCrmInventoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmInventoryTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmInventoryTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCrmInventorysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCrmInvoiceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmInvoiceDetailsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmInvoiceDetailssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCrmInvoicesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCrmQuoteArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmQuoteDetailsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCrmQuoteDetailssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCrmQuotesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCustomerEnquiryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCustomerEnquiryResponseArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstCustomerEnquiryResponsesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstCustomerEnquirysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstDocumentStatusArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstDocumentStatussArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstDomainArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstDomainsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstEFlyersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstEFlyerssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstEmailStackArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstEmailStacksArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstFavouritesArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstFavouritessArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstFranchiseeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstFranchiseesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstItemRequestArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstItemRequestsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstItemResponseArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstItemResponsesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstKeywordsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstKeywordssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstMagazineAdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstMagazineAdTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstMagazineAdTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstMagazineAdsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstMagazineSectionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstMagazineSectionsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstMailTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstMailTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstNotificationStackArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstNotificationStacksArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstPackageArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstPackageAttributeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstPackageAttributesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstPackagesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstPaymentModeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstPaymentModesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstPaymentStatusArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstPaymentStatussArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstPaymentTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstPaymentTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstPeriodTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstPeriodTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstProvinceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstProvincesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstQuantityTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstQuantityTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstRatingArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstRatingsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstSettingTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstSettingTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstSettingsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstSettingssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstSpecialsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstSpecialssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstStatusArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstStatussArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstSuburbArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstSuburbsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstUserRoleArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstUserRolesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstUserStatusArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstUserStatussArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstUsersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstUserssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstVersionArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstVersionsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryMstVolumeTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryMstVolumeTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryOAuthArgs = {
  jti?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQueryPostArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPostAttachmentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPostAttachmentsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPostReplyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPostReplyAttachmentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPostReplyAttachmentsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPostReplysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPostsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdBidArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdBidsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdCategorysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdHireArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdHiresArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdOrderDetailsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdOrderDetailssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdOrderPaymentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdOrderPaymentsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdOrderStatusArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdOrderStatusTypeArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdOrderStatusTypesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdOrderStatussArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdOrdersArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdOrdersByUserArgs = {
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderStatusTypeId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
};


export type MstCountryQueryPrdOrdersForBusinessArgs = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderStatusTypeId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['ID']['input']>;
  paymentStatusId?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  salesTypeId?: InputMaybe<Scalars['Int']['input']>;
  scopeId?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
  typeId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdOrderssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdProductsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdProductssArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdShoppingCartArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdShoppingCartsArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPrdSubCategoryArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQueryPrdSubCategorysArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQueryPurchaseShoppingCartAsyncArgs = {
  id: Scalars['Int']['input'];
};


export type MstCountryQuerySSoLoginArgs = {
  jti?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQuerySSoLoginEncryptArgs = {
  jti?: InputMaybe<Scalars['String']['input']>;
};


export type MstCountryQuerySystemRoleArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQuerySystemRolesArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};


export type MstCountryQuerySystemUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MstCountryQuerySystemUsersArgs = {
  page?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<Scalars['ID']['input']>;
};

export type MstCountryType = {
  __typename?: 'MstCountryType';
  countryId: Scalars['Int']['output'];
  countryName?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Int']['output']>;
  mapCompanyAreas?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstFranchises?: Maybe<Array<Maybe<MstFranchiseeType>>>;
  mstProvinces?: Maybe<Array<Maybe<MstProvinceType>>>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
};

export type MstCrmCustomerCommentInputType = {
  comment?: InputMaybe<Scalars['String']['input']>;
  commentDate?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<MstCrmCustomerInputType>;
  customerCommentId: Scalars['Int']['input'];
  customerId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstCrmCustomerCommentType = {
  __typename?: 'MstCrmCustomerCommentType';
  comment?: Maybe<Scalars['String']['output']>;
  commentDate?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<MstCrmCustomerType>;
  customerCommentId: Scalars['Int']['output'];
  customerId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstCrmCustomerInputType = {
  cityId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  customerId: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCrmCustomerComment?: InputMaybe<Array<InputMaybe<MstCrmCustomerCommentInputType>>>;
  mstCrmInvoice?: InputMaybe<Array<InputMaybe<MstCrmInvoiceInputType>>>;
  mstCrmQuote?: InputMaybe<Array<InputMaybe<MstCrmQuoteInputType>>>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  suburbId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type MstCrmCustomerType = {
  __typename?: 'MstCrmCustomerType';
  cityId?: Maybe<Scalars['Int']['output']>;
  companyId?: Maybe<Scalars['Int']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customerId: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCrmCustomerComment?: Maybe<Array<Maybe<MstCrmCustomerCommentType>>>;
  mstCrmInvoice?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  mstCrmQuote?: Maybe<Array<Maybe<MstCrmQuoteType>>>;
  provinceId?: Maybe<Scalars['Int']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburbId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstCrmInventoryInputType = {
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  inventoryDescription?: InputMaybe<Scalars['String']['input']>;
  inventoryId: Scalars['Int']['input'];
  inventoryName?: InputMaybe<Scalars['String']['input']>;
  inventoryType?: InputMaybe<MstCrmInventoryTypeInputType>;
  inventoryTypeId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCrmInvoiceDetails?: InputMaybe<Array<InputMaybe<MstCrmInvoiceDetailsInputType>>>;
  mstCrmQuoteDetails?: InputMaybe<Array<InputMaybe<MstCrmQuoteDetailsInputType>>>;
  officeDescription?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  qunatityTypeName?: InputMaybe<Scalars['String']['input']>;
};

export type MstCrmInventoryType = {
  __typename?: 'MstCrmInventoryType';
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  inventoryDescription?: Maybe<Scalars['String']['output']>;
  inventoryId: Scalars['Int']['output'];
  inventoryName?: Maybe<Scalars['String']['output']>;
  inventoryType?: Maybe<MstCrmInventoryTypeType>;
  inventoryTypeId?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCrmInvoiceDetails?: Maybe<Array<Maybe<MstCrmInvoiceDetailsType>>>;
  mstCrmQuoteDetails?: Maybe<Array<Maybe<MstCrmQuoteDetailsType>>>;
  officeDescription?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  qunatityTypeName?: Maybe<Scalars['String']['output']>;
};

export type MstCrmInventoryTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  inventoryTypeId: Scalars['Int']['input'];
  inventoryTypeName?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCrmInventory?: InputMaybe<Array<InputMaybe<MstCrmInventoryInputType>>>;
};

export type MstCrmInventoryTypeType = {
  __typename?: 'MstCrmInventoryTypeType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  inventoryTypeId: Scalars['Int']['output'];
  inventoryTypeName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCrmInventory?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
};

export type MstCrmInvoiceDetailsInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  inventory?: InputMaybe<Array<InputMaybe<MstCrmInventoryInputType>>>;
  inventoryId?: InputMaybe<Scalars['Int']['input']>;
  invoice?: InputMaybe<Array<InputMaybe<MstCrmInvoiceInputType>>>;
  invoiceId?: InputMaybe<Scalars['Int']['input']>;
  invoiceLineItemId: Scalars['Int']['input'];
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  totalAmount?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MstCrmInvoiceDetailsType = {
  __typename?: 'MstCrmInvoiceDetailsType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  inventory?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
  inventoryId?: Maybe<Scalars['Int']['output']>;
  invoice?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  invoiceId?: Maybe<Scalars['Int']['output']>;
  invoiceLineItemId: Scalars['Int']['output'];
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  price?: Maybe<Scalars['Decimal']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
};

export type MstCrmInvoiceInputType = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<MstCrmCustomerInputType>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  invoiceDate?: InputMaybe<Scalars['DateTime']['input']>;
  invoiceDescription?: InputMaybe<Scalars['String']['input']>;
  invoiceFooter?: InputMaybe<Scalars['String']['input']>;
  invoiceId: Scalars['Int']['input'];
  invoiceNo?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCrmInvoiceDetails?: InputMaybe<Array<InputMaybe<MstCrmInvoiceDetailsInputType>>>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  paymentModeId?: InputMaybe<Scalars['Int']['input']>;
  paymentStatusId?: InputMaybe<Scalars['Int']['input']>;
  quoteId?: InputMaybe<Scalars['Int']['input']>;
  totalAmount?: InputMaybe<Scalars['Decimal']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  vatamount?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MstCrmInvoiceType = {
  __typename?: 'MstCrmInvoiceType';
  amount?: Maybe<Scalars['Decimal']['output']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<MstCrmCustomerType>;
  customerId?: Maybe<Scalars['Int']['output']>;
  invoiceDate?: Maybe<Scalars['DateTime']['output']>;
  invoiceDescription?: Maybe<Scalars['String']['output']>;
  invoiceFooter?: Maybe<Scalars['String']['output']>;
  invoiceId: Scalars['Int']['output'];
  invoiceNo?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCrmInvoiceDetails?: Maybe<Array<Maybe<MstCrmInvoiceDetailsType>>>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentModeId?: Maybe<Scalars['Int']['output']>;
  paymentStatusId?: Maybe<Scalars['Int']['output']>;
  quoteId?: Maybe<Scalars['Int']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  vatamount?: Maybe<Scalars['Decimal']['output']>;
};

export type MstCrmQuoteDetailsInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  inventory?: InputMaybe<MstCrmInventoryInputType>;
  inventoryId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quote?: InputMaybe<MstCrmQuoteInputType>;
  quoteId?: InputMaybe<Scalars['Int']['input']>;
  quoteLineItemId: Scalars['Int']['input'];
  totalAmount?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MstCrmQuoteDetailsType = {
  __typename?: 'MstCrmQuoteDetailsType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  inventory?: Maybe<MstCrmInventoryType>;
  inventoryId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  price?: Maybe<Scalars['Decimal']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  quote?: Maybe<MstCrmQuoteType>;
  quoteId?: Maybe<Scalars['Int']['output']>;
  quoteLineItemId: Scalars['Int']['output'];
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
};

export type MstCrmQuoteInputType = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<MstCrmCustomerInputType>;
  customerId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCrmQuoteDetails?: InputMaybe<Array<InputMaybe<MstCrmQuoteDetailsInputType>>>;
  quoteDate?: InputMaybe<Scalars['DateTime']['input']>;
  quoteDescription?: InputMaybe<Scalars['String']['input']>;
  quoteFooter?: InputMaybe<Scalars['String']['input']>;
  quoteId: Scalars['Int']['input'];
  quoteNo?: InputMaybe<Scalars['String']['input']>;
  totalAmount?: InputMaybe<Scalars['Decimal']['input']>;
  vatamount?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MstCrmQuoteType = {
  __typename?: 'MstCrmQuoteType';
  amount?: Maybe<Scalars['Decimal']['output']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customer?: Maybe<MstCrmCustomerType>;
  customerId?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCrmQuoteDetails?: Maybe<Array<Maybe<MstCrmQuoteDetailsType>>>;
  quoteDate?: Maybe<Scalars['DateTime']['output']>;
  quoteDescription?: Maybe<Scalars['String']['output']>;
  quoteFooter?: Maybe<Scalars['String']['output']>;
  quoteId: Scalars['Int']['output'];
  quoteNo?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  vatamount?: Maybe<Scalars['Decimal']['output']>;
};

export type MstCustomerEnquiryInputType = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  customerEnquiryId?: InputMaybe<Scalars['Int']['input']>;
  enquiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  enquiryDescription?: InputMaybe<Scalars['String']['input']>;
  enquiryStatusId?: InputMaybe<Scalars['Int']['input']>;
  enquiryTitle?: InputMaybe<Scalars['String']['input']>;
  mapCustomerEnquiryUpload?: InputMaybe<Array<InputMaybe<MapCustomerEnquiryUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCustomerEnquiryResponse?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryResponseInputType>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstCustomerEnquiryResponseInputType = {
  ceresponseId: Scalars['Int']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  customerEnquiry?: InputMaybe<MstCustomerEnquiryInputType>;
  customerEnquiryId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  responseDate?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstCustomerEnquiryResponseType = {
  __typename?: 'MstCustomerEnquiryResponseType';
  ceresponseId: Scalars['Int']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customerEnquiry?: Maybe<MstCustomerEnquiryType>;
  customerEnquiryId?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  responseDate?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstCustomerEnquiryType = {
  __typename?: 'MstCustomerEnquiryType';
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  customerEnquiryId: Scalars['Int']['output'];
  enquiryDate?: Maybe<Scalars['DateTime']['output']>;
  enquiryDescription?: Maybe<Scalars['String']['output']>;
  enquiryStatusId?: Maybe<Scalars['Int']['output']>;
  enquiryTitle?: Maybe<Scalars['String']['output']>;
  mapCustomerEnquiryUpload?: Maybe<Array<Maybe<MapCustomerEnquiryUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCompanyLimited?: Maybe<MstCompanyLimitedType>;
  mstCustomerEnquiryResponse?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstDocumentStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentStatus?: InputMaybe<Scalars['String']['input']>;
  documentStatusId: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyDocument?: InputMaybe<Array<InputMaybe<MapCompanyDocumentInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MstDocumentStatusType = {
  __typename?: 'MstDocumentStatusType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentStatus?: Maybe<Scalars['String']['output']>;
  documentStatusId: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyDocument?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MstDomainInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  domainId: Scalars['Int']['input'];
  domainName?: InputMaybe<Scalars['String']['input']>;
  prdCategory?: InputMaybe<Array<InputMaybe<PrdCategoryInputType>>>;
  prdProducts?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
};

export type MstDomainType = {
  __typename?: 'MstDomainType';
  active?: Maybe<Scalars['Boolean']['output']>;
  domainId: Scalars['Int']['output'];
  domainName?: Maybe<Scalars['String']['output']>;
  prdCategory?: Maybe<Array<Maybe<PrdCategoryType>>>;
  prdProducts?: Maybe<Array<Maybe<PrdProductsType>>>;
};

export type MstEFlyersDtoType = {
  __typename?: 'MstEFlyersDtoType';
  callType?: Maybe<Scalars['Int']['output']>;
  categoryID?: Maybe<Scalars['Int']['output']>;
  categoryIds?: Maybe<Scalars['String']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  cityIds?: Maybe<Scalars['String']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  companyDescription?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['Int']['output']>;
  companyIds?: Maybe<Scalars['String']['output']>;
  companyLocation?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  countryID?: Maybe<Scalars['Int']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  documentLink?: Maybe<Scalars['String']['output']>;
  eFlyerDescription?: Maybe<Scalars['String']['output']>;
  eFlyerID?: Maybe<Scalars['Int']['output']>;
  eFlyerName?: Maybe<Scalars['String']['output']>;
  eflyerId?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  favouriteID?: Maybe<Scalars['Int']['output']>;
  franchiseID?: Maybe<Scalars['Int']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  isAdmin?: Maybe<Scalars['Int']['output']>;
  isMenu?: Maybe<Scalars['Boolean']['output']>;
  magazineName?: Maybe<Scalars['String']['output']>;
  mapEflyersUploadDtos?: Maybe<Array<Maybe<MstEFlyersUploadDtoType>>>;
  phone?: Maybe<Scalars['String']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceIds?: Maybe<Scalars['String']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  ratingScore?: Maybe<Scalars['Decimal']['output']>;
  searchTitle?: Maybe<Scalars['String']['output']>;
  stId?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  statusName?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbIds?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstEFlyersInputType = {
  category?: InputMaybe<MstCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  efmid: Scalars['Int']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isMenu?: InputMaybe<Scalars['Boolean']['input']>;
  mapEflyersUpload?: InputMaybe<Array<InputMaybe<MapEflyersUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MstEFlyersType = {
  __typename?: 'MstEFlyersType';
  category?: Maybe<MstCategoryType>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  efmid: Scalars['Int']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  isMenu?: Maybe<Scalars['Boolean']['output']>;
  mapEflyersUpload?: Maybe<Array<Maybe<MapEflyersUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type MstEFlyersUploadDtoType = {
  __typename?: 'MstEFlyersUploadDtoType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  documentType?: Maybe<Scalars['Int']['output']>;
  eflyerUploadId?: Maybe<Scalars['Int']['output']>;
  efmid?: Maybe<Scalars['Int']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  thumbNailImagePath?: Maybe<Scalars['String']['output']>;
};

export type MstEmailStackInputType = {
  attachmentName?: InputMaybe<Scalars['String']['input']>;
  attachmentPath?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  emailCreatedOn?: InputMaybe<Scalars['DateTime']['input']>;
  emailSendCount?: InputMaybe<Scalars['Int']['input']>;
  emailSentFrom?: InputMaybe<Scalars['String']['input']>;
  emailSentOn?: InputMaybe<Scalars['DateTime']['input']>;
  emailSentSuccess?: InputMaybe<Scalars['Boolean']['input']>;
  emailStackId: Scalars['Int']['input'];
  fromAddress?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  toAddress?: InputMaybe<Scalars['String']['input']>;
  toBcc?: InputMaybe<Scalars['String']['input']>;
  toBccname?: InputMaybe<Scalars['String']['input']>;
  toCc?: InputMaybe<Scalars['String']['input']>;
  toCcname?: InputMaybe<Scalars['String']['input']>;
  toName?: InputMaybe<Scalars['String']['input']>;
};

export type MstEmailStackType = {
  __typename?: 'MstEmailStackType';
  attachmentName?: Maybe<Scalars['String']['output']>;
  attachmentPath?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  emailCreatedOn?: Maybe<Scalars['DateTime']['output']>;
  emailSendCount?: Maybe<Scalars['Int']['output']>;
  emailSentFrom?: Maybe<Scalars['String']['output']>;
  emailSentOn?: Maybe<Scalars['DateTime']['output']>;
  emailSentSuccess?: Maybe<Scalars['Boolean']['output']>;
  emailStackId: Scalars['Int']['output'];
  fromAddress?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  toAddress?: Maybe<Scalars['String']['output']>;
  toBcc?: Maybe<Scalars['String']['output']>;
  toBccname?: Maybe<Scalars['String']['output']>;
  toCc?: Maybe<Scalars['String']['output']>;
  toCcname?: Maybe<Scalars['String']['output']>;
  toName?: Maybe<Scalars['String']['output']>;
};

export type MstFavouritesInputType = {
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  eflyerId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstFavouriteId: Scalars['Int']['input'];
  productId?: InputMaybe<Scalars['Int']['input']>;
  specialId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstFavouritesType = {
  __typename?: 'MstFavouritesType';
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  eflyerId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstFavouriteId: Scalars['Int']['output'];
  productId?: Maybe<Scalars['Int']['output']>;
  specialId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstFranchiseeInputType = {
  cityId?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  emailId?: InputMaybe<Scalars['String']['input']>;
  franchiseId: Scalars['Int']['input'];
  franchiseName?: InputMaybe<Scalars['String']['input']>;
  franchiseUser?: InputMaybe<MstUsersInputType>;
  franchiseUserId?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  suburbId?: InputMaybe<Scalars['Int']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type MstFranchiseeType = {
  __typename?: 'MstFranchiseeType';
  cityId?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  emailId?: Maybe<Scalars['String']['output']>;
  franchiseId: Scalars['Int']['output'];
  franchiseName?: Maybe<Scalars['String']['output']>;
  franchiseUser?: Maybe<MstUsersType>;
  franchiseUserId?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  provinceId?: Maybe<Scalars['Int']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburbId?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstItemRequestDtoType = {
  __typename?: 'MstItemRequestDtoType';
  city?: Maybe<Scalars['String']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  itemCategory?: Maybe<Scalars['String']['output']>;
  itemCategoryID?: Maybe<Scalars['Int']['output']>;
  itemImagePath?: Maybe<Scalars['String']['output']>;
  itemRequestDate?: Maybe<Scalars['DateTime']['output']>;
  itemRequestDescription?: Maybe<Scalars['String']['output']>;
  itemRequestID?: Maybe<Scalars['Int']['output']>;
  itemRequestStatus?: Maybe<Scalars['String']['output']>;
  itemRequestStatusID?: Maybe<Scalars['Int']['output']>;
  itemRequestTitle?: Maybe<Scalars['String']['output']>;
  mapItemRequestUploadDto?: Maybe<Array<Maybe<MapItemRequestUploadDtoType>>>;
  province?: Maybe<Scalars['String']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  selectedCompany?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type MstItemRequestInputType = {
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  itemRequestDate?: InputMaybe<Scalars['DateTime']['input']>;
  itemRequestDescription?: InputMaybe<Scalars['String']['input']>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  itemRequestStatusId?: InputMaybe<Scalars['Int']['input']>;
  itemRequestTitle?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
  requestApprovedMail?: InputMaybe<Scalars['Boolean']['input']>;
  selectedCompany?: InputMaybe<Scalars['Int']['input']>;
  suburbId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstItemRequestServiceDto = {
  __typename?: 'MstItemRequestServiceDto';
  categoryID?: Maybe<Scalars['Int']['output']>;
  categoryName?: Maybe<MstCategoryType>;
  createdBy?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  domainCategoryID?: Maybe<Scalars['Int']['output']>;
  domainCategoryName?: Maybe<MstCategoryType>;
  itemRequestServiceDate?: Maybe<Scalars['DateTime']['output']>;
  itemRequestServiceDescription?: Maybe<Scalars['String']['output']>;
  itemRequestServiceID?: Maybe<Scalars['Int']['output']>;
  itemRequestServiceStatusID?: Maybe<Scalars['Int']['output']>;
  itemRequestServiceTitle?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['String']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  subCategoryID?: Maybe<Scalars['Int']['output']>;
  subCategoryName?: Maybe<MstCategoryType>;
  thumbNailPath?: Maybe<Scalars['String']['output']>;
  uploadPath?: Maybe<Scalars['String']['output']>;
};

export type MstItemRequestType = {
  __typename?: 'MstItemRequestType';
  categoryId?: Maybe<Scalars['Int']['output']>;
  cityId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  itemRequestDate?: Maybe<Scalars['DateTime']['output']>;
  itemRequestDescription?: Maybe<Scalars['String']['output']>;
  itemRequestId: Scalars['Int']['output'];
  itemRequestStatusId?: Maybe<Scalars['Int']['output']>;
  itemRequestTitle?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  provinceId?: Maybe<Scalars['Int']['output']>;
  requestApprovedMail?: Maybe<Scalars['Boolean']['output']>;
  selectedCompany?: Maybe<Scalars['Int']['output']>;
  suburbId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstItemResponseInputType = {
  comment?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isRejected?: InputMaybe<Scalars['Boolean']['input']>;
  itemRequestId?: InputMaybe<Scalars['Int']['input']>;
  itemResponseId: Scalars['Int']['input'];
  mapItemResponseUpload?: InputMaybe<Array<InputMaybe<MapItemResponseUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  replyTo?: InputMaybe<MstItemResponseInputType>;
  replyToId?: InputMaybe<Scalars['Int']['input']>;
  responseDate?: InputMaybe<Scalars['DateTime']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstItemResponseType = {
  __typename?: 'MstItemResponseType';
  comment?: Maybe<Scalars['String']['output']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  inverseReplyTo?: Maybe<MstItemResponseType>;
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isRejected?: Maybe<Scalars['Boolean']['output']>;
  itemRequestId?: Maybe<Scalars['Int']['output']>;
  itemResponseId: Scalars['Int']['output'];
  mapItemResponseUpload?: Maybe<Array<Maybe<MapItemResponseUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  replyTo?: Maybe<MstItemResponseType>;
  replyToId?: Maybe<Scalars['Int']['output']>;
  responseDate?: Maybe<Scalars['DateTime']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstKeywordsInputType = {
  category?: InputMaybe<MstCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  keywordId: Scalars['Int']['input'];
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstKeywordsType = {
  __typename?: 'MstKeywordsType';
  category?: Maybe<MstCategoryType>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  keyword?: Maybe<Scalars['String']['output']>;
  keywordId: Scalars['Int']['output'];
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']['output']>;
};

export type MstLoggedInUserDtoType = {
  __typename?: 'MstLoggedInUserDtoType';
  cityID?: Maybe<Scalars['Int']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  companyID?: Maybe<Scalars['Int']['output']>;
  companyStatus?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  packageID?: Maybe<Scalars['Int']['output']>;
  paymentUrl?: Maybe<Scalars['String']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbName?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenExpires?: Maybe<Scalars['DateTime']['output']>;
  userProfileImage?: Maybe<Scalars['String']['output']>;
  vGender?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstLoggedInUserMobileDtoType = {
  __typename?: 'MstLoggedInUserMobileDtoType';
  cityID?: Maybe<Scalars['Int']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  passPhrase?: Maybe<Scalars['String']['output']>;
  paymentUrl?: Maybe<Scalars['String']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbName?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenExpires?: Maybe<Scalars['DateTime']['output']>;
  userProfileImage?: Maybe<Scalars['String']['output']>;
  vGender?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstMagazineAdInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  discount?: InputMaybe<Scalars['Decimal']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  magazineAdId: Scalars['Int']['input'];
  magazineAdType?: InputMaybe<MstMagazineAdTypeInputType>;
  magazineAdTypeId?: InputMaybe<Scalars['Int']['input']>;
  magazineSection?: InputMaybe<MstMagazineSectionInputType>;
  magazineSectionId?: InputMaybe<Scalars['Int']['input']>;
  mapCompanyMagazineAd?: InputMaybe<Array<InputMaybe<MapCompanyMagazineAdInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  price?: InputMaybe<Scalars['Decimal']['input']>;
};

export type MstMagazineAdType = {
  __typename?: 'MstMagazineAdType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  discount?: Maybe<Scalars['Decimal']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  magazineAdId: Scalars['Int']['output'];
  magazineAdType?: Maybe<MstMagazineAdTypeType>;
  magazineAdTypeId?: Maybe<Scalars['Int']['output']>;
  magazineSection?: Maybe<MstMagazineSectionType>;
  magazineSectionId?: Maybe<Scalars['Int']['output']>;
  mapCompanyMagazineAd?: Maybe<Array<Maybe<MapCompanyMagazineAdType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  price?: Maybe<Scalars['Decimal']['output']>;
};

export type MstMagazineAdTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  magazineAdTypeId: Scalars['Int']['input'];
  magazineAdTypeName?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstMagazineAd?: InputMaybe<Array<InputMaybe<MstMagazineAdInputType>>>;
};

export type MstMagazineAdTypeType = {
  __typename?: 'MstMagazineAdTypeType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  magazineAdTypeId: Scalars['Int']['output'];
  magazineAdTypeName?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstMagazineAd?: Maybe<Array<Maybe<MstMagazineAdType>>>;
};

export type MstMagazineSectionInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  magazineSectionId: Scalars['Int']['input'];
  magazineSectionName?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstMagazineAd?: InputMaybe<Array<InputMaybe<MstMagazineAdInputType>>>;
};

export type MstMagazineSectionType = {
  __typename?: 'MstMagazineSectionType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  magazineSectionId: Scalars['Int']['output'];
  magazineSectionName?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstMagazineAd?: Maybe<Array<Maybe<MstMagazineAdType>>>;
};

export type MstMailTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mailBody?: InputMaybe<Scalars['String']['input']>;
  mailSubject?: InputMaybe<Scalars['String']['input']>;
  mailType?: InputMaybe<Scalars['String']['input']>;
  mailTypeId: Scalars['Int']['input'];
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MstMailTypeType = {
  __typename?: 'MstMailTypeType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mailBody?: Maybe<Scalars['String']['output']>;
  mailSubject?: Maybe<Scalars['String']['output']>;
  mailType?: Maybe<Scalars['String']['output']>;
  mailTypeId: Scalars['Int']['output'];
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
};

export type MstNotificationStackInputType = {
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceType?: InputMaybe<Scalars['Int']['input']>;
  notificationDate?: InputMaybe<Scalars['DateTime']['input']>;
  notificationId: Scalars['Long']['input'];
  postData?: InputMaybe<Scalars['String']['input']>;
};

export type MstNotificationStackType = {
  __typename?: 'MstNotificationStackType';
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<Scalars['Int']['output']>;
  notificationDate?: Maybe<Scalars['DateTime']['output']>;
  notificationId: Scalars['Long']['output'];
  postData?: Maybe<Scalars['String']['output']>;
};

export type MstPackageAttributeInputType = {
  attributeName?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapPackageAttributes?: InputMaybe<Array<InputMaybe<MapPackageAttributesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  pattributeId: Scalars['Int']['input'];
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type MstPackageAttributeType = {
  __typename?: 'MstPackageAttributeType';
  attributeName?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapPackageAttributes?: Maybe<Array<Maybe<MapPackageAttributesType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  pattributeId: Scalars['Int']['output'];
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type MstPackageDetailsDtoType = {
  __typename?: 'MstPackageDetailsDtoType';
  activeText?: Maybe<Scalars['String']['output']>;
  actualValue?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Decimal']['output']>;
  attributeID?: Maybe<Scalars['Int']['output']>;
  attributeName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  pD_ActiveText?: Maybe<Scalars['String']['output']>;
  pD_isActive?: Maybe<Scalars['Boolean']['output']>;
  packageDetailsID?: Maybe<Scalars['Int']['output']>;
  packageID?: Maybe<Scalars['Int']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type MstPackageInputType = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isRecommended?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyPackage?: InputMaybe<Array<InputMaybe<MapCompanyPackageInputType>>>;
  mapPackageAttributes?: InputMaybe<Array<InputMaybe<MapPackageAttributesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstPackageAttribute?: InputMaybe<Array<InputMaybe<MstPackageAttributeInputType>>>;
  packageId: Scalars['Int']['input'];
  packageName?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type MstPackageListDtoType = {
  __typename?: 'MstPackageListDtoType';
  activeText?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Decimal']['output']>;
  fifteenDiscount?: Maybe<Scalars['Decimal']['output']>;
  fifteenOFF?: Maybe<Scalars['Decimal']['output']>;
  fiveDiscount?: Maybe<Scalars['Decimal']['output']>;
  fiveOFF?: Maybe<Scalars['Decimal']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isRecommended?: Maybe<Scalars['Boolean']['output']>;
  packageID?: Maybe<Scalars['Int']['output']>;
  packageName?: Maybe<Scalars['String']['output']>;
  recommendedText?: Maybe<Scalars['String']['output']>;
  sixMonths?: Maybe<Scalars['Decimal']['output']>;
  sixMonthsVat?: Maybe<Scalars['Decimal']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  tenDiscount?: Maybe<Scalars['Decimal']['output']>;
  tenOFF?: Maybe<Scalars['Decimal']['output']>;
  threeMonths?: Maybe<Scalars['Decimal']['output']>;
  threeMonthsVat?: Maybe<Scalars['Decimal']['output']>;
  twelveMonths?: Maybe<Scalars['Decimal']['output']>;
  twelveMonthsVat?: Maybe<Scalars['Decimal']['output']>;
  zeroOFF?: Maybe<Scalars['Decimal']['output']>;
};

export type MstPackageType = {
  __typename?: 'MstPackageType';
  amount?: Maybe<Scalars['Decimal']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isRecommended?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyPackage?: Maybe<Array<Maybe<MapCompanyPackageType>>>;
  mapPackageAttributes?: Maybe<Array<Maybe<MapPackageAttributesType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstPackageAttribute?: Maybe<Array<Maybe<MstPackageAttributeType>>>;
  packageId: Scalars['Int']['output'];
  packageName?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
};

export type MstPaymentModeInputType = {
  cancelUrl?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyPayment?: InputMaybe<Array<InputMaybe<MapCompanyPaymentInputType>>>;
  merchantID?: InputMaybe<Scalars['String']['input']>;
  merchantKey?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstProvinces?: InputMaybe<Array<InputMaybe<MstProvinceInputType>>>;
  notifyUrl?: InputMaybe<Scalars['String']['input']>;
  paymentMode?: InputMaybe<Scalars['String']['input']>;
  paymentModeId: Scalars['Int']['input'];
  returnUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MstPaymentModeType = {
  __typename?: 'MstPaymentModeType';
  cancelUrl?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyPayment?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  merchantID?: Maybe<Scalars['String']['output']>;
  merchantKey?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstProvinces?: Maybe<Array<Maybe<MstProvinceType>>>;
  notifyUrl?: Maybe<Scalars['String']['output']>;
  paymentMode?: Maybe<Scalars['String']['output']>;
  paymentModeId: Scalars['Int']['output'];
  returnUrl?: Maybe<Scalars['String']['output']>;
};

export type MstPaymentStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyPayment?: InputMaybe<Array<InputMaybe<MapCompanyPaymentInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  paymentStatus?: InputMaybe<Scalars['String']['input']>;
  paymentStatusId: Scalars['Int']['input'];
};

export type MstPaymentStatusType = {
  __typename?: 'MstPaymentStatusType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyPayment?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  paymentStatus?: Maybe<Scalars['String']['output']>;
  paymentStatusId: Scalars['Int']['output'];
};

export type MstPaymentTypeInputType = {
  description?: InputMaybe<Scalars['String']['input']>;
  paymentTypeId: Scalars['Int']['input'];
};

export type MstPaymentTypeType = {
  __typename?: 'MstPaymentTypeType';
  description?: Maybe<Scalars['String']['output']>;
  paymentTypeId: Scalars['Int']['output'];
};

export type MstPeriodTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  parentFormNavigation?: InputMaybe<DevFormsInputType>;
  periodType?: InputMaybe<Scalars['String']['input']>;
  periodTypeId: Scalars['Int']['input'];
};

export type MstPeriodTypeType = {
  __typename?: 'MstPeriodTypeType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  periodType?: Maybe<Scalars['String']['output']>;
  periodTypeId: Scalars['Int']['output'];
};

export type MstProvinceInputType = {
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCity?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstCityInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  provinceId?: InputMaybe<Scalars['ID']['input']>;
  provinceName?: InputMaybe<Scalars['String']['input']>;
};

export type MstProvinceType = {
  __typename?: 'MstProvinceType';
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCity?: Maybe<Array<Maybe<MstCityType>>>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  provinceId?: Maybe<Scalars['ID']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
};

export type MstQuantityTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  quantityType?: InputMaybe<Scalars['String']['input']>;
  quantityTypeId: Scalars['Int']['input'];
};

export type MstQuantityTypeType = {
  __typename?: 'MstQuantityTypeType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  quantityType?: Maybe<Scalars['String']['output']>;
  quantityTypeId: Scalars['Int']['output'];
};

export type MstRatingDtoType = {
  __typename?: 'MstRatingDtoType';
  companyID?: Maybe<Scalars['Int']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  dateofReview?: Maybe<Scalars['DateTime']['output']>;
  documentPath?: Maybe<Scalars['String']['output']>;
  emaiId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fromDate?: Maybe<Scalars['DateTime']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['Int']['output']>;
  keyID?: Maybe<Scalars['Int']['output']>;
  keyType?: Maybe<Scalars['Int']['output']>;
  mST_RatingID?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ratingForDescription?: Maybe<Scalars['String']['output']>;
  ratingForTitle?: Maybe<Scalars['String']['output']>;
  ratingID?: Maybe<Scalars['Int']['output']>;
  ratingScore?: Maybe<Scalars['Int']['output']>;
  ratingScoreCount?: Maybe<Scalars['Int']['output']>;
  ratingScoreName?: Maybe<Scalars['String']['output']>;
  ratingScorePercent?: Maybe<Scalars['Decimal']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  reviewType?: Maybe<Scalars['Int']['output']>;
  showResult?: Maybe<Scalars['Int']['output']>;
  staId?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  statusName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  toDate?: Maybe<Scalars['DateTime']['output']>;
  totalRatingCount?: Maybe<Scalars['Int']['output']>;
  totalRatingScore?: Maybe<Scalars['Decimal']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  userPhoto?: Maybe<Scalars['String']['output']>;
};

export type MstRatingInputType = {
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  eflyerId?: InputMaybe<Scalars['Int']['input']>;
  emaiId?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstRatingId?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  ratingScore?: InputMaybe<Scalars['Int']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  special?: InputMaybe<MstSpecialsInputType>;
  specialId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstRatingType = {
  __typename?: 'MstRatingType';
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  eflyerId?: Maybe<Scalars['Int']['output']>;
  emaiId?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstRatingId: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  ratingScore?: Maybe<Scalars['Int']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  special?: Maybe<MstSpecialsType>;
  specialId?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type MstReportUserDtoType = {
  __typename?: 'MstReportUserDtoType';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  userID: Scalars['Int']['output'];
  userProfileImage?: Maybe<Scalars['String']['output']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']['output']>;
};

export type MstSettingTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstSettings?: InputMaybe<Array<InputMaybe<MstSettingsInputType>>>;
  settingTypeId: Scalars['Int']['input'];
  settingTypeName?: InputMaybe<Scalars['String']['input']>;
};

export type MstSettingTypeType = {
  __typename?: 'MstSettingTypeType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstSettings?: Maybe<Array<Maybe<MstSettingsType>>>;
  settingTypeId: Scalars['Int']['output'];
  settingTypeName?: Maybe<Scalars['String']['output']>;
};

export type MstSettingsInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapSettingsRole?: InputMaybe<Array<InputMaybe<MapSettingsRoleInputType>>>;
  mapUsersSettings?: InputMaybe<Array<InputMaybe<MapUsersSettingsInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  settingId: Scalars['Int']['input'];
  settingName?: InputMaybe<Scalars['String']['input']>;
  settingType?: InputMaybe<MstSettingTypeInputType>;
  settingTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type MstSettingsType = {
  __typename?: 'MstSettingsType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapSettingsRole?: Maybe<Array<Maybe<MapSettingsRoleType>>>;
  mapUsersSettings?: Maybe<Array<Maybe<MapUsersSettingsType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  settingId: Scalars['Int']['output'];
  settingName?: Maybe<Scalars['String']['output']>;
  settingType?: Maybe<MstSettingTypeType>;
  settingTypeId?: Maybe<Scalars['Int']['output']>;
};

export type MstSpecialsDtoType = {
  __typename?: 'MstSpecialsDtoType';
  amount?: Maybe<Scalars['Decimal']['output']>;
  categoryID?: Maybe<Scalars['Int']['output']>;
  categoryIds?: Maybe<Scalars['String']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  cityIds?: Maybe<Scalars['String']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  companyIds?: Maybe<Scalars['String']['output']>;
  countryID?: Maybe<Scalars['Int']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  dis?: Maybe<Scalars['Float']['output']>;
  distance?: Maybe<Scalars['Decimal']['output']>;
  documentLink?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  franchiseId?: Maybe<Scalars['Int']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  mapSpecialUpload?: Maybe<Array<Maybe<MapSpecialUploadType>>>;
  phone?: Maybe<Scalars['String']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceIds?: Maybe<Scalars['String']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  specialDescription?: Maybe<Scalars['String']['output']>;
  specialID?: Maybe<Scalars['Int']['output']>;
  specialId?: Maybe<Scalars['Int']['output']>;
  specialName?: Maybe<Scalars['String']['output']>;
  staId?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  statusID?: Maybe<Scalars['Int']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  statusName?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbIds?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLatitude?: Maybe<Scalars['Float']['output']>;
  userLongtitude?: Maybe<Scalars['Float']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstSpecialsInputType = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  category?: InputMaybe<MstCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<MstCityInputType>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  company?: InputMaybe<MstCompanyInputType>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<MstCountryInputType>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mapSpecialUpload?: InputMaybe<Array<InputMaybe<MapSpecialUploadInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstFavourites?: InputMaybe<Array<InputMaybe<MstFavouritesInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<MstProvinceInputType>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
  specialId: Scalars['Int']['input'];
  specialName?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<MstStatusInputType>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  statusNavigation?: InputMaybe<MstSuburbInputType>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  suburbId?: InputMaybe<Scalars['Int']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type MstSpecialsType = {
  __typename?: 'MstSpecialsType';
  amount?: Maybe<Scalars['Decimal']['output']>;
  category?: Maybe<MstCategoryType>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  city?: Maybe<MstCityType>;
  cityId?: Maybe<Scalars['Int']['output']>;
  company?: Maybe<MstCompanyType>;
  companyId?: Maybe<Scalars['Int']['output']>;
  country?: Maybe<MstCountryType>;
  countryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  imagePath?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  mapSpecialUpload?: Maybe<Array<Maybe<MapSpecialUploadType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstFavourites?: Maybe<Array<Maybe<MstFavouritesType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  phone?: Maybe<Scalars['String']['output']>;
  province?: Maybe<MstProvinceType>;
  provinceId?: Maybe<Scalars['Int']['output']>;
  specialId: Scalars['Int']['output'];
  specialName?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<MstStatusType>;
  statusId?: Maybe<Scalars['Int']['output']>;
  statusNavigation?: Maybe<MstSuburbType>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburbId?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCustomerEnquiry?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryInputType>>>;
  mstEFlyers?: InputMaybe<Array<InputMaybe<MstEFlyersInputType>>>;
  mstKeywords?: InputMaybe<Array<InputMaybe<MstKeywordsInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  statusId: Scalars['Int']['input'];
  statusName?: InputMaybe<Scalars['String']['input']>;
};

export type MstStatusType = {
  __typename?: 'MstStatusType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCustomerEnquiry?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  mstEFlyers?: Maybe<Array<Maybe<MstEFlyersType>>>;
  mstKeywords?: Maybe<Array<Maybe<MstKeywordsType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  statusId: Scalars['Int']['output'];
  statusName?: Maybe<Scalars['String']['output']>;
};

export type MstSuburbInputType = {
  city?: InputMaybe<MstCityInputType>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapCompanyArea?: InputMaybe<Array<InputMaybe<MapCompanyAreaInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstSpecials?: InputMaybe<Array<InputMaybe<MstSpecialsInputType>>>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  suburbId: Scalars['Int']['input'];
  suburbName?: InputMaybe<Scalars['String']['input']>;
};

export type MstSuburbType = {
  __typename?: 'MstSuburbType';
  city?: Maybe<MstCityType>;
  cityId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapCompanyArea?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstSpecials?: Maybe<Array<Maybe<MstSpecialsType>>>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  suburbId: Scalars['Int']['output'];
  suburbName?: Maybe<Scalars['String']['output']>;
};

export type MstUserAddressInputType = {
  cityID?: InputMaybe<Scalars['Int']['input']>;
  countryID?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  provinceID?: InputMaybe<Scalars['Int']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  suburbID?: InputMaybe<Scalars['Int']['input']>;
  userAddressID?: InputMaybe<Scalars['Int']['input']>;
  userID?: InputMaybe<Scalars['Int']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type MstUserAddressType = {
  __typename?: 'MstUserAddressType';
  city?: Maybe<Scalars['String']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  countryID?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburb?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  userAddressID?: Maybe<Scalars['Int']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstUserDtoInputType = {
  appleUserID?: InputMaybe<Scalars['String']['input']>;
  categoryID?: InputMaybe<Scalars['Int']['input']>;
  cityID?: InputMaybe<Scalars['Int']['input']>;
  cityName?: InputMaybe<Scalars['String']['input']>;
  compPackageID?: InputMaybe<Scalars['Int']['input']>;
  compPercent?: InputMaybe<Scalars['Decimal']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  countryName?: InputMaybe<Scalars['String']['input']>;
  dateofBirth?: InputMaybe<Scalars['DateTime']['input']>;
  deviceID?: InputMaybe<Scalars['String']['input']>;
  deviceType?: InputMaybe<Scalars['Int']['input']>;
  discount?: InputMaybe<Scalars['Int']['input']>;
  domainUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailActivationCode?: InputMaybe<Scalars['String']['input']>;
  emailNotification?: InputMaybe<Scalars['Boolean']['input']>;
  fBAccessCode?: InputMaybe<Scalars['String']['input']>;
  facebookUserID?: InputMaybe<Scalars['String']['input']>;
  failedLoginCount?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  forgetPasswordCode?: InputMaybe<Scalars['String']['input']>;
  franchiseID?: InputMaybe<Scalars['Int']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  getRequests?: InputMaybe<Scalars['Boolean']['input']>;
  googleUserID?: InputMaybe<Scalars['String']['input']>;
  instagramUserID?: InputMaybe<Scalars['String']['input']>;
  isLoggedIn?: InputMaybe<Scalars['Boolean']['input']>;
  isMobileLoggedIn?: InputMaybe<Scalars['Boolean']['input']>;
  joinDate?: InputMaybe<Scalars['DateTime']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  linkedInUserID?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mobileActivationCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  packageID?: InputMaybe<Scalars['Int']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  paymentUrl?: InputMaybe<Scalars['String']['input']>;
  postOnFB?: InputMaybe<Scalars['Boolean']['input']>;
  postOnGP?: InputMaybe<Scalars['Boolean']['input']>;
  postOnInstagram?: InputMaybe<Scalars['Boolean']['input']>;
  postOnLI?: InputMaybe<Scalars['Boolean']['input']>;
  postOnTwitter?: InputMaybe<Scalars['Boolean']['input']>;
  provinceID?: InputMaybe<Scalars['Int']['input']>;
  provinceName?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  sMSNotification?: InputMaybe<Scalars['Boolean']['input']>;
  staId?: InputMaybe<Scalars['String']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  statusName?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  suburbID?: InputMaybe<Scalars['Int']['input']>;
  suburbName?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  tokenExpired?: InputMaybe<Scalars['String']['input']>;
  track?: InputMaybe<Scalars['Int']['input']>;
  twitterUserId?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['Int']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
  userProfileImage?: InputMaybe<Scalars['String']['input']>;
  userProfileThumbNailImage?: InputMaybe<Scalars['String']['input']>;
  vGender?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type MstUserDtoType = {
  __typename?: 'MstUserDtoType';
  categoryID?: Maybe<Scalars['Int']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  compPackageID?: Maybe<Scalars['Int']['output']>;
  compPercent?: Maybe<Scalars['Decimal']['output']>;
  companyId?: Maybe<Scalars['Int']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyStatus?: Maybe<Scalars['Int']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  countryName?: Maybe<Scalars['String']['output']>;
  dateofBirth?: Maybe<Scalars['DateTime']['output']>;
  deviceID?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<Scalars['Int']['output']>;
  domainUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailActivationCode?: Maybe<Scalars['String']['output']>;
  emailNotification?: Maybe<Scalars['Boolean']['output']>;
  fBAccessCode?: Maybe<Scalars['String']['output']>;
  facebookUserID?: Maybe<Scalars['String']['output']>;
  failedLoginCount?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  forgetPasswordCode?: Maybe<Scalars['String']['output']>;
  franchiseID?: Maybe<Scalars['Int']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  getRequests?: Maybe<Scalars['Boolean']['output']>;
  googleUserID?: Maybe<Scalars['String']['output']>;
  instagramUserID?: Maybe<Scalars['String']['output']>;
  isLoggedIn?: Maybe<Scalars['Boolean']['output']>;
  isMobileLoggedIn?: Maybe<Scalars['Boolean']['output']>;
  joinDate?: Maybe<Scalars['DateTime']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  linkedInUserID?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  mobileActivationCode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  packageID?: Maybe<Scalars['Int']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  paymentUrl?: Maybe<Scalars['String']['output']>;
  postOnFB?: Maybe<Scalars['Boolean']['output']>;
  postOnGP?: Maybe<Scalars['Boolean']['output']>;
  postOnInstagram?: Maybe<Scalars['Boolean']['output']>;
  postOnLI?: Maybe<Scalars['Boolean']['output']>;
  postOnTwitter?: Maybe<Scalars['Boolean']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  rId?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
  roleName?: Maybe<Scalars['String']['output']>;
  sMSNotification?: Maybe<Scalars['Boolean']['output']>;
  staId?: Maybe<Scalars['String']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  statusName?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbName?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenExpired?: Maybe<Scalars['String']['output']>;
  track?: Maybe<Scalars['Int']['output']>;
  twitterUserId?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  userProfileImage?: Maybe<Scalars['String']['output']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']['output']>;
  vGender?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstUserRoleInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  deletedBy?: InputMaybe<Scalars['Int']['input']>;
  deletedDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  mapSettingsRole?: InputMaybe<Array<InputMaybe<MapSettingsRoleInputType>>>;
  mapUserRoleRights?: InputMaybe<Array<InputMaybe<MapUserRoleRightsInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  roleId: Scalars['Int']['input'];
  roleName?: InputMaybe<Scalars['String']['input']>;
};

export type MstUserRoleType = {
  __typename?: 'MstUserRoleType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  deletedBy?: Maybe<Scalars['Int']['output']>;
  deletedDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  mapSettingsRole?: Maybe<Array<Maybe<MapSettingsRoleType>>>;
  mapUserRoleRights?: Maybe<Array<Maybe<MapUserRoleRightsType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  roleId: Scalars['Int']['output'];
  roleName?: Maybe<Scalars['String']['output']>;
};

export type MstUserStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstUsers?: InputMaybe<Array<InputMaybe<MstUsersInputType>>>;
  statusId: Scalars['Int']['input'];
  statusName?: InputMaybe<Scalars['String']['input']>;
};

export type MstUserStatusType = {
  __typename?: 'MstUserStatusType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstUsers?: Maybe<Array<Maybe<MstUsersType>>>;
  statusId: Scalars['Int']['output'];
  statusName?: Maybe<Scalars['String']['output']>;
};

export type MstUsersInputType = {
  adminPin?: InputMaybe<Scalars['Int']['input']>;
  cityId?: InputMaybe<Scalars['Int']['input']>;
  companyId?: InputMaybe<Scalars['Int']['input']>;
  contactNo?: InputMaybe<Scalars['String']['input']>;
  countryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  dateofBirth?: InputMaybe<Scalars['DateTime']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceType?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailActivationCode?: InputMaybe<Scalars['String']['input']>;
  failedLoginCount?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  forgetPasswordCode?: InputMaybe<Scalars['String']['input']>;
  franchiseId?: InputMaybe<Scalars['Int']['input']>;
  gender?: InputMaybe<Scalars['Int']['input']>;
  isLoggedIn?: InputMaybe<Scalars['Boolean']['input']>;
  isMobileLoggedIn?: InputMaybe<Scalars['Boolean']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['String']['input']>;
  logInCode?: InputMaybe<Scalars['String']['input']>;
  longitude?: InputMaybe<Scalars['String']['input']>;
  mobileActivationCode?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstCrmCustomerComment?: InputMaybe<Array<InputMaybe<MstCrmCustomerCommentInputType>>>;
  mstCustomerEnquiry?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryInputType>>>;
  mstCustomerEnquiryResponse?: InputMaybe<Array<InputMaybe<MstCustomerEnquiryResponseInputType>>>;
  mstFranchisee?: InputMaybe<Array<InputMaybe<MstFranchiseeInputType>>>;
  mstItemResponse?: InputMaybe<Array<InputMaybe<MstItemResponseInputType>>>;
  mstRating?: InputMaybe<Array<InputMaybe<MstRatingInputType>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  prdOrders?: InputMaybe<Array<InputMaybe<PrdOrdersInputType>>>;
  provinceId?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  statusId?: InputMaybe<Scalars['Int']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  suburbId?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['Int']['input'];
  userName?: InputMaybe<Scalars['String']['input']>;
  userProfileImage?: InputMaybe<Scalars['String']['input']>;
  userProfileThumbNailImage?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type MstUsersType = {
  __typename?: 'MstUsersType';
  adminPin?: Maybe<Scalars['Int']['output']>;
  cityId?: Maybe<Scalars['Int']['output']>;
  companyId?: Maybe<Scalars['Int']['output']>;
  contactNo?: Maybe<Scalars['String']['output']>;
  countryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  dateofBirth?: Maybe<Scalars['DateTime']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceType?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailActivationCode?: Maybe<Scalars['String']['output']>;
  failedLoginCount?: Maybe<Scalars['Int']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  forgetPasswordCode?: Maybe<Scalars['String']['output']>;
  franchiseId?: Maybe<Scalars['Int']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  isLoggedIn?: Maybe<Scalars['Boolean']['output']>;
  isMobileLoggedIn?: Maybe<Scalars['Boolean']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  logInCode?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  mobileActivationCode?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCrmCustomerComment?: Maybe<Array<Maybe<MstCrmCustomerCommentType>>>;
  mstCustomerEnquiry?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  mstCustomerEnquiryResponse?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  mstFranchisee?: Maybe<Array<Maybe<MstFranchiseeType>>>;
  mstItemResponse?: Maybe<Array<Maybe<MstItemResponseType>>>;
  mstRating?: Maybe<Array<Maybe<MstRatingType>>>;
  password?: Maybe<Scalars['String']['output']>;
  prdOrders?: Maybe<Array<Maybe<PrdOrdersType>>>;
  provinceId?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
  statusId?: Maybe<Scalars['Int']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  suburbId?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['Int']['output'];
  userName?: Maybe<Scalars['String']['output']>;
  userProfileImage?: Maybe<Scalars['String']['output']>;
  userProfileThumbNailImage?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type MstVersionInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  versionId: Scalars['Int']['input'];
  versionNumber?: InputMaybe<Scalars['Decimal']['input']>;
  versionType?: InputMaybe<Scalars['String']['input']>;
};

export type MstVersionType = {
  __typename?: 'MstVersionType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  versionId: Scalars['Int']['output'];
  versionNumber?: Maybe<Scalars['Decimal']['output']>;
  versionType?: Maybe<Scalars['String']['output']>;
};

export type MstVolumeTypeInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  mapCompanyProvide?: InputMaybe<Array<InputMaybe<MapCompanyProvideInputType>>>;
  mapCompanySeek?: InputMaybe<Array<InputMaybe<MapCompanySeekInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  volumeType?: InputMaybe<Scalars['String']['input']>;
  volumeTypeId: Scalars['Int']['input'];
};

export type MstVolumeTypeType = {
  __typename?: 'MstVolumeTypeType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  mapCompanyProvide?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  mapCompanySeek?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  volumeType?: Maybe<Scalars['String']['output']>;
  volumeTypeId: Scalars['Int']['output'];
};

export type PaginationListDevForms = {
  __typename?: 'PaginationListDevForms';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<DevFormsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListElmahError = {
  __typename?: 'PaginationListElmahError';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<ElmahErrorType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListJob = {
  __typename?: 'PaginationListJob';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<JobType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCategoryAttributes = {
  __typename?: 'PaginationListMapCategoryAttributes';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCategoryAttributesType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyArea = {
  __typename?: 'PaginationListMapCompanyArea';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyAreaType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyAuditLog = {
  __typename?: 'PaginationListMapCompanyAuditLog';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyAuditLogType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyCategory = {
  __typename?: 'PaginationListMapCompanyCategory';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyDocument = {
  __typename?: 'PaginationListMapCompanyDocument';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyDocumentType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyEmail = {
  __typename?: 'PaginationListMapCompanyEmail';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyEmailType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyMagazineAd = {
  __typename?: 'PaginationListMapCompanyMagazineAd';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyMagazineAdType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyPackage = {
  __typename?: 'PaginationListMapCompanyPackage';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyPackageType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyPayment = {
  __typename?: 'PaginationListMapCompanyPayment';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyPaymentType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyProvide = {
  __typename?: 'PaginationListMapCompanyProvide';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyProvideType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanySeek = {
  __typename?: 'PaginationListMapCompanySeek';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanySeekType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyTask = {
  __typename?: 'PaginationListMapCompanyTask';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCompanyUsers = {
  __typename?: 'PaginationListMapCompanyUsers';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCompanyUsersType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapCustomerEnquiryUpload = {
  __typename?: 'PaginationListMapCustomerEnquiryUpload';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapCustomerEnquiryUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapEflyersUpload = {
  __typename?: 'PaginationListMapEflyersUpload';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapEflyersUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapItemRequestArea = {
  __typename?: 'PaginationListMapItemRequestArea';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestAreaType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapItemRequestCategory = {
  __typename?: 'PaginationListMapItemRequestCategory';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapItemRequestCategoryAttribute = {
  __typename?: 'PaginationListMapItemRequestCategoryAttribute';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestCategoryAttributeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapItemRequestUpload = {
  __typename?: 'PaginationListMapItemRequestUpload';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemRequestUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapItemResponseUpload = {
  __typename?: 'PaginationListMapItemResponseUpload';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapItemResponseUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapPackageAttributes = {
  __typename?: 'PaginationListMapPackageAttributes';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapPackageAttributesType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapProductDocument = {
  __typename?: 'PaginationListMapProductDocument';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapProductDocumentType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapProductImages = {
  __typename?: 'PaginationListMapProductImages';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapProductImagesType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapSettingsRole = {
  __typename?: 'PaginationListMapSettingsRole';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapSettingsRoleType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapSpecialUpload = {
  __typename?: 'PaginationListMapSpecialUpload';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapSpecialUploadType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapUserRoleRights = {
  __typename?: 'PaginationListMapUserRoleRights';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapUserRoleRightsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMapUsersSettings = {
  __typename?: 'PaginationListMapUsersSettings';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MapUsersSettingsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstBeestatus = {
  __typename?: 'PaginationListMstBeestatus';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstBeestatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCategoryAttribute = {
  __typename?: 'PaginationListMstCategoryAttribute';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCategoryAttributeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCategoryAttributeDataType = {
  __typename?: 'PaginationListMstCategoryAttributeDataType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCategoryAttributeDataTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCity = {
  __typename?: 'PaginationListMstCity';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCityType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCms = {
  __typename?: 'PaginationListMstCms';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCmsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCompany = {
  __typename?: 'PaginationListMstCompany';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCompanyDocumentType = {
  __typename?: 'PaginationListMstCompanyDocumentType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyDocumentTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCompanyStatus = {
  __typename?: 'PaginationListMstCompanyStatus';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCompanyTaskList = {
  __typename?: 'PaginationListMstCompanyTaskList';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCompanyTaskListType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstConfiguration = {
  __typename?: 'PaginationListMstConfiguration';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstConfigurationType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstContactForm = {
  __typename?: 'PaginationListMstContactForm';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstContactFormType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCountry = {
  __typename?: 'PaginationListMstCountry';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCountryType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmCustomer = {
  __typename?: 'PaginationListMstCrmCustomer';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmCustomerType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmCustomerComment = {
  __typename?: 'PaginationListMstCrmCustomerComment';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmCustomerCommentType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmInventory = {
  __typename?: 'PaginationListMstCrmInventory';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInventoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmInventoryType = {
  __typename?: 'PaginationListMstCrmInventoryType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInventoryTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmInvoice = {
  __typename?: 'PaginationListMstCrmInvoice';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInvoiceType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmInvoiceDetails = {
  __typename?: 'PaginationListMstCrmInvoiceDetails';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmInvoiceDetailsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmQuote = {
  __typename?: 'PaginationListMstCrmQuote';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmQuoteType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCrmQuoteDetails = {
  __typename?: 'PaginationListMstCrmQuoteDetails';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCrmQuoteDetailsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCustomerEnquiry = {
  __typename?: 'PaginationListMstCustomerEnquiry';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstCustomerEnquiryResponse = {
  __typename?: 'PaginationListMstCustomerEnquiryResponse';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstCustomerEnquiryResponseType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstDocumentStatus = {
  __typename?: 'PaginationListMstDocumentStatus';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstDocumentStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstDomain = {
  __typename?: 'PaginationListMstDomain';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstDomainType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstEFlyers = {
  __typename?: 'PaginationListMstEFlyers';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstEFlyersType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstEmailStack = {
  __typename?: 'PaginationListMstEmailStack';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstEmailStackType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstFavourites = {
  __typename?: 'PaginationListMstFavourites';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstFavouritesType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstFranchisee = {
  __typename?: 'PaginationListMstFranchisee';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstFranchiseeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstItemRequest = {
  __typename?: 'PaginationListMstItemRequest';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstItemRequestType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstItemResponse = {
  __typename?: 'PaginationListMstItemResponse';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstItemResponseType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstKeywords = {
  __typename?: 'PaginationListMstKeywords';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstKeywordsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstMagazineAd = {
  __typename?: 'PaginationListMstMagazineAd';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMagazineAdType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstMagazineAdType = {
  __typename?: 'PaginationListMstMagazineAdType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMagazineAdTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstMagazineSection = {
  __typename?: 'PaginationListMstMagazineSection';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMagazineSectionType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstMailType = {
  __typename?: 'PaginationListMstMailType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstMailTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstNotificationStack = {
  __typename?: 'PaginationListMstNotificationStack';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstNotificationStackType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstPackage = {
  __typename?: 'PaginationListMstPackage';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPackageType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstPackageAttribute = {
  __typename?: 'PaginationListMstPackageAttribute';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPackageAttributeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstPaymentMode = {
  __typename?: 'PaginationListMstPaymentMode';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPaymentModeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstPaymentStatus = {
  __typename?: 'PaginationListMstPaymentStatus';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPaymentStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstPaymentType = {
  __typename?: 'PaginationListMstPaymentType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPaymentTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstPeriodType = {
  __typename?: 'PaginationListMstPeriodType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstPeriodTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstProvince = {
  __typename?: 'PaginationListMstProvince';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstProvinceType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstQuantityType = {
  __typename?: 'PaginationListMstQuantityType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstQuantityTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstRating = {
  __typename?: 'PaginationListMstRating';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstRatingType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstSettingType = {
  __typename?: 'PaginationListMstSettingType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSettingTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstSettings = {
  __typename?: 'PaginationListMstSettings';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSettingsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstSpecials = {
  __typename?: 'PaginationListMstSpecials';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSpecialsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstStatus = {
  __typename?: 'PaginationListMstStatus';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstSuburb = {
  __typename?: 'PaginationListMstSuburb';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstSuburbType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstUserRole = {
  __typename?: 'PaginationListMstUserRole';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstUserRoleType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstUserStatus = {
  __typename?: 'PaginationListMstUserStatus';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstUserStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstUsers = {
  __typename?: 'PaginationListMstUsers';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstUsersType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstVersion = {
  __typename?: 'PaginationListMstVersion';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstVersionType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListMstVolumeType = {
  __typename?: 'PaginationListMstVolumeType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<MstVolumeTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPost = {
  __typename?: 'PaginationListPost';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PostType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPostAttachment = {
  __typename?: 'PaginationListPostAttachment';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PostAttachmentType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPostReply = {
  __typename?: 'PaginationListPostReply';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PostReplyType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPostReplyAttachment = {
  __typename?: 'PaginationListPostReplyAttachment';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PostReplyAttachmentType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdBid = {
  __typename?: 'PaginationListPrdBid';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdBidType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdCategory = {
  __typename?: 'PaginationListPrdCategory';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdHire = {
  __typename?: 'PaginationListPrdHire';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdHireType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdOrderDetails = {
  __typename?: 'PaginationListPrdOrderDetails';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderDetailsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdOrderPayment = {
  __typename?: 'PaginationListPrdOrderPayment';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderPaymentType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdOrderStatus = {
  __typename?: 'PaginationListPrdOrderStatus';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderStatusType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdOrderStatusType = {
  __typename?: 'PaginationListPrdOrderStatusType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrderStatusTypeType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdOrders = {
  __typename?: 'PaginationListPrdOrders';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdOrdersType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdProducts = {
  __typename?: 'PaginationListPrdProducts';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdProductsType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdShoppingCart = {
  __typename?: 'PaginationListPrdShoppingCart';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdShoppingCartType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListPrdSubCategory = {
  __typename?: 'PaginationListPrdSubCategory';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<PrdSubCategoryType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListSystemRole = {
  __typename?: 'PaginationListSystemRole';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<SystemRoleType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PaginationListSystemUser = {
  __typename?: 'PaginationListSystemUser';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Data */
  data?: Maybe<Array<Maybe<SystemUserType>>>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type PostAttachmentInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  documentType?: InputMaybe<Scalars['Int']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  post?: InputMaybe<PostInputType>;
  postAttachmentId: Scalars['Int']['input'];
  postId?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  thumbNailImagePath?: InputMaybe<Scalars['String']['input']>;
};

export type PostAttachmentType = {
  __typename?: 'PostAttachmentType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  documentType?: Maybe<Scalars['Int']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  post?: Maybe<PostType>;
  postAttachmentId: Scalars['Int']['output'];
  postId?: Maybe<Scalars['Int']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  thumbNailImagePath?: Maybe<Scalars['String']['output']>;
};

export type PostDtoType = {
  __typename?: 'PostDtoType';
  categoryID?: Maybe<Scalars['Int']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  clickCount?: Maybe<Scalars['Int']['output']>;
  companyID?: Maybe<Scalars['Int']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionSEO?: Maybe<Scalars['String']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  domainID?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  googleSchema?: Maybe<Scalars['String']['output']>;
  keywordsSEO?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postAttachments?: Maybe<Array<Maybe<PostAttachmentType>>>;
  postID?: Maybe<Scalars['Int']['output']>;
  postedDate?: Maybe<Scalars['DateTime']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbName?: Maybe<Scalars['String']['output']>;
  thumbNailImagePath?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleSEO?: Maybe<Scalars['String']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
};

export type PostInputType = {
  companyID?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionSEO?: InputMaybe<Scalars['String']['input']>;
  domainId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  googleSchema?: InputMaybe<Scalars['String']['input']>;
  keywordsSEO?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  postAttachment?: InputMaybe<Array<InputMaybe<PostAttachmentInputType>>>;
  postId: Scalars['Int']['input'];
  postedDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCategoryId?: InputMaybe<Scalars['Int']['input']>;
  titleSEO?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PostReplyAttachmentInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  documentType?: InputMaybe<Scalars['Int']['input']>;
  filePath?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  postReply?: InputMaybe<Array<InputMaybe<PostReplyInputType>>>;
  postReplyAttachmentId: Scalars['Int']['input'];
  postReplyId?: InputMaybe<Scalars['Int']['input']>;
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  thumbNailImagePath?: InputMaybe<Scalars['String']['input']>;
};

export type PostReplyAttachmentType = {
  __typename?: 'PostReplyAttachmentType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  documentType?: Maybe<Scalars['Int']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  postReply?: Maybe<Array<Maybe<PostReplyType>>>;
  postReplyAttachmentId: Scalars['Int']['output'];
  postReplyId?: Maybe<Scalars['Int']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  thumbNailImagePath?: Maybe<Scalars['String']['output']>;
};

export type PostReplyDtoType = {
  __typename?: 'PostReplyDtoType';
  contactNo?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  postID?: Maybe<Scalars['Int']['output']>;
  postReplyID?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleCategoryID?: Maybe<Scalars['Int']['output']>;
  titlePost?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type PostReplyInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['Int']['input']>;
  postReplyAttachments?: InputMaybe<Array<InputMaybe<PostReplyAttachmentInputType>>>;
  postReplyId?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleCategoryId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PostReplyType = {
  __typename?: 'PostReplyType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  postReplyAttachments?: Maybe<Array<Maybe<PostReplyAttachmentType>>>;
  postReplyId: Scalars['Int']['output'];
  status?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleCategoryId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PostType = {
  __typename?: 'PostType';
  cityID?: Maybe<Scalars['Int']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  clickCount?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  domainId?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  postAttachments?: Maybe<Array<Maybe<PostAttachmentType>>>;
  postId: Scalars['Int']['output'];
  postedDate?: Maybe<Scalars['DateTime']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbName?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleCategoryId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
};

export type PostVehicleInputType = {
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  dateOfExpiry?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  engineNumber?: InputMaybe<Scalars['String']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  sessionID?: InputMaybe<Scalars['String']['input']>;
  userID?: InputMaybe<Scalars['Int']['input']>;
  vIN?: InputMaybe<Scalars['String']['input']>;
  vehicleID?: InputMaybe<Scalars['Int']['input']>;
};

export type PrdBidInputType = {
  bidAmount?: InputMaybe<Scalars['Decimal']['input']>;
  bidApprovedMail?: InputMaybe<Scalars['Boolean']['input']>;
  bidId: Scalars['Int']['input'];
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  mstProvinces?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PrdBidType = {
  __typename?: 'PrdBidType';
  bidAmount?: Maybe<Scalars['Decimal']['output']>;
  bidApprovedMail?: Maybe<Scalars['Boolean']['output']>;
  bidId: Scalars['Int']['output'];
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  mstCountry?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PrdCategoryDtoType = {
  __typename?: 'PrdCategoryDtoType';
  activeText?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  domainID?: Maybe<Scalars['Int']['output']>;
  domainId?: Maybe<Scalars['Int']['output']>;
  domainName?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
};

export type PrdCategoryInputType = {
  category?: InputMaybe<PrdCategoryInputType>;
  categoryId: Scalars['Int']['input'];
  categoryName?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  domain?: InputMaybe<MstDomainInputType>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  prdProducts?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
  prdSubCategory?: InputMaybe<Array<InputMaybe<PrdSubCategoryInputType>>>;
};

export type PrdCategoryType = {
  __typename?: 'PrdCategoryType';
  category?: Maybe<PrdCategoryType>;
  categoryId: Scalars['Int']['output'];
  categoryName?: Maybe<Scalars['String']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  domain?: Maybe<MstDomainType>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  prdProducts?: Maybe<Array<Maybe<PrdProductsType>>>;
  prdSubCategory?: Maybe<Array<Maybe<PrdSubCategoryType>>>;
};

export type PrdHireInputType = {
  businessConfirmedReturned?: InputMaybe<Scalars['Boolean']['input']>;
  businessConfirmedReturnedDate?: InputMaybe<Scalars['DateTime']['input']>;
  clientConfirmedReturned?: InputMaybe<Scalars['Int']['input']>;
  clientConfirmedReturnedDate?: InputMaybe<Scalars['DateTime']['input']>;
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  hireId: Scalars['Int']['input'];
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  mstProvinces?: InputMaybe<Array<InputMaybe<PrdProductsInputType>>>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  returned?: InputMaybe<Scalars['Boolean']['input']>;
  returnedDate?: InputMaybe<Scalars['DateTime']['input']>;
  toDate?: InputMaybe<Scalars['DateTime']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PrdHireType = {
  __typename?: 'PrdHireType';
  businessConfirmedReturned?: Maybe<Scalars['Boolean']['output']>;
  businessConfirmedReturnedDate?: Maybe<Scalars['DateTime']['output']>;
  clientConfirmedReturned?: Maybe<Scalars['Boolean']['output']>;
  clientConfirmedReturnedDate?: Maybe<Scalars['DateTime']['output']>;
  fromDate?: Maybe<Scalars['DateTime']['output']>;
  hireId: Scalars['Int']['output'];
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  mstCountry?: Maybe<PrdProductsType>;
  productId?: Maybe<Scalars['Int']['output']>;
  returned?: Maybe<Scalars['Boolean']['output']>;
  returnedDate?: Maybe<Scalars['DateTime']['output']>;
  toDate?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PrdOrderDetailsInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  downloadCount?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  order?: InputMaybe<PrdOrdersInputType>;
  orderAmount?: InputMaybe<Scalars['Decimal']['input']>;
  orderDetailsId: Scalars['Int']['input'];
  orderId?: InputMaybe<Scalars['Int']['input']>;
  orderQuantity?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  productPrice?: InputMaybe<Scalars['Decimal']['input']>;
};

export type PrdOrderDetailsType = {
  __typename?: 'PrdOrderDetailsType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  downloadCount?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  order?: Maybe<PrdOrdersType>;
  orderAmount?: Maybe<Scalars['Decimal']['output']>;
  orderDetailsId: Scalars['Int']['output'];
  orderId?: Maybe<Scalars['Int']['output']>;
  orderQuantity?: Maybe<Scalars['Int']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  productPrice?: Maybe<Scalars['Decimal']['output']>;
  products?: Maybe<PrdProductsType>;
};

export type PrdOrderPaymentInputType = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderId?: InputMaybe<Scalars['Int']['input']>;
  orderPaymentId: Scalars['Int']['input'];
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  paymentMode?: InputMaybe<MstPaymentModeInputType>;
  paymentModeId?: InputMaybe<Scalars['Int']['input']>;
  paymentRefNo?: InputMaybe<Scalars['String']['input']>;
};

export type PrdOrderPaymentType = {
  __typename?: 'PrdOrderPaymentType';
  amount?: Maybe<Scalars['Decimal']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  orderId?: Maybe<Scalars['Int']['output']>;
  orderPaymentId: Scalars['Int']['output'];
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  paymentMode?: Maybe<MstPaymentModeType>;
  paymentModeId?: Maybe<Scalars['Int']['output']>;
  paymentRefNo?: Maybe<Scalars['String']['output']>;
};

export type PrdOrderStatusInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  isCurrentStatus?: InputMaybe<Scalars['Boolean']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  order?: InputMaybe<PrdOrdersInputType>;
  orderId?: InputMaybe<Scalars['Int']['input']>;
  orderStatusDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderStatusId: Scalars['Int']['input'];
  orderStatusTypeId?: InputMaybe<Scalars['Int']['input']>;
};

export type PrdOrderStatusType = {
  __typename?: 'PrdOrderStatusType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isCurrentStatus?: Maybe<Scalars['Boolean']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  orderId?: Maybe<Scalars['Int']['output']>;
  orderStatusDate?: Maybe<Scalars['DateTime']['output']>;
  orderStatusId: Scalars['Int']['output'];
  orderStatusTypeId?: Maybe<Scalars['Int']['output']>;
  prdOrderStatusType?: Maybe<Array<Maybe<PrdOrderStatusTypeType>>>;
};

export type PrdOrderStatusTypeInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderStatusTypeId: Scalars['Int']['input'];
  statusName?: InputMaybe<Scalars['String']['input']>;
  statusSequence?: InputMaybe<Scalars['Int']['input']>;
};

export type PrdOrderStatusTypeType = {
  __typename?: 'PrdOrderStatusTypeType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  orderStatusTypeId: Scalars['Int']['output'];
  statusName?: Maybe<Scalars['String']['output']>;
  statusSequence?: Maybe<Scalars['Int']['output']>;
};

export type PrdOrdersInputType = {
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  downloadCount?: InputMaybe<Scalars['Int']['input']>;
  expiredDate?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderAmount?: InputMaybe<Scalars['Decimal']['input']>;
  orderDate?: InputMaybe<Scalars['DateTime']['input']>;
  orderId: Scalars['Int']['input'];
  orderIdstring?: InputMaybe<Scalars['String']['input']>;
  orderIpaddress?: InputMaybe<Scalars['String']['input']>;
  orderSessionId?: InputMaybe<Scalars['String']['input']>;
  orderStatusId?: InputMaybe<Scalars['Int']['input']>;
  orderTotal?: InputMaybe<Scalars['Decimal']['input']>;
  paymentDate?: InputMaybe<Scalars['DateTime']['input']>;
  prdOrderDetails?: InputMaybe<Array<InputMaybe<PrdOrderDetailsInputType>>>;
  prdOrderStatus?: InputMaybe<Array<InputMaybe<PrdOrderStatusInputType>>>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<MstUsersInputType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PrdOrdersProductsType = {
  __typename?: 'PrdOrdersProductsType';
  count?: Maybe<Scalars['Int']['output']>;
  productID?: Maybe<Scalars['Int']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
};

export type PrdOrdersStatsType = {
  __typename?: 'PrdOrdersStatsType';
  averageAmount?: Maybe<Scalars['Decimal']['output']>;
  maxAmount?: Maybe<Scalars['Decimal']['output']>;
  minAmount?: Maybe<Scalars['Decimal']['output']>;
  month?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type PrdOrdersSummaryType = {
  __typename?: 'PrdOrdersSummaryType';
  salesType?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
};

export type PrdOrdersType = {
  __typename?: 'PrdOrdersType';
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  downloadCount?: Maybe<Scalars['Int']['output']>;
  expiredDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  orderAmount?: Maybe<Scalars['Decimal']['output']>;
  orderDate?: Maybe<Scalars['DateTime']['output']>;
  orderId: Scalars['Int']['output'];
  orderIdstring?: Maybe<Scalars['String']['output']>;
  orderIpaddress?: Maybe<Scalars['String']['output']>;
  orderSessionId?: Maybe<Scalars['String']['output']>;
  orderStatusId?: Maybe<Scalars['Int']['output']>;
  orderTotal?: Maybe<Scalars['Decimal']['output']>;
  paymentDate?: Maybe<Scalars['DateTime']['output']>;
  prdOrderDetails?: Maybe<Array<Maybe<PrdOrderDetailsType>>>;
  prdOrderStatus?: Maybe<Array<Maybe<PrdOrderStatusType>>>;
  productId?: Maybe<Scalars['Int']['output']>;
  transactionId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<MstUsersType>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PrdProductsInputType = {
  category?: InputMaybe<PrdCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  companyID?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documentName?: InputMaybe<Scalars['String']['input']>;
  documentPath?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<MstDomainInputType>;
  domainCategory?: InputMaybe<Scalars['Int']['input']>;
  domainId?: InputMaybe<Scalars['Int']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  googleSchema?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Decimal']['input']>;
  inventory?: InputMaybe<Scalars['Int']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  length?: InputMaybe<Scalars['Decimal']['input']>;
  mapProductDocument?: InputMaybe<Array<InputMaybe<MapProductDocumentInputType>>>;
  mapProductImages?: InputMaybe<Array<InputMaybe<MapProductImagesInputType>>>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  prdBid?: InputMaybe<Array<InputMaybe<PrdBidInputType>>>;
  prdShoppingCart?: InputMaybe<Array<InputMaybe<PrdShoppingCartInputType>>>;
  productId: Scalars['Int']['input'];
  productImage?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  productNumber?: InputMaybe<Scalars['String']['input']>;
  salesTypeId?: InputMaybe<Scalars['Int']['input']>;
  scopeId?: InputMaybe<Scalars['Int']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  subCategoryId?: InputMaybe<Scalars['Int']['input']>;
  typeId?: InputMaybe<Scalars['Int']['input']>;
  unitCost?: InputMaybe<Scalars['Decimal']['input']>;
  volume?: InputMaybe<Scalars['Decimal']['input']>;
  weight?: InputMaybe<Scalars['Decimal']['input']>;
  width?: InputMaybe<Scalars['Decimal']['input']>;
};

export type PrdProductsType = {
  __typename?: 'PrdProductsType';
  category?: Maybe<PrdCategoryType>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  companyID?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  documentPath?: Maybe<Scalars['String']['output']>;
  domain?: Maybe<MstDomainType>;
  domainCategory?: Maybe<Scalars['Int']['output']>;
  domainId?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  googleSchema?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  inventory?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  length?: Maybe<Scalars['Decimal']['output']>;
  mapProductDocument?: Maybe<Array<Maybe<MapProductDocumentType>>>;
  mapProductImages?: Maybe<Array<Maybe<MapProductImagesType>>>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  prdBid?: Maybe<Array<Maybe<PrdBidType>>>;
  prdShoppingCart?: Maybe<Array<Maybe<PrdShoppingCartType>>>;
  productId: Scalars['Int']['output'];
  productImage?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  productNumber?: Maybe<Scalars['String']['output']>;
  salesTypeId?: Maybe<Scalars['Int']['output']>;
  scopeId?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  subCategoryId?: Maybe<Scalars['Int']['output']>;
  typeId?: Maybe<Scalars['Int']['output']>;
  unitCost?: Maybe<Scalars['Decimal']['output']>;
  volume?: Maybe<Scalars['Decimal']['output']>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type PrdPurchaseShoppingCartDtoType = {
  __typename?: 'PrdPurchaseShoppingCartDtoType';
  paymentMethod?: Maybe<Scalars['String']['output']>;
  paymentUrl?: Maybe<Scalars['String']['output']>;
};

export type PrdSalesTypeType = {
  __typename?: 'PrdSalesTypeType';
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  salesTypeID: Scalars['Int']['output'];
  salesTypeName?: Maybe<Scalars['String']['output']>;
};

export type PrdScopeType = {
  __typename?: 'PrdScopeType';
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  scopeId: Scalars['Int']['output'];
  scopeName?: Maybe<Scalars['String']['output']>;
};

export type PrdShoppingCartDtoType = {
  __typename?: 'PrdShoppingCartDtoType';
  categoryID?: Maybe<Scalars['Int']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  fromDate?: Maybe<Scalars['Date']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  prdProduct?: Maybe<PrdProductsType>;
  productID?: Maybe<Scalars['Int']['output']>;
  productImage?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  productNumber?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  recordID?: Maybe<Scalars['Int']['output']>;
  totalPrice?: Maybe<Scalars['Decimal']['output']>;
  unitCost?: Maybe<Scalars['Decimal']['output']>;
};

export type PrdShoppingCartInputType = {
  dateCreated?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  fromDate?: InputMaybe<Scalars['DateTime']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  recordId?: InputMaybe<Scalars['Int']['input']>;
  sessionId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type PrdShoppingCartTotalDtoType = {
  __typename?: 'PrdShoppingCartTotalDtoType';
  amountExlVat?: Maybe<Scalars['Decimal']['output']>;
  /** prdShoppingCartDto */
  prdShoppingCartDto?: Maybe<Array<Maybe<PrdShoppingCartDtoType>>>;
  recuringAmount?: Maybe<Scalars['Decimal']['output']>;
  totalAmount?: Maybe<Scalars['Decimal']['output']>;
  vatAmount?: Maybe<Scalars['Decimal']['output']>;
};

export type PrdShoppingCartType = {
  __typename?: 'PrdShoppingCartType';
  dateCreated?: Maybe<Scalars['DateTime']['output']>;
  productId?: Maybe<Scalars['Int']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  recordId: Scalars['Int']['output'];
  sessionId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PrdSubCategoryInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<PrdCategoryInputType>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  domainId?: InputMaybe<Scalars['Int']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  subCategoryId: Scalars['Int']['input'];
  subCategoryName?: InputMaybe<Scalars['String']['input']>;
};

export type PrdSubCategoryType = {
  __typename?: 'PrdSubCategoryType';
  active?: Maybe<Scalars['Boolean']['output']>;
  category?: Maybe<PrdCategoryType>;
  categoryId?: Maybe<Scalars['Int']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  domainId?: Maybe<Scalars['Int']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  subCategoryId: Scalars['Int']['output'];
  subCategoryName?: Maybe<Scalars['String']['output']>;
};

export type PrdTypeType = {
  __typename?: 'PrdTypeType';
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  typeID: Scalars['Int']['output'];
  typeName?: Maybe<Scalars['String']['output']>;
};

export type ProductDtType = {
  __typename?: 'ProductDtType';
  activeText?: Maybe<Scalars['String']['output']>;
  bidCost?: Maybe<Scalars['Decimal']['output']>;
  categoryID?: Maybe<Scalars['Int']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  clickCount?: Maybe<Scalars['Int']['output']>;
  companyID?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  documentPath?: Maybe<Scalars['String']['output']>;
  domainCategory?: Maybe<Scalars['Int']['output']>;
  domainCategoryName?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  googleSchema?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Decimal']['output']>;
  inventory?: Maybe<Scalars['Int']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastBid?: Maybe<Scalars['Decimal']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['Decimal']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  mapProductImages?: Maybe<Array<Maybe<MapProductImagesType>>>;
  originalUnitCost?: Maybe<Scalars['Decimal']['output']>;
  prdBid?: Maybe<Array<Maybe<PrdBidType>>>;
  prdHire?: Maybe<Array<Maybe<PrdHireType>>>;
  productID?: Maybe<Scalars['Int']['output']>;
  productImage?: Maybe<Scalars['String']['output']>;
  productName?: Maybe<Scalars['String']['output']>;
  productNumber?: Maybe<Scalars['String']['output']>;
  ratingScore?: Maybe<Scalars['Decimal']['output']>;
  salesTypeId?: Maybe<Scalars['Int']['output']>;
  scopeID?: Maybe<Scalars['Int']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  typeID?: Maybe<Scalars['Int']['output']>;
  unitCost?: Maybe<Scalars['Decimal']['output']>;
  userLastBid?: Maybe<Scalars['Decimal']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  volume?: Maybe<Scalars['Decimal']['output']>;
  weight?: Maybe<Scalars['Decimal']['output']>;
  width?: Maybe<Scalars['Decimal']['output']>;
};

export type Response = {
  __typename?: 'Response';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response1 = {
  __typename?: 'Response1';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Scalars['String']['output']>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response2 = {
  __typename?: 'Response2';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<SessionType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response3 = {
  __typename?: 'Response3';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<MstUserDtoType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response4 = {
  __typename?: 'Response4';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<JwtTokenType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response5 = {
  __typename?: 'Response5';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<MstLoggedInUserMobileDtoType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response6 = {
  __typename?: 'Response6';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstRatingDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response7 = {
  __typename?: 'Response7';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<PrdPurchaseShoppingCartDtoType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response8 = {
  __typename?: 'Response8';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Scalars['Boolean']['output']>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response9 = {
  __typename?: 'Response9';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MapProductImagesType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response10 = {
  __typename?: 'Response10';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<MapProductImagesType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response11 = {
  __typename?: 'Response11';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MapProductDocumentType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response12 = {
  __typename?: 'Response12';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<MstLoggedInUserDtoType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response13 = {
  __typename?: 'Response13';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Scalars['Int']['output']>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type Response14 = {
  __typename?: 'Response14';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message?: Maybe<Scalars['String']['output']>;
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<PostDtoType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMapCompanyAuditLog = {
  __typename?: 'ResponseMapCompanyAuditLog';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCompanyAuditLogType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMapCompanyCategory = {
  __typename?: 'ResponseMapCompanyCategory';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MapCompanyCategoryType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMapCompanyTask = {
  __typename?: 'ResponseMapCompanyTask';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MapCompanyTaskType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMapProductDocument = {
  __typename?: 'ResponseMapProductDocument';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<MapProductDocumentType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMapProductImages = {
  __typename?: 'ResponseMapProductImages';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MapProductImagesType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMapUserActivity = {
  __typename?: 'ResponseMapUserActivity';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MapUserActivityType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstBusinessUsersDto = {
  __typename?: 'ResponseMstBusinessUsersDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstBusinessUserDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstCategory = {
  __typename?: 'ResponseMstCategory';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCategoryType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstCity = {
  __typename?: 'ResponseMstCity';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCityType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstCompany = {
  __typename?: 'ResponseMstCompany';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCompanyType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstCompanyDto = {
  __typename?: 'ResponseMstCompanyDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCompanyDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstCustomerEnquiry = {
  __typename?: 'ResponseMstCustomerEnquiry';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstCustomerEnquiryType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstEFlyersDto = {
  __typename?: 'ResponseMstEFlyersDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstEFlyersDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstItemRequestDto = {
  __typename?: 'ResponseMstItemRequestDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstItemRequestDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstItemRequestServiceDto = {
  __typename?: 'ResponseMstItemRequestServiceDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstItemRequestServiceDto>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstLoggedInUserDto = {
  __typename?: 'ResponseMstLoggedInUserDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<MstLoggedInUserDtoType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstPackageDetailsDto = {
  __typename?: 'ResponseMstPackageDetailsDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstPackageDetailsDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstPackageListDto = {
  __typename?: 'ResponseMstPackageListDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstPackageListDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstProvince = {
  __typename?: 'ResponseMstProvince';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstProvinceType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstSpecialsDto = {
  __typename?: 'ResponseMstSpecialsDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstSpecialsDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstSuburb = {
  __typename?: 'ResponseMstSuburb';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstSuburbType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstUserAddress = {
  __typename?: 'ResponseMstUserAddress';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstUserAddressType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstUserDto = {
  __typename?: 'ResponseMstUserDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstUserDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstUsers = {
  __typename?: 'ResponseMstUsers';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<MstUsersType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseMstVehicle = {
  __typename?: 'ResponseMstVehicle';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<VehicleType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePostDto = {
  __typename?: 'ResponsePostDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PostDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePostReplyDto = {
  __typename?: 'ResponsePostReplyDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PostReplyDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdBid = {
  __typename?: 'ResponsePrdBid';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdBidType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdCategoryDto = {
  __typename?: 'ResponsePrdCategoryDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdCategoryDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdOrders = {
  __typename?: 'ResponsePrdOrders';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdOrdersProducts = {
  __typename?: 'ResponsePrdOrdersProducts';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersProductsType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdOrdersStats = {
  __typename?: 'ResponsePrdOrdersStats';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersStatsType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdOrdersSummary = {
  __typename?: 'ResponsePrdOrdersSummary';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdOrdersSummaryType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdProducts = {
  __typename?: 'ResponsePrdProducts';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<PrdProductsType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdSalesType = {
  __typename?: 'ResponsePrdSalesType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdSalesTypeType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdScope = {
  __typename?: 'ResponsePrdScope';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdScopeType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdShoppingCartTotalDto = {
  __typename?: 'ResponsePrdShoppingCartTotalDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<PrdShoppingCartTotalDtoType>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponsePrdType = {
  __typename?: 'ResponsePrdType';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<PrdTypeType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseProductDt = {
  __typename?: 'ResponseProductDt';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<ProductDtType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type ResponseTenderDto = {
  __typename?: 'ResponseTenderDto';
  /** Count */
  count: Scalars['Int']['output'];
  /** CurrentPage */
  currentPage: Scalars['Int']['output'];
  /** Message */
  message: Scalars['String']['output'];
  /** NextPage */
  nextPage: Scalars['Int']['output'];
  /** PrevPage */
  prevPage: Scalars['Int']['output'];
  /** Result */
  result?: Maybe<Array<Maybe<TenderDtoType>>>;
  /** Success */
  success: Scalars['Boolean']['output'];
  /** TotalPages */
  totalPages: Scalars['Int']['output'];
};

export type SessionType = {
  __typename?: 'SessionType';
  domain?: Maybe<Scalars['String']['output']>;
  expires?: Maybe<Scalars['DateTime']['output']>;
  sessionContractLogin?: Maybe<Scalars['String']['output']>;
  sessionKeyContractLogin?: Maybe<Scalars['String']['output']>;
  sessionKeyLogin?: Maybe<Scalars['String']['output']>;
  sessionLogin?: Maybe<Scalars['String']['output']>;
};

export type SystemRoleInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  systemRoleId: Scalars['Int']['input'];
  systemRoleName?: InputMaybe<Scalars['String']['input']>;
  systemUser?: InputMaybe<Array<InputMaybe<SystemUserInputType>>>;
};

export type SystemRoleType = {
  __typename?: 'SystemRoleType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  systemRoleId: Scalars['Int']['output'];
  systemRoleName?: Maybe<Scalars['String']['output']>;
  systemUser?: Maybe<Array<Maybe<SystemUserType>>>;
};

export type SystemUserInputType = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Int']['input']>;
  createdDate?: InputMaybe<Scalars['DateTime']['input']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  failedLoginCount?: InputMaybe<Scalars['Int']['input']>;
  genderId?: InputMaybe<Scalars['Int']['input']>;
  lastLogin?: InputMaybe<Scalars['DateTime']['input']>;
  mobileNo?: InputMaybe<Scalars['String']['input']>;
  modifiedBy?: InputMaybe<Scalars['Int']['input']>;
  modifiedDate?: InputMaybe<Scalars['DateTime']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<SystemRoleInputType>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  systemUserId: Scalars['Int']['input'];
  systemUserName?: InputMaybe<Scalars['String']['input']>;
};

export type SystemUserType = {
  __typename?: 'SystemUserType';
  active?: Maybe<Scalars['Boolean']['output']>;
  createdBy?: Maybe<Scalars['Int']['output']>;
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  dateOfBirth?: Maybe<Scalars['DateTime']['output']>;
  emailAddress?: Maybe<Scalars['String']['output']>;
  failedLoginCount?: Maybe<Scalars['Int']['output']>;
  genderId?: Maybe<Scalars['Int']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  mobileNo?: Maybe<Scalars['String']['output']>;
  modifiedBy?: Maybe<Scalars['Int']['output']>;
  modifiedDate?: Maybe<Scalars['DateTime']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<SystemRoleType>;
  roleId?: Maybe<Scalars['Int']['output']>;
  systemUserId: Scalars['Int']['output'];
  systemUserName?: Maybe<Scalars['String']['output']>;
};

export type TenderDtoType = {
  __typename?: 'TenderDtoType';
  categoryID?: Maybe<Scalars['Int']['output']>;
  cityID?: Maybe<Scalars['Int']['output']>;
  cityName?: Maybe<Scalars['String']['output']>;
  clickCount?: Maybe<Scalars['Int']['output']>;
  companyID?: Maybe<Scalars['Int']['output']>;
  companyImage?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionSEO?: Maybe<Scalars['String']['output']>;
  documentName?: Maybe<Scalars['String']['output']>;
  domainID?: Maybe<Scalars['Int']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  googleSchema?: Maybe<Scalars['String']['output']>;
  keywordsSEO?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  postAttachments?: Maybe<Array<Maybe<PostAttachmentType>>>;
  postCount?: Maybe<Scalars['Int']['output']>;
  postID?: Maybe<Scalars['Int']['output']>;
  postedDate?: Maybe<Scalars['DateTime']['output']>;
  provinceID?: Maybe<Scalars['Int']['output']>;
  provinceName?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  suburbID?: Maybe<Scalars['Int']['output']>;
  suburbName?: Maybe<Scalars['String']['output']>;
  thumbNailImagePath?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  titleSEO?: Maybe<Scalars['String']['output']>;
  viewCount?: Maybe<Scalars['Int']['output']>;
};

export type VehicleType = {
  __typename?: 'VehicleType';
  createdDate?: Maybe<Scalars['DateTime']['output']>;
  dateOfExpiry?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  engineNumber?: Maybe<Scalars['String']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  registrationNumber?: Maybe<Scalars['String']['output']>;
  sessionID?: Maybe<Scalars['String']['output']>;
  userID?: Maybe<Scalars['Int']['output']>;
  vIN?: Maybe<Scalars['String']['output']>;
  vehicleID?: Maybe<Scalars['Int']['output']>;
};

export type GetBusinessListQueryVariables = Exact<{
  statusIds: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  categoryIds: Scalars['String']['input'];
  provinceIds: Scalars['String']['input'];
  cityIds: Scalars['String']['input'];
  suburbIds: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  size: Scalars['Int']['input'];
}>;


export type GetBusinessListQuery = { __typename?: 'MstCountryQuery', getBusinessList?: { __typename?: 'ResponseMstCompanyDto', count: number, currentPage: number, message: string, nextPage: number, prevPage: number, success: boolean, totalPages: number, result?: Array<{ __typename?: 'MstCompanyDtoType', companyId?: number | null, companyName?: string | null, joinDate?: any | null, logoPath?: string | null, compProvinceName?: string | null, compCityName?: string | null, compSuburb?: string | null, compStreetAddress?: string | null, compDescription?: string | null, latitude?: string | null, longitude?: string | null } | null> | null } | null };


export const GetBusinessListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBusinessList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"statusIds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryIds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"provinceIds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cityIds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"suburbIds"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBusinessList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"statusIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"statusIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"companyName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyName"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"provinceIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"provinceIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"cityIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cityIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"suburbIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"suburbIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"joinDate"}},{"kind":"Field","name":{"kind":"Name","value":"logoPath"}},{"kind":"Field","name":{"kind":"Name","value":"compProvinceName"}},{"kind":"Field","name":{"kind":"Name","value":"compCityName"}},{"kind":"Field","name":{"kind":"Name","value":"compSuburb"}},{"kind":"Field","name":{"kind":"Name","value":"compStreetAddress"}},{"kind":"Field","name":{"kind":"Name","value":"compDescription"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<GetBusinessListQuery, GetBusinessListQueryVariables>;