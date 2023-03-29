/*
 * Supaglue Management API
 * # Introduction  Welcome to the Supaglue Management API documentation. You can use this API to manage customer integrations and connections.  ### Base API URL  ``` http://localhost:8080/mgmt/v1 ``` 
 *
 * OpenAPI spec version: 0.6.0
 * Contact: docs@supaglue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.api;

import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * API tests for SyncApi
 */
@Ignore
public class SyncApiTest {

    private final SyncApi api = new SyncApi();

    /**
     * Get Sync History
     *
     * Get a list of Sync History objects.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void getSyncHistoryTest() throws Exception {
        Object cursor = null;
        Object pageSize = null;
        Object customerId = null;
        Object providerName = null;
        Object model = null;
        Object response = api.getSyncHistory(cursor, pageSize, customerId, providerName, model);

        // TODO: test validations
    }
    /**
     * Get Sync Info
     *
     * Get a list of Sync Info
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void getSyncInfosTest() throws Exception {
        Object customerId = null;
        Object providerName = null;
        Object response = api.getSyncInfos(customerId, providerName);

        // TODO: test validations
    }
}
