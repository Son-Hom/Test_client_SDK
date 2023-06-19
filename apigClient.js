/*
 * Copyright 2010-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var apigClientFactory = {};
apigClientFactory.newClient = function (config) {
    var apigClient = { };
    if(config === undefined) {
        config = {
            accessKey: '',
            secretKey: '',
            sessionToken: '',
            region: '',
            apiKey: undefined,
            defaultContentType: 'application/json',
            defaultAcceptType: 'application/json'
        };
    }
    if(config.accessKey === undefined) {
        config.accessKey = '';
    }
    if(config.secretKey === undefined) {
        config.secretKey = '';
    }
    if(config.apiKey === undefined) {
        config.apiKey = '';
    }
    if(config.sessionToken === undefined) {
        config.sessionToken = '';
    }
    if(config.region === undefined) {
        config.region = 'us-east-1';
    }
    //If defaultContentType is not defined then default to application/json
    if(config.defaultContentType === undefined) {
        config.defaultContentType = 'application/json';
    }
    //If defaultAcceptType is not defined then default to application/json
    if(config.defaultAcceptType === undefined) {
        config.defaultAcceptType = 'application/json';
    }

    
    // extract endpoint and path from url
    var invokeUrl = 'https://dev.aimlapps.com';
    var endpoint = /(^https?:\/\/[^\/]+)/g.exec(invokeUrl)[1];
    var pathComponent = invokeUrl.substring(endpoint.length);

    var sigV4ClientConfig = {
        accessKey: config.accessKey,
        secretKey: config.secretKey,
        sessionToken: config.sessionToken,
        serviceName: 'execute-api',
        region: config.region,
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var authType = 'NONE';
    if (sigV4ClientConfig.accessKey !== undefined && sigV4ClientConfig.accessKey !== '' && sigV4ClientConfig.secretKey !== undefined && sigV4ClientConfig.secretKey !== '') {
        authType = 'AWS_IAM';
    }

    var simpleHttpClientConfig = {
        endpoint: endpoint,
        defaultContentType: config.defaultContentType,
        defaultAcceptType: config.defaultAcceptType
    };

    var apiGatewayClient = apiGateway.core.apiGatewayClientFactory.newClient(simpleHttpClientConfig, sigV4ClientConfig);
    
    
    
    apigClient.authSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var authSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/auth-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(authSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.authSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var authSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/auth-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(authSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.authSvcAuthPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var authSvcAuthPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/auth-svc/auth').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(authSvcAuthPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.authSvcAuthOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var authSvcAuthOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/auth-svc/auth').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(authSvcAuthOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.authSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var authSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/auth-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(authSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.authSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var authSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/auth-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(authSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var cnbSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var cnbSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var cnbSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var cnbSvcTypesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var cnbSvcTypesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var cnbSvcTypesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories').expand(apiGateway.core.utils.parseParametersToObject(params, ['typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories').expand(apiGateway.core.utils.parseParametersToObject(params, ['typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories').expand(apiGateway.core.utils.parseParametersToObject(params, ['typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdComponentsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdComponentsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/components').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdComponentsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdComponentsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdComponentsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/components').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdComponentsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdComponentsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdComponentsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/components').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdComponentsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'componentId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/components/{componentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'componentId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'componentId', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/components/{componentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'componentId', 'typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'componentId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/components/{componentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'componentId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'componentId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/components/{componentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'componentId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdComponentsComponentIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'payStructureId', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'payStructureId', 'typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}/grades').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'payStructureId', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}/grades').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'payStructureId', 'typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}/grades').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'gradeId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}/grades/{gradeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'gradeId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'gradeId', 'payStructureId', 'typeId', 'body'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}/grades/{gradeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'gradeId', 'payStructureId', 'typeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'gradeId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}/grades/{gradeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'gradeId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'categoryId', 'gradeId', 'payStructureId', 'typeId'], ['body']);
        
        var cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/cnb-svc/types/{typeId}/categories/{categoryId}/pay-structures/{payStructureId}/grades/{gradeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['categoryId', 'gradeId', 'payStructureId', 'typeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(cnbSvcTypesTypeIdCategoriesCategoryIdPayStructuresPayStructureIdGradesGradeIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.directorySvcApiHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var directorySvcApiHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/directory-svc/api/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(directorySvcApiHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.directorySvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var directorySvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/directory-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(directorySvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.employmentSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var employmentSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/employment-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(employmentSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.employmentSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var employmentSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/employment-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(employmentSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var iamSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcGroupsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcGroupsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/groups').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcGroupsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcGroupsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var iamSvcGroupsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/groups').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcGroupsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcGroupsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcGroupsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/groups').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcGroupsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcGroupsGroupIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['groupId'], ['body']);
        
        var iamSvcGroupsGroupIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/groups/{groupId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['groupId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcGroupsGroupIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcGroupsGroupIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['groupId', 'body'], ['body']);
        
        var iamSvcGroupsGroupIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/groups/{groupId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['groupId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcGroupsGroupIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcGroupsGroupIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['groupId'], ['body']);
        
        var iamSvcGroupsGroupIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/groups/{groupId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['groupId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcGroupsGroupIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcGroupsGroupIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['groupId'], ['body']);
        
        var iamSvcGroupsGroupIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/groups/{groupId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['groupId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcGroupsGroupIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcPoliciesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcPoliciesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/policies').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcPoliciesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcPoliciesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var iamSvcPoliciesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/policies').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcPoliciesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcPoliciesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcPoliciesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/policies').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcPoliciesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcPoliciesPolicyIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['policyId'], ['body']);
        
        var iamSvcPoliciesPolicyIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/policies/{policyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['policyId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcPoliciesPolicyIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcPoliciesPolicyIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['policyId', 'body'], ['body']);
        
        var iamSvcPoliciesPolicyIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/policies/{policyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['policyId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcPoliciesPolicyIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcPoliciesPolicyIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['policyId'], ['body']);
        
        var iamSvcPoliciesPolicyIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/policies/{policyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['policyId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcPoliciesPolicyIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcPoliciesPolicyIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['policyId'], ['body']);
        
        var iamSvcPoliciesPolicyIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/policies/{policyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['policyId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcPoliciesPolicyIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcRolesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcRolesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/roles').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcRolesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcRolesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var iamSvcRolesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/roles').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcRolesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcRolesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcRolesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/roles').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcRolesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcRolesRoleIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['roleId'], ['body']);
        
        var iamSvcRolesRoleIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/roles/{roleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['roleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcRolesRoleIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcRolesRoleIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['roleId', 'body'], ['body']);
        
        var iamSvcRolesRoleIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/roles/{roleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['roleId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcRolesRoleIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcRolesRoleIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['roleId'], ['body']);
        
        var iamSvcRolesRoleIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/roles/{roleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['roleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcRolesRoleIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcRolesRoleIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['roleId'], ['body']);
        
        var iamSvcRolesRoleIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/roles/{roleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['roleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcRolesRoleIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcUserAccessGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcUserAccessGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/user-access').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcUserAccessGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcUserAccessPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var iamSvcUserAccessPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/user-access').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcUserAccessPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcUserAccessOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var iamSvcUserAccessOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/user-access').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcUserAccessOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcUserAccessUserAccessIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userAccessId'], ['body']);
        
        var iamSvcUserAccessUserAccessIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/user-access/{userAccessId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userAccessId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcUserAccessUserAccessIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcUserAccessUserAccessIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userAccessId', 'body'], ['body']);
        
        var iamSvcUserAccessUserAccessIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/user-access/{userAccessId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userAccessId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcUserAccessUserAccessIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcUserAccessUserAccessIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userAccessId'], ['body']);
        
        var iamSvcUserAccessUserAccessIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/user-access/{userAccessId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userAccessId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcUserAccessUserAccessIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.iamSvcUserAccessUserAccessIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['userAccessId'], ['body']);
        
        var iamSvcUserAccessUserAccessIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/iam-svc/user-access/{userAccessId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userAccessId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(iamSvcUserAccessUserAccessIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.jobSchedulerRulesPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var jobSchedulerRulesPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/job-scheduler/rules').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(jobSchedulerRulesPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.jobSchedulerRulesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var jobSchedulerRulesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/job-scheduler/rules').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(jobSchedulerRulesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.jobSchedulerRulesNamePut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['name'], ['body']);
        
        var jobSchedulerRulesNamePutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/job-scheduler/rules/{name}').expand(apiGateway.core.utils.parseParametersToObject(params, ['name'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(jobSchedulerRulesNamePutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.jobSchedulerRulesNameOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var jobSchedulerRulesNameOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/job-scheduler/rules/{name}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(jobSchedulerRulesNameOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcAlPeriodsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'Status'], ['body']);
        
        var leaveSvcAlPeriodsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/al-periods').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcAlPeriodsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcAlPeriodsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var leaveSvcAlPeriodsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/al-periods').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcAlPeriodsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcAlPeriodsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var leaveSvcAlPeriodsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/al-periods').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcAlPeriodsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcAlPeriodsAlPeriodIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'alPeriodId'], ['body']);
        
        var leaveSvcAlPeriodsAlPeriodIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/al-periods/{alPeriodId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['alPeriodId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcAlPeriodsAlPeriodIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcAlPeriodsAlPeriodIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'alPeriodId', 'body'], ['body']);
        
        var leaveSvcAlPeriodsAlPeriodIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/al-periods/{alPeriodId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['alPeriodId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcAlPeriodsAlPeriodIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcAlPeriodsAlPeriodIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'alPeriodId'], ['body']);
        
        var leaveSvcAlPeriodsAlPeriodIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/al-periods/{alPeriodId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['alPeriodId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcAlPeriodsAlPeriodIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcAlPeriodsAlPeriodIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'alPeriodId'], ['body']);
        
        var leaveSvcAlPeriodsAlPeriodIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/al-periods/{alPeriodId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['alPeriodId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcAlPeriodsAlPeriodIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var leaveSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var leaveSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var leaveSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcLeaveTypesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'Title', 'Availability', 'Code', 'Status'], ['body']);
        
        var leaveSvcLeaveTypesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/leave-types').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Title', 'Availability', 'Code', 'Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcLeaveTypesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcLeaveTypesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var leaveSvcLeaveTypesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/leave-types').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcLeaveTypesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcLeaveTypesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var leaveSvcLeaveTypesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/leave-types').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcLeaveTypesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcLeaveTypesLeaveTypeIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'leaveTypeId'], ['body']);
        
        var leaveSvcLeaveTypesLeaveTypeIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/leave-types/{leaveTypeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['leaveTypeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcLeaveTypesLeaveTypeIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcLeaveTypesLeaveTypeIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'leaveTypeId', 'body'], ['body']);
        
        var leaveSvcLeaveTypesLeaveTypeIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/leave-types/{leaveTypeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['leaveTypeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcLeaveTypesLeaveTypeIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcLeaveTypesLeaveTypeIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'leaveTypeId'], ['body']);
        
        var leaveSvcLeaveTypesLeaveTypeIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/leave-types/{leaveTypeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['leaveTypeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcLeaveTypesLeaveTypeIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcLeaveTypesLeaveTypeIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'leaveTypeId'], ['body']);
        
        var leaveSvcLeaveTypesLeaveTypeIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/leave-types/{leaveTypeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['leaveTypeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcLeaveTypesLeaveTypeIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcPayComponentsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'Title', 'Code', 'RefId', 'Type'], ['body']);
        
        var leaveSvcPayComponentsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/pay-components').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Title', 'Code', 'RefId', 'Type']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcPayComponentsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcPayComponentsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var leaveSvcPayComponentsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/pay-components').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcPayComponentsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcPayComponentsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var leaveSvcPayComponentsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/pay-components').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcPayComponentsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcPayComponentsPayComponentIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId'], ['body']);
        
        var leaveSvcPayComponentsPayComponentIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/pay-components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcPayComponentsPayComponentIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcPayComponentsPayComponentIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId', 'body'], ['body']);
        
        var leaveSvcPayComponentsPayComponentIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/pay-components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcPayComponentsPayComponentIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcPayComponentsPayComponentIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId'], ['body']);
        
        var leaveSvcPayComponentsPayComponentIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/pay-components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcPayComponentsPayComponentIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcPayComponentsPayComponentIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId'], ['body']);
        
        var leaveSvcPayComponentsPayComponentIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/pay-components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcPayComponentsPayComponentIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdAlPeriodAlPeriodIdLeaveBalanceGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'alPeriodId'], ['body']);
        
        var leaveSvcEmployeeIdAlPeriodAlPeriodIdLeaveBalanceGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/al-period/{alPeriodId}/leave-balance').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'alPeriodId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdAlPeriodAlPeriodIdLeaveBalanceGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdAlPeriodAlPeriodIdLeaveBalanceOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'alPeriodId'], ['body']);
        
        var leaveSvcEmployeeIdAlPeriodAlPeriodIdLeaveBalanceOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/al-period/{alPeriodId}/leave-balance').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'alPeriodId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdAlPeriodAlPeriodIdLeaveBalanceOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdEarnedAlsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'AlPeriodId'], ['body']);
        
        var leaveSvcEmployeeIdEarnedAlsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/earned-als').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['AlPeriodId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdEarnedAlsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdEarnedAlsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdEarnedAlsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/earned-als').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdEarnedAlsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdEarnedAlsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdEarnedAlsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/earned-als').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdEarnedAlsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveGrantRequestsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveGrantRequestsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-grant-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveGrantRequestsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveGrantRequestsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdLeaveGrantRequestsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-grant-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveGrantRequestsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveGrantRequestsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveGrantRequestsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-grant-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveGrantRequestsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveGrantRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-grant-requests/{leaveGrantRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveGrantRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveGrantRequestId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-grant-requests/{leaveGrantRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveGrantRequestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveGrantRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-grant-requests/{leaveGrantRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveGrantRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveGrantRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-grant-requests/{leaveGrantRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveGrantRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveGrantRequestsLeaveGrantRequestIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'AlPeriodId', 'LeaveType.Title', 'LeaveType.Code', 'Status'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['AlPeriodId', 'LeaveType.Title', 'LeaveType.Code', 'Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdApprovePut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdApprovePutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/approve').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdApprovePutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdApproveOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdApproveOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/approve').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdApproveOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCancelPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCancelPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/cancel').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCancelPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCancelOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCancelOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/cancel').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCancelOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCommentPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCommentPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/comment').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCommentPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCommentOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCommentOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/comment').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdCommentOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdRejectPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdRejectPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/reject').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdRejectPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdRejectOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdRejectOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/reject').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdRejectOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdSubmitPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdSubmitPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/submit').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdSubmitPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdSubmitOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'leaveRequestId'], ['body']);
        
        var leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdSubmitOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/leave-requests/{leaveRequestId}/submit').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'leaveRequestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdLeaveRequestsLeaveRequestIdSubmitOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeaveGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeaveGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/pay-period/{payPeriodId}/annual-leave').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeaveGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeavePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeavePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/pay-period/{payPeriodId}/annual-leave').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeavePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeaveOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeaveOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/pay-period/{payPeriodId}/annual-leave').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdPayPeriodPayPeriodIdAnnualLeaveOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/pay-period/{payPeriodId}/unpaid-leaves').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId', 'body'], ['body']);
        
        var leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/pay-period/{payPeriodId}/unpaid-leaves').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/pay-period/{payPeriodId}/unpaid-leaves').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdPayPeriodPayPeriodIdUnpaidLeavesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdSubordinatesLeaveRequestsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'LeaveType.Title', 'Status'], ['body']);
        
        var leaveSvcEmployeeIdSubordinatesLeaveRequestsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/subordinates/leave-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['LeaveType.Title', 'Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdSubordinatesLeaveRequestsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdSubordinatesLeaveRequestsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var leaveSvcEmployeeIdSubordinatesLeaveRequestsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/subordinates/leave-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdSubordinatesLeaveRequestsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdSubordinatesSubordinateIdLeaveRequestsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'subordinateId'], ['body']);
        
        var leaveSvcEmployeeIdSubordinatesSubordinateIdLeaveRequestsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/subordinates/{subordinateId}/leave-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'subordinateId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdSubordinatesSubordinateIdLeaveRequestsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdSubordinatesSubordinateIdLeaveRequestsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'subordinateId'], ['body']);
        
        var leaveSvcEmployeeIdSubordinatesSubordinateIdLeaveRequestsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/subordinates/{subordinateId}/leave-requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'subordinateId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdSubordinatesSubordinateIdLeaveRequestsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdAlPeriodIdLeaveBalanceGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'alPeriodId', 'Status'], ['body']);
        
        var leaveSvcEmployeeIdAlPeriodIdLeaveBalanceGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/{alPeriodId}/leave-balance').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'alPeriodId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdAlPeriodIdLeaveBalanceGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.leaveSvcEmployeeIdAlPeriodIdLeaveBalanceOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'alPeriodId'], ['body']);
        
        var leaveSvcEmployeeIdAlPeriodIdLeaveBalanceOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/leave-svc/{employeeId}/{alPeriodId}/leave-balance').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'alPeriodId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(leaveSvcEmployeeIdAlPeriodIdLeaveBalanceOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.opaDataSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var opaDataSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/opa-data-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(opaDataSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.opaDataSvcUserGrantsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'userUuid'], ['body']);
        
        var opaDataSvcUserGrantsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/opa-data-svc/user-grants').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['userUuid']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(opaDataSvcUserGrantsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var otSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var otSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var otSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPayPeriodPayPeriodIdPaysRequestsRequestIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'requestId'], ['body']);
        
        var otSvcPayPeriodPayPeriodIdPaysRequestsRequestIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pay-period/{payPeriodId}/pays/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPayPeriodPayPeriodIdPaysRequestsRequestIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPayPeriodPayPeriodIdPaysRequestsRequestIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'requestId'], ['body']);
        
        var otSvcPayPeriodPayPeriodIdPaysRequestsRequestIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pay-period/{payPeriodId}/pays/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPayPeriodPayPeriodIdPaysRequestsRequestIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPaysComponentsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var otSvcPaysComponentsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pays/components').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPaysComponentsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPaysComponentsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var otSvcPaysComponentsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pays/components').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPaysComponentsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPaysComponentsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var otSvcPaysComponentsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pays/components').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPaysComponentsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPaysComponentsPayComponentIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId'], ['body']);
        
        var otSvcPaysComponentsPayComponentIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPaysComponentsPayComponentIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPaysComponentsPayComponentIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId', 'body'], ['body']);
        
        var otSvcPaysComponentsPayComponentIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPaysComponentsPayComponentIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPaysComponentsPayComponentIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId'], ['body']);
        
        var otSvcPaysComponentsPayComponentIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPaysComponentsPayComponentIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcPaysComponentsPayComponentIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payComponentId'], ['body']);
        
        var otSvcPaysComponentsPayComponentIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcPaysComponentsPayComponentIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcRequestsRequestIdPaysPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'requestId', 'body'], ['body']);
        
        var otSvcRequestsRequestIdPaysPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/requests/{requestId}/pays').expand(apiGateway.core.utils.parseParametersToObject(params, ['requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcRequestsRequestIdPaysPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcRequestsRequestIdPaysOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'requestId'], ['body']);
        
        var otSvcRequestsRequestIdPaysOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/requests/{requestId}/pays').expand(apiGateway.core.utils.parseParametersToObject(params, ['requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcRequestsRequestIdPaysOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysComponentsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var otSvcEmployeeIdPaysComponentsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/components').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysComponentsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysComponentsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var otSvcEmployeeIdPaysComponentsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/components').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysComponentsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysComponentsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var otSvcEmployeeIdPaysComponentsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/components').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysComponentsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysComponentsPayComponentIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'payComponentId'], ['body']);
        
        var otSvcEmployeeIdPaysComponentsPayComponentIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysComponentsPayComponentIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysComponentsPayComponentIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'payComponentId', 'body'], ['body']);
        
        var otSvcEmployeeIdPaysComponentsPayComponentIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'payComponentId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysComponentsPayComponentIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysComponentsPayComponentIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'payComponentId'], ['body']);
        
        var otSvcEmployeeIdPaysComponentsPayComponentIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysComponentsPayComponentIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysComponentsPayComponentIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'payComponentId'], ['body']);
        
        var otSvcEmployeeIdPaysComponentsPayComponentIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/components/{payComponentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'payComponentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysComponentsPayComponentIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysPayPeriodIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId'], ['body']);
        
        var otSvcEmployeeIdPaysPayPeriodIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/{payPeriodId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysPayPeriodIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdPaysPayPeriodIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'payPeriodId', 'employeeId'], ['body']);
        
        var otSvcEmployeeIdPaysPayPeriodIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/pays/{payPeriodId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['payPeriodId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdPaysPayPeriodIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var otSvcEmployeeIdRequestsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var otSvcEmployeeIdRequestsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdCancelPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdCancelPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}/cancel').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdCancelPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdCancelOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdCancelOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}/cancel').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdCancelOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdSubmitPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdSubmitPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}/submit').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdSubmitPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestsRequestIdSubmitOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestsRequestIdSubmitOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/requests/{requestId}/submit').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestsRequestIdSubmitOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdSubordinatesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'SubordinateId', 'employeeId', 'IndirectReports', 'Status'], ['body']);
        
        var otSvcEmployeeIdSubordinatesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/subordinates').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['SubordinateId', 'IndirectReports', 'Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdSubordinatesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdSubordinatesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'SubordinateId', 'employeeId', 'IndirectReports', 'Status'], ['body']);
        
        var otSvcEmployeeIdSubordinatesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/subordinates').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['SubordinateId', 'IndirectReports', 'Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdSubordinatesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdSubordinatesDirectGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'Status'], ['body']);
        
        var otSvcEmployeeIdSubordinatesDirectGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/subordinates/direct').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdSubordinatesDirectGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdSubordinatesDirectOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'Status'], ['body']);
        
        var otSvcEmployeeIdSubordinatesDirectOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/subordinates/direct').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdSubordinatesDirectOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdSubordinatesSubordinateIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'subordinateId', 'employeeId', 'Status'], ['body']);
        
        var otSvcEmployeeIdSubordinatesSubordinateIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/subordinates/{subordinateId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['subordinateId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdSubordinatesSubordinateIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdSubordinatesSubordinateIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'subordinateId', 'employeeId', 'Status'], ['body']);
        
        var otSvcEmployeeIdSubordinatesSubordinateIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/subordinates/{subordinateId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['subordinateId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdSubordinatesSubordinateIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdApprovePut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdApprovePutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/approve').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdApprovePutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdApproveOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdApproveOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/approve').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdApproveOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdCommentsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdCommentsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/comments').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdCommentsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdCommentsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestIdCommentsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/comments').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdCommentsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdCommentsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdCommentsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/comments').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdCommentsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdCommentsCommentIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'commentId'], ['body']);
        
        var otSvcEmployeeIdRequestIdCommentsCommentIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/comments/{commentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', 'commentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdCommentsCommentIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdCommentsCommentIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'commentId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestIdCommentsCommentIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/comments/{commentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', 'commentId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdCommentsCommentIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdCommentsCommentIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'commentId'], ['body']);
        
        var otSvcEmployeeIdRequestIdCommentsCommentIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/comments/{commentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', 'commentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdCommentsCommentIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdCommentsCommentIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'commentId'], ['body']);
        
        var otSvcEmployeeIdRequestIdCommentsCommentIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/comments/{commentId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', 'commentId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdCommentsCommentIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdInvitedEmployeesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdInvitedEmployeesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/invited-employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdInvitedEmployeesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdInvitedEmployeesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdInvitedEmployeesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/invited-employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdInvitedEmployeesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdInvitedEmployeesInviteIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'inviteId', 'employeeId', 'requestId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestIdInvitedEmployeesInviteIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/invited-employees/{inviteId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['inviteId', 'employeeId', 'requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdInvitedEmployeesInviteIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdInvitedEmployeesInviteIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'inviteId', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdInvitedEmployeesInviteIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/invited-employees/{inviteId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['inviteId', 'employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdInvitedEmployeesInviteIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdRejectPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestIdRejectPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/reject').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdRejectPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdRejectOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdRejectOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/reject').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdRejectOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdReviewPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdReviewPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/review').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdReviewPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdReviewOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdReviewOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/review').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdReviewOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdSendBackPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId', 'body'], ['body']);
        
        var otSvcEmployeeIdRequestIdSendBackPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/send-back').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdSendBackPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.otSvcEmployeeIdRequestIdSendBackOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'requestId'], ['body']);
        
        var otSvcEmployeeIdRequestIdSendBackOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ot-svc/{employeeId}/{requestId}/send-back').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'requestId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(otSvcEmployeeIdRequestIdSendBackOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var outsourcingSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var outsourcingSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var outsourcingSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'ShortName', 'EmployerId', 'Name'], ['body']);
        
        var outsourcingSvcV1ClientsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['ShortName', 'EmployerId', 'Name']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var outsourcingSvcV1ClientsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'ClientName', 'Name'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['ClientName', 'Name']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPeopleGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'EmployeeName'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPeopleGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/people').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['EmployeeName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPeopleGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/people').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPeopleOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPeopleOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/people').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPeopleOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'peopleId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', 'peopleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'peopleId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', 'peopleId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'peopleId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', 'peopleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'peopleId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', 'peopleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdPeoplePeopleIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'Name', 'ProjectName'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Name', 'ProjectName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'Name', 'RegionName'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Name', 'RegionName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'clientId', 'regionId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'projectId', 'clientId', 'regionId', 'DistributorName', 'Name', 'LeCode'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}/shops').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'projectId', 'clientId', 'regionId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['DistributorName', 'Name', 'LeCode']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'clientId', 'regionId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}/shops').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}/shops').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'shopId', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}/shops/{shopId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'shopId', 'clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'shopId', 'clientId', 'regionId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}/shops/{shopId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'shopId', 'clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'shopId', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}/shops/{shopId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'shopId', 'clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'distributorId', 'shopId', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/distributors/{distributorId}/shops/{shopId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['distributorId', 'shopId', 'clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdDistributorsDistributorIdShopsShopIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeopleGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'EmployeeName'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeopleGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/people').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['EmployeeName']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeopleGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/people').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeopleOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeopleOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/people').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeopleOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'peopleId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', 'peopleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'peopleId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', 'peopleId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'peopleId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', 'peopleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'regionId', 'projectId', 'peopleId'], ['body']);
        
        var outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/clients/{clientId}/projects/{projectId}/regions/{regionId}/people/{peopleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', 'regionId', 'projectId', 'peopleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientsClientIdProjectsProjectIdRegionsRegionIdPeoplePeopleIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientIdOutsourcingEmployeesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'Distributor.Name', 'Region.Id', 'Client.Name', 'Employee.Name', 'Project.Name', 'Project.Id', 'Employee.Role', 'Client.Id', 'Outlet.Name', 'Outlet.Id', 'Distributor.Id', 'Employee.Type', 'Region.Name', 'Employee.Id'], ['body']);
        
        var outsourcingSvcV1ClientIdOutsourcingEmployeesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/{clientId}/outsourcing-employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Distributor.Name', 'Region.Id', 'Client.Name', 'Employee.Name', 'Project.Name', 'Project.Id', 'Employee.Role', 'Client.Id', 'Outlet.Name', 'Outlet.Id', 'Distributor.Id', 'Employee.Type', 'Region.Name', 'Employee.Id']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientIdOutsourcingEmployeesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientIdOutsourcingEmployeesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientIdOutsourcingEmployeesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/{clientId}/outsourcing-employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientIdOutsourcingEmployeesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientIdOutsourcingEmployeesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientIdOutsourcingEmployeesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/{clientId}/outsourcing-employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientIdOutsourcingEmployeesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'outsourcingEmployeeId', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/{clientId}/outsourcing-employees/{outsourcingEmployeeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['outsourcingEmployeeId', 'clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'outsourcingEmployeeId', 'clientId', 'body'], ['body']);
        
        var outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/{clientId}/outsourcing-employees/{outsourcingEmployeeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['outsourcingEmployeeId', 'clientId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'outsourcingEmployeeId', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/{clientId}/outsourcing-employees/{outsourcingEmployeeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['outsourcingEmployeeId', 'clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'outsourcingEmployeeId', 'clientId'], ['body']);
        
        var outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/outsourcing-svc/v1/{clientId}/outsourcing-employees/{outsourcingEmployeeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['outsourcingEmployeeId', 'clientId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(outsourcingSvcV1ClientIdOutsourcingEmployeesOutsourcingEmployeeIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var payrollSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var payrollSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId', 'body'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsBatchTemplateGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId', 'PayStructureId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsBatchTemplateGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/batch-template').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['PayStructureId']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsBatchTemplateGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsBatchTemplatePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsBatchTemplatePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/batch-template').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsBatchTemplatePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsBatchTemplateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsBatchTemplateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/batch-template').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsBatchTemplateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsGeneratePost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId', 'body'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsGeneratePostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/generate').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsGeneratePostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsGenerateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsGenerateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/generate').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsGenerateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsPayInputIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId', 'payInputId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsPayInputIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/{payInputId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId', 'payInputId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsPayInputIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsPayInputIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId', 'payInputId', 'body'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsPayInputIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/{payInputId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId', 'payInputId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsPayInputIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsPayInputIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId', 'payInputId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsPayInputIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/{payInputId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId', 'payInputId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsPayInputIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcEmployersEmployerIdPayInputsPayInputIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employerId', 'payInputId'], ['body']);
        
        var payrollSvcEmployersEmployerIdPayInputsPayInputIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/employers/{employerId}/pay-inputs/{payInputId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employerId', 'payInputId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcEmployersEmployerIdPayInputsPayInputIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var payrollSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.payrollSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var payrollSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/payroll-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(payrollSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pimSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var pimSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdBioDataGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdBioDataGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/bio-data').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdBioDataGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdBioDataPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdBioDataPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/bio-data').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdBioDataPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdBioDataOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdBioDataOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/bio-data').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdBioDataOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdBioDataBioDataIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'bioDataId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdBioDataBioDataIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/bio-data/{bioDataId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'bioDataId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdBioDataBioDataIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdBioDataBioDataIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'bioDataId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdBioDataBioDataIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/bio-data/{bioDataId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'bioDataId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdBioDataBioDataIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdBioDataBioDataIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'bioDataId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdBioDataBioDataIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/bio-data/{bioDataId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'bioDataId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdBioDataBioDataIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdComputerLiteraciesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'SoftwareApplication', 'Level'], ['body']);
        
        var pimSvcEmployeesEmployeeIdComputerLiteraciesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/computer-literacies').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['SoftwareApplication', 'Level']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdComputerLiteraciesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdComputerLiteraciesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdComputerLiteraciesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/computer-literacies').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdComputerLiteraciesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdComputerLiteraciesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdComputerLiteraciesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/computer-literacies').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdComputerLiteraciesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'computerLiteracyId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/computer-literacies/{computerLiteracyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'computerLiteracyId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'computerLiteracyId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/computer-literacies/{computerLiteracyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'computerLiteracyId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'computerLiteracyId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/computer-literacies/{computerLiteracyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'computerLiteracyId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'computerLiteracyId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/computer-literacies/{computerLiteracyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'computerLiteracyId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdComputerLiteraciesComputerLiteracyIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdContactsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'Value', 'Type'], ['body']);
        
        var pimSvcEmployeesEmployeeIdContactsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/contacts').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Value', 'Type']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdContactsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdContactsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdContactsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/contacts').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdContactsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdContactsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdContactsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/contacts').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdContactsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdContactsContactIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'contactId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdContactsContactIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/contacts/{contactId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'contactId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdContactsContactIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdContactsContactIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'contactId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdContactsContactIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/contacts/{contactId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'contactId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdContactsContactIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdContactsContactIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'contactId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdContactsContactIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/contacts/{contactId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'contactId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdContactsContactIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdContactsContactIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'contactId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdContactsContactIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/contacts/{contactId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'contactId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdContactsContactIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdCoreCompetenciesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdCoreCompetenciesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/core-competencies').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdCoreCompetenciesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdCoreCompetenciesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdCoreCompetenciesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/core-competencies').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdCoreCompetenciesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdCoreCompetenciesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdCoreCompetenciesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/core-competencies').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdCoreCompetenciesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'coreCompetencyId', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['coreCompetencyId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'coreCompetencyId', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['coreCompetencyId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'coreCompetencyId', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['coreCompetencyId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'coreCompetencyId', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/core-competencies/{coreCompetencyId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['coreCompetencyId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdCoreCompetenciesCoreCompetencyIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdEducationsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'FromYear', 'ToYear', 'Degree', 'Major', 'FieldOfStudy', 'School.Name'], ['body']);
        
        var pimSvcEmployeesEmployeeIdEducationsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/educations').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['FromYear', 'ToYear', 'Degree', 'Major', 'FieldOfStudy', 'School.Name']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdEducationsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdEducationsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdEducationsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/educations').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdEducationsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdEducationsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdEducationsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/educations').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdEducationsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdEducationsEducationIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'educationId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdEducationsEducationIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/educations/{educationId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'educationId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdEducationsEducationIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdEducationsEducationIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'educationId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdEducationsEducationIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/educations/{educationId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'educationId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdEducationsEducationIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdEducationsEducationIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'educationId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdEducationsEducationIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/educations/{educationId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'educationId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdEducationsEducationIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdEducationsEducationIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'educationId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdEducationsEducationIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/educations/{educationId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'educationId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdEducationsEducationIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdExecutiveSummariesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdExecutiveSummariesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/executive-summaries').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdExecutiveSummariesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdExecutiveSummariesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdExecutiveSummariesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/executive-summaries').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdExecutiveSummariesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdExecutiveSummariesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdExecutiveSummariesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/executive-summaries').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdExecutiveSummariesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'executiveSummaryId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'executiveSummaryId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'executiveSummaryId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'executiveSummaryId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'executiveSummaryId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/executive-summaries/{executiveSummaryId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'executiveSummaryId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdExecutiveSummariesExecutiveSummaryIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdLanguagesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'Language', 'ListeningLevel', 'ReadingLevel', 'OverallLevel', 'SpeakingLevel', 'WritingLevel'], ['body']);
        
        var pimSvcEmployeesEmployeeIdLanguagesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/languages').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Language', 'ListeningLevel', 'ReadingLevel', 'OverallLevel', 'SpeakingLevel', 'WritingLevel']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdLanguagesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdLanguagesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdLanguagesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/languages').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdLanguagesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdLanguagesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdLanguagesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/languages').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdLanguagesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdLanguagesLanguageIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'languageId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdLanguagesLanguageIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/languages/{languageId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'languageId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdLanguagesLanguageIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdLanguagesLanguageIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'languageId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdLanguagesLanguageIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/languages/{languageId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'languageId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdLanguagesLanguageIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdLanguagesLanguageIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'languageId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdLanguagesLanguageIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/languages/{languageId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'languageId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdLanguagesLanguageIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdLanguagesLanguageIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'languageId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdLanguagesLanguageIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/languages/{languageId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'languageId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdLanguagesLanguageIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdTrainingsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'NumberOfDays', 'Location', 'CourseTitle', 'ToDate', 'FromDate', 'Organizer.Name'], ['body']);
        
        var pimSvcEmployeesEmployeeIdTrainingsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/trainings').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['NumberOfDays', 'Location', 'CourseTitle', 'ToDate', 'FromDate', 'Organizer.Name']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdTrainingsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdTrainingsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdTrainingsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/trainings').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdTrainingsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdTrainingsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdTrainingsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/trainings').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdTrainingsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdTrainingsTrainingIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'trainingId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdTrainingsTrainingIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/trainings/{trainingId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'trainingId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdTrainingsTrainingIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdTrainingsTrainingIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'trainingId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdTrainingsTrainingIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/trainings/{trainingId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'trainingId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdTrainingsTrainingIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdTrainingsTrainingIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'trainingId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdTrainingsTrainingIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/trainings/{trainingId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'trainingId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdTrainingsTrainingIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdTrainingsTrainingIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'trainingId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdTrainingsTrainingIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/trainings/{trainingId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'trainingId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdTrainingsTrainingIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdWorkExperiencesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'ToDate', 'Employer', 'FromDate', 'PositionTitle'], ['body']);
        
        var pimSvcEmployeesEmployeeIdWorkExperiencesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/work-experiences').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['ToDate', 'Employer', 'FromDate', 'PositionTitle']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdWorkExperiencesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdWorkExperiencesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdWorkExperiencesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/work-experiences').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdWorkExperiencesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdWorkExperiencesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdWorkExperiencesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/work-experiences').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdWorkExperiencesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'workExperienceId', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/work-experiences/{workExperienceId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['workExperienceId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'workExperienceId', 'employeeId', 'body'], ['body']);
        
        var pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/work-experiences/{workExperienceId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['workExperienceId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'workExperienceId', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/work-experiences/{workExperienceId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['workExperienceId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'workExperienceId', 'employeeId'], ['body']);
        
        var pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/employees/{employeeId}/work-experiences/{workExperienceId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['workExperienceId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcEmployeesEmployeeIdWorkExperiencesWorkExperienceIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.pimSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var pimSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/pim-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(pimSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.raSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var raSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/ra-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(raSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.raSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var raSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/ra-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(raSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.recruitmentSvcApiHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var recruitmentSvcApiHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/recruitment-svc/api/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(recruitmentSvcApiHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.recruitmentSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var recruitmentSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/recruitment-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(recruitmentSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var scheduleSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var scheduleSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcArrangedHolidaysGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcArrangedHolidaysGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/arranged-holidays').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcArrangedHolidaysGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcArrangedHolidaysPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var scheduleSvcArrangedHolidaysPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/arranged-holidays').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcArrangedHolidaysPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcArrangedHolidaysOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcArrangedHolidaysOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/arranged-holidays').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcArrangedHolidaysOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcArrangedHolidaysArrangedHolidayIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'arrangedHolidayId'], ['body']);
        
        var scheduleSvcArrangedHolidaysArrangedHolidayIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/arranged-holidays/{arrangedHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['arrangedHolidayId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcArrangedHolidaysArrangedHolidayIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcArrangedHolidaysArrangedHolidayIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'arrangedHolidayId', 'body'], ['body']);
        
        var scheduleSvcArrangedHolidaysArrangedHolidayIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/arranged-holidays/{arrangedHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['arrangedHolidayId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcArrangedHolidaysArrangedHolidayIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcArrangedHolidaysArrangedHolidayIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'arrangedHolidayId'], ['body']);
        
        var scheduleSvcArrangedHolidaysArrangedHolidayIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/arranged-holidays/{arrangedHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['arrangedHolidayId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcArrangedHolidaysArrangedHolidayIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcArrangedHolidaysArrangedHolidayIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'arrangedHolidayId'], ['body']);
        
        var scheduleSvcArrangedHolidaysArrangedHolidayIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/arranged-holidays/{arrangedHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['arrangedHolidayId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcArrangedHolidaysArrangedHolidayIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var scheduleSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcOtherHolidaysGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcOtherHolidaysGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/other-holidays').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcOtherHolidaysGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcOtherHolidaysPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var scheduleSvcOtherHolidaysPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/other-holidays').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcOtherHolidaysPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcOtherHolidaysOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcOtherHolidaysOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/other-holidays').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcOtherHolidaysOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcOtherHolidaysOtherHolidayIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'otherHolidayId'], ['body']);
        
        var scheduleSvcOtherHolidaysOtherHolidayIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/other-holidays/{otherHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['otherHolidayId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcOtherHolidaysOtherHolidayIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcOtherHolidaysOtherHolidayIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'otherHolidayId', 'body'], ['body']);
        
        var scheduleSvcOtherHolidaysOtherHolidayIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/other-holidays/{otherHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['otherHolidayId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcOtherHolidaysOtherHolidayIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcOtherHolidaysOtherHolidayIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'otherHolidayId'], ['body']);
        
        var scheduleSvcOtherHolidaysOtherHolidayIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/other-holidays/{otherHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['otherHolidayId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcOtherHolidaysOtherHolidayIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcOtherHolidaysOtherHolidayIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'otherHolidayId'], ['body']);
        
        var scheduleSvcOtherHolidaysOtherHolidayIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/other-holidays/{otherHolidayId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['otherHolidayId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcOtherHolidaysOtherHolidayIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcSchedulesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var scheduleSvcSchedulesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcSchedulesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'body'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdEmployeesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdEmployeesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}/employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdEmployeesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdEmployeesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'body'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdEmployeesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}/employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdEmployeesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdEmployeesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdEmployeesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}/employees').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdEmployeesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeScheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}/employees/{employeeScheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeScheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeScheduleId', 'body'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}/employees/{employeeScheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeScheduleId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeScheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}/employees/{employeeScheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeScheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeScheduleId'], ['body']);
        
        var scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/schedules/{scheduleId}/employees/{employeeScheduleId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeScheduleId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcSchedulesScheduleIdEmployeesEmployeeScheduleIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcYearsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcYearsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/years').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcYearsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcYearsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var scheduleSvcYearsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/years').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcYearsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcYearsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var scheduleSvcYearsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/years').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcYearsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcYearsYearIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'yearId'], ['body']);
        
        var scheduleSvcYearsYearIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/years/{yearId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['yearId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcYearsYearIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcYearsYearIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'yearId', 'body'], ['body']);
        
        var scheduleSvcYearsYearIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/years/{yearId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['yearId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcYearsYearIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcYearsYearIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'yearId'], ['body']);
        
        var scheduleSvcYearsYearIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/years/{yearId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['yearId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcYearsYearIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcYearsYearIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'yearId'], ['body']);
        
        var scheduleSvcYearsYearIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/years/{yearId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['yearId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcYearsYearIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesResolveDatesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesResolveDatesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/resolve-dates').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesResolveDatesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesResolveDatesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesResolveDatesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/resolve-dates').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesResolveDatesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdDailyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdDailyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/daily').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdDailyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdDailyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdDailyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/daily').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdDailyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdDailyViewDateGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'date', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdDailyViewDateGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/daily-view/{date}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'date', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdDailyViewDateGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdDailyViewDateOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'date', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdDailyViewDateOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/daily-view/{date}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'date', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdDailyViewDateOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/monthly').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/monthly').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyViewMonthNumberGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId', 'monthNumber'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyViewMonthNumberGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/monthly-view/{monthNumber}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId', 'monthNumber'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyViewMonthNumberGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyViewMonthNumberOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId', 'monthNumber'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyViewMonthNumberOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/monthly-view/{monthNumber}').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId', 'monthNumber'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdMonthlyViewMonthNumberOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/weekly').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/weekly').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyViewWeekNumberGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'weekNumber', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyViewWeekNumberGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/weekly-view/{weekNumber}').expand(apiGateway.core.utils.parseParametersToObject(params, ['weekNumber', 'scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyViewWeekNumberGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyViewWeekNumberOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'weekNumber', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyViewWeekNumberOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/weekly-view/{weekNumber}').expand(apiGateway.core.utils.parseParametersToObject(params, ['weekNumber', 'scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdWeeklyViewWeekNumberOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdYearlyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdYearlyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/yearly').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdYearlyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdYearlyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdYearlyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/yearly').expand(apiGateway.core.utils.parseParametersToObject(params, ['scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdYearlyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdYearlyViewYearGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'year', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdYearlyViewYearGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/yearly-view/{year}').expand(apiGateway.core.utils.parseParametersToObject(params, ['year', 'scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdYearlyViewYearGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSchedulesScheduleIdYearlyViewYearOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'year', 'scheduleId', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSchedulesScheduleIdYearlyViewYearOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/schedules/{scheduleId}/yearly-view/{year}').expand(apiGateway.core.utils.parseParametersToObject(params, ['year', 'scheduleId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSchedulesScheduleIdYearlyViewYearOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSubordinatesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'Id'], ['body']);
        
        var scheduleSvcEmployeeIdSubordinatesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/subordinates').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['Id']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSubordinatesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduleSvcEmployeeIdSubordinatesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var scheduleSvcEmployeeIdSubordinatesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/schedule-svc/{employeeId}/subordinates').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduleSvcEmployeeIdSubordinatesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduledJobsHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var scheduledJobsHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/scheduled-jobs/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduledJobsHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduledJobsHealthOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var scheduledJobsHealthOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/scheduled-jobs/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduledJobsHealthOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.scheduledJobsProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var scheduledJobsProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/scheduled-jobs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(scheduledJobsProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.srmSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var srmSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/srm-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(srmSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.srmSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var srmSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/srm-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(srmSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stsCredentialsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var stsCredentialsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/sts-credentials').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stsCredentialsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stsCredentialsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var stsCredentialsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/sts-credentials').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stsCredentialsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.stsCredentialsHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var stsCredentialsHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/sts-credentials/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(stsCredentialsHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tamsSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var tamsSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tamsSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcOpenapiGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tamsSvcOpenapiGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/openapi').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcOpenapiGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcOpenapiOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tamsSvcOpenapiOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/openapi').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcOpenapiOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceClockInPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceClockInPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/clock-in').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceClockInPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceClockInOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceClockInOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/clock-in').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceClockInOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'breakTimeId', 'attendanceId', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times/{breakTimeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['breakTimeId', 'attendanceId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'breakTimeId', 'attendanceId', 'employeeId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times/{breakTimeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['breakTimeId', 'attendanceId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'breakTimeId', 'attendanceId', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times/{breakTimeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['breakTimeId', 'attendanceId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'breakTimeId', 'attendanceId', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times/{breakTimeId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['breakTimeId', 'attendanceId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdEndBreakPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'breakTimeId', 'attendanceId', 'employeeId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdEndBreakPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times/{breakTimeId}/end-break').expand(apiGateway.core.utils.parseParametersToObject(params, ['breakTimeId', 'attendanceId', 'employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdEndBreakPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdEndBreakOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'breakTimeId', 'attendanceId', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdEndBreakOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/break-times/{breakTimeId}/end-break').expand(apiGateway.core.utils.parseParametersToObject(params, ['breakTimeId', 'attendanceId', 'employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdBreakTimesBreakTimeIdEndBreakOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdClockOutPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdClockOutPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/clock-out').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdClockOutPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdClockOutOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdClockOutOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/clock-out').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdClockOutOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdStartBreakPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdStartBreakPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/start-break').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdStartBreakPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdAttendanceAttendanceIdStartBreakOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'attendanceId'], ['body']);
        
        var tamsSvcEmployeeIdAttendanceAttendanceIdStartBreakOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/attendance/{attendanceId}/start-break').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', 'attendanceId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdAttendanceAttendanceIdStartBreakOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdEngagementStatusGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdEngagementStatusGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/engagement-status').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdEngagementStatusGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdEngagementStatusPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'body'], ['body']);
        
        var tamsSvcEmployeeIdEngagementStatusPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/engagement-status').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdEngagementStatusPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdEngagementStatusOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdEngagementStatusOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/engagement-status').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdEngagementStatusOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdSubordinateAttendanceGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId', 'dateTo', 'subordinateId', 'dateFrom', 'managedLevels', 'status'], ['body']);
        
        var tamsSvcEmployeeIdSubordinateAttendanceGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/subordinate-attendance').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, ['dateTo', 'subordinateId', 'dateFrom', 'managedLevels', 'status']),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdSubordinateAttendanceGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdSubordinateAttendanceOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdSubordinateAttendanceOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/subordinate-attendance').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdSubordinateAttendanceOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdTimeClockDetailsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdTimeClockDetailsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/time-clock-details').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdTimeClockDetailsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tamsSvcEmployeeIdTimeClockDetailsOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'employeeId'], ['body']);
        
        var tamsSvcEmployeeIdTimeClockDetailsOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tams-svc/{employeeId}/time-clock-details').expand(apiGateway.core.utils.parseParametersToObject(params, ['employeeId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tamsSvcEmployeeIdTimeClockDetailsOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tenantSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var tenantSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var tenantSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcTenantsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var tenantSvcTenantsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/tenants').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcTenantsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcTenantsPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var tenantSvcTenantsPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/tenants').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcTenantsPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcTenantsTenantIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'tenantId'], ['body']);
        
        var tenantSvcTenantsTenantIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/tenants/{tenantId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['tenantId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcTenantsTenantIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcTenantsTenantIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'tenantId', 'body'], ['body']);
        
        var tenantSvcTenantsTenantIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/tenants/{tenantId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['tenantId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcTenantsTenantIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcTenantsTenantIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'tenantId'], ['body']);
        
        var tenantSvcTenantsTenantIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/tenants/{tenantId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['tenantId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcTenantsTenantIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.tenantSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var tenantSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/tenant-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(tenantSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcApiDocsGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var userSvcApiDocsGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/api-docs').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcApiDocsGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcApiDocsProxyGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['proxy'], ['body']);
        
        var userSvcApiDocsProxyGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/api-docs/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, ['proxy'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcApiDocsProxyGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var userSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcPoolUsernameGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['username'], ['body']);
        
        var userSvcPoolUsernameGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/pool/{username}').expand(apiGateway.core.utils.parseParametersToObject(params, ['username'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcPoolUsernameGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcPoolUsernameOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['username'], ['body']);
        
        var userSvcPoolUsernameOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/pool/{username}').expand(apiGateway.core.utils.parseParametersToObject(params, ['username'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcPoolUsernameOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcRegisterTenantPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);
        
        var userSvcRegisterTenantPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/register-tenant').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcRegisterTenantPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcRegisterTenantOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var userSvcRegisterTenantOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/register-tenant').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcRegisterTenantOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcUsersGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var userSvcUsersGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/users').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcUsersGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcUsersPost = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'body'], ['body']);
        
        var userSvcUsersPostRequest = {
            verb: 'post'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/users').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcUsersPostRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcUsersOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization'], ['body']);
        
        var userSvcUsersOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/users').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization']),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcUsersOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcUsersUserIdGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'userId'], ['body']);
        
        var userSvcUsersUserIdGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/users/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcUsersUserIdGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcUsersUserIdPut = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'userId', 'body'], ['body']);
        
        var userSvcUsersUserIdPutRequest = {
            verb: 'put'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/users/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId', ])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcUsersUserIdPutRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcUsersUserIdDelete = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'userId'], ['body']);
        
        var userSvcUsersUserIdDeleteRequest = {
            verb: 'delete'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/users/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcUsersUserIdDeleteRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.userSvcUsersUserIdOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, ['authorization', 'userId'], ['body']);
        
        var userSvcUsersUserIdOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/user-svc/users/{userId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userId'])),
            headers: apiGateway.core.utils.parseParametersToObject(params, ['authorization', ]),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(userSvcUsersUserIdOptionsRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.workflowsSvcHealthGet = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var workflowsSvcHealthGetRequest = {
            verb: 'get'.toUpperCase(),
            path: pathComponent + uritemplate('/workflows-svc/health').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(workflowsSvcHealthGetRequest, authType, additionalParams, config.apiKey);
    };
    
    
    apigClient.workflowsSvcProxyOptions = function (params, body, additionalParams) {
        if(additionalParams === undefined) { additionalParams = {}; }
        
        apiGateway.core.utils.assertParametersDefined(params, [], ['body']);
        
        var workflowsSvcProxyOptionsRequest = {
            verb: 'options'.toUpperCase(),
            path: pathComponent + uritemplate('/workflows-svc/{proxy+}').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
            headers: apiGateway.core.utils.parseParametersToObject(params, []),
            queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
            body: body
        };
        
        
        return apiGatewayClient.makeRequest(workflowsSvcProxyOptionsRequest, authType, additionalParams, config.apiKey);
    };
    

    return apigClient;
};
