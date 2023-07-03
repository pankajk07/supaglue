import { temporal } from '@temporalio/proto';

const { IndexedValueType } = temporal.api.enums.v1;

export const TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES = {
  SYNC_ID: 'SyncId',
  OBJECT_TYPE: 'ObjectType',
  OBJECT_NAME: 'ObjectName',
  APPLICATION_ID: 'ApplicationId',
  APPLICATION_ENV: 'ApplicationEnv',
  CUSTOMER_ID: 'CustomerId',
  PROVIDER_ID: 'ProviderId',
  SYNC_CONFIG_ID: 'SyncConfigId',
  CONNECTION_ID: 'ConnectionId',
  PROVIDER_NAME: 'ProviderName',
};

export const TEMPORAL_CONTEXT_ARGS = {
  SYNC_ID: 'syncId',
  OBJECT_TYPE: 'objectType',
  OBJECT_NAME: 'objectName',
  APPLICATION_ID: 'applicationId',
  APPLICATION_ENV: 'applicationEnv',
  CUSTOMER_ID: 'customerId',
  PROVIDER_ID: 'providerId',
  SYNC_CONFIG_ID: 'syncConfigId',
  CONNECTION_ID: 'connectionId',
  PROVIDER_NAME: 'providerName',
};

export const TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES_AND_TYPES = {
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.SYNC_ID]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.OBJECT_TYPE]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.OBJECT_NAME]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.APPLICATION_ID]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.APPLICATION_ENV]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.CUSTOMER_ID]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.PROVIDER_ID]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.SYNC_CONFIG_ID]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.CONNECTION_ID]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
  [TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES.PROVIDER_NAME]: IndexedValueType.INDEXED_VALUE_TYPE_KEYWORD,
};

export const DEPRECATED_TEMPORAL_CUSTOM_SEARCH_ATTRIBUTES = ['ProviderCategory'];
