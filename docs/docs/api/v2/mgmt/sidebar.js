module.exports = [{"type":"doc","id":"api/v2/mgmt/management-api"},{"type":"category","label":"Customers","link":{"type":"doc","id":"api/v2/mgmt/customers"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-customers","label":"List customers","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/upsert-customer","label":"Upsert customer","className":"api-method put"},{"type":"doc","id":"api/v2/mgmt/get-customer","label":"Get customer","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/delete-customer","label":"Delete customer","className":"api-method delete"}]},{"type":"category","label":"Connections","link":{"type":"doc","id":"api/v2/mgmt/connections"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-connections","label":"List connections","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/create-connection","label":"Create a connection","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/get-provider-user-id","label":"Get logged in user ID","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/get-connection","label":"Get connection","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/delete-connection","label":"Delete connection","className":"api-method delete"}]},{"type":"category","label":"Destinations","link":{"type":"doc","id":"api/v2/mgmt/destinations"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-destinations","label":"List destinations","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/create-destination","label":"Create destination","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/get-destination","label":"Get destination","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/update-destination","label":"Update destination","className":"api-method put"}]},{"type":"category","label":"Providers","link":{"type":"doc","id":"api/v2/mgmt/providers"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-providers","label":"List providers","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/create-provider","label":"Create provider","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/get-provider","label":"Get provider","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/update-provider","label":"Update provider","className":"api-method put"},{"type":"doc","id":"api/v2/mgmt/delete-provider","label":"Delete provider","className":"api-method delete"}]},{"type":"category","label":"Schemas","link":{"type":"doc","id":"api/v2/mgmt/schemas"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-schemas","label":"List schemas","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"api/v2/mgmt/create-schema","label":"Create schema","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/get-schema","label":"Get schema","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"api/v2/mgmt/update-schema","label":"Update schema","className":"menu__list-item--deprecated api-method put"},{"type":"doc","id":"api/v2/mgmt/delete-schema","label":"Delete schema","className":"menu__list-item--deprecated api-method delete"}]},{"type":"category","label":"Entities","link":{"type":"doc","id":"api/v2/mgmt/entities"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-entities","label":"List entities","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/create-entity","label":"Create entity","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/get-entity","label":"Get entity","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/update-entity","label":"Update entity","className":"api-method put"},{"type":"doc","id":"api/v2/mgmt/delete-entity","label":"Delete entity","className":"api-method delete"}]},{"type":"category","label":"EntityMappings","link":{"type":"doc","id":"api/v2/mgmt/entity-mappings"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/list-entity-mappings","label":"List entity mappings.","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"api/v2/mgmt/upsert-entity-mapping","label":"Upsert entity mapping","className":"menu__list-item--deprecated api-method put"},{"type":"doc","id":"api/v2/mgmt/delete-entity-mapping","label":"Delete entity mapping","className":"api-method delete"}]},{"type":"category","label":"SchemaMappings","link":{"type":"doc","id":"api/v2/mgmt/schema-mappings"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/list-field-mappings","label":"List schema mappings","className":"menu__list-item--deprecated api-method get"},{"type":"doc","id":"api/v2/mgmt/update-object-field-mappings","label":"Update schema mappings","className":"menu__list-item--deprecated api-method put"}]},{"type":"category","label":"SyncConfigs","link":{"type":"doc","id":"api/v2/mgmt/sync-configs"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-sync-configs","label":"List Sync Configs","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/create-sync-config","label":"Create Sync Config","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/get-sync-config","label":"Get Sync Config","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/update-sync-config","label":"Update Sync Config","className":"api-method put"},{"type":"doc","id":"api/v2/mgmt/delete-sync-config","label":"Delete Sync Config","className":"api-method delete"}]},{"type":"category","label":"Syncs","link":{"type":"doc","id":"api/v2/mgmt/syncs"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-syncs","label":"Get Syncs","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/pause-sync","label":"Pause sync","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/resume-sync","label":"Resume sync","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/trigger-sync","label":"Trigger sync","className":"api-method post"}]},{"type":"category","label":"SyncRuns","link":{"type":"doc","id":"api/v2/mgmt/sync-runs"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-sync-runs","label":"Get SyncRuns","className":"api-method get"}]},{"type":"category","label":"Magic Links","link":{"type":"doc","id":"api/v2/mgmt/magic-links"},"collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/get-magic-links","label":"List magic links","className":"api-method get"},{"type":"doc","id":"api/v2/mgmt/create-magic-link","label":"Create magic link","className":"api-method post"},{"type":"doc","id":"api/v2/mgmt/delete-magic-link","label":"Delete magic link","className":"api-method delete"}]},{"type":"category","label":"Salesforce CDC Events (beta)","collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/salesforce-cdc-create","label":"Salesforce record created (beta)","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/salesforce-cdc-update","label":"Salesforce record updated (beta)","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/salesforce-cdc-delete","label":"Salesforce record deleted (beta)","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/salesforce-cdc-undelete","label":"Salesforce record undeleted (beta)","className":"api-method event"}]},{"type":"category","label":"Webhook Events","collapsed":true,"items":[{"type":"doc","id":"api/v2/mgmt/sync-complete","label":"Sync complete","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/connection-created","label":"Customer connection created","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/connection-deleted","label":"Customer connection deleted","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/entity-entity-mapping-created","label":"Entity mapping created","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/entity-entity-mapping-updated","label":"Entity mapping updated","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/entity-entity-mapping-deleted","label":"Entity mapping deleted","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/object-field-mapping-created","label":"Object field mapping created","className":"api-method event"},{"type":"doc","id":"api/v2/mgmt/object-field-mapping-updated","label":"Object field mapping updated","className":"api-method event"}]}];