export const MenuData = [
    {
        "id": 19,
        "title": "Baza Wiedzy",
        "menuAttached": true,
        "order": 1,
        "path": "/test",
        "type": "WRAPPER",
        "uiRouterKey": "test",
        "slug": "test",
        "external": false,
        "audience": [
            "dfhfdh"
        ],
        "items": [
            {
                "id": 20,
                "title": "WI-SA",
                "menuAttached": true,
                "order": 1,
                "path": "/test/test1",
                "type": "EXTERNAL",
                "uiRouterKey": "test1",
                "slug": "test-test1",
                "external": false,
                "items": [
                    {
                        "id": 21,
                        "title": "Formularze rejestracyjne",
                        "menuAttached": true,
                        "order": 1,
                        "path": "/test/test1",
                        "type": "INTERNAL",
                        "uiRouterKey": "test1",
                        "slug": "test-test1asd",
                        "external": false,
                        "items": []
                    },
                    {
                        "id": 2053252,
                        "title": "Hasła SZOI",
                        "menuAttached": true,
                        "order": 1,
                        "path": "/test/test1",
                        "type": "INTERNAL",
                        "uiRouterKey": "test1",
                        "slug": "test-test11asfvd",
                        "external": false,
                        "items": []
                    }
                ]
            },
            {
                "id": 29,
                "title": "WI-SI",
                "menuAttached": true,
                "order": 1,
                "path": "/test/test1",
                "type": "WRAPPER",
                "uiRouterKey": "test1",
                "slug": "test-test1fsvdv",
                "external": false,
                "items": [
                    {
                        "id": 213,
                        "title": "Konta domenowe",
                        "menuAttached": true,
                        "order": 1,
                        "path": "/test/test1",
                        "type": "INTERNAL",
                        "uiRouterKey": "test1",
                        "slug": "test-test1fdbfdbfd",
                        "external": false,
                        "items": []
                    },
                    {
                        "id": 2034,
                        "title": "Laptopy",
                        "menuAttached": true,
                        "order": 1,
                        "path": "/test/test1",
                        "type": "INTERNAL",
                        "uiRouterKey": "test1",
                        "slug": "test-test11tyiyt",
                        "external": false,
                        "items": []
                    }
                ]
            }
        ],
        "test": false,
        "test1": "page"
    },
    {
        "id": 5,
        "title": "Adresy innych stron",
        "menuAttached": true,
        "order": 2,
        "path": "/adresy-innych-stron",
        "type": "INTERNAL",
        "uiRouterKey": "adresy-innych-stron",
        "slug": "adresy-innych-stron",
        "external": false,
        "related": {
            "id": 1,
            "title": "asfas fsafgasg",
            "content": "<p>gdsgsdg</p>",
            "createdAt": "2023-01-17T20:23:30.111Z",
            "updatedAt": "2023-01-18T12:51:44.048Z",
            "publishedAt": "2023-01-17T20:34:54.499Z",
            "slug": "asfas-fsafgasg",
            "__contentType": "api::article.article",
            "navigationItemId": 5,
            "__templateName": "Generic"
        },
        "items": [
            {
                "id": 6,
                "title": "SZOI",
                "menuAttached": true,
                "order": 1,
                "path": "www.google.pl",
                "type": "EXTERNAL",
                "uiRouterKey": "szoi",
                "slug": "szoi",
                "external": true
            },
            {
                "id": 7,
                "title": "AP-KONTROLE",
                "menuAttached": true,
                "order": 2,
                "path": "www.google.pl",
                "type": "EXTERNAL",
                "uiRouterKey": "ap-kontrole",
                "slug": "ap-kontrole",
                "external": true
            }
        ]
    },
    {
        "id": 8,
        "title": "Lista Obecności",
        "menuAttached": false,
        "order": 3,
        "path": "www.google.pl",
        "type": "EXTERNAL",
        "uiRouterKey": "lista-obecnosci",
        "slug": "lista-obecnosci",
        "external": true
    },
    {
        "id": 9,
        "title": "Prasówka",
        "menuAttached": false,
        "order": 4,
        "path": "/prasowka",
        "type": "INTERNAL",
        "uiRouterKey": "prasowka",
        "slug": "prasowka",
        "external": false,
        "related": {
            "id": 1,
            "title": "Prasówka",
            "slug": "prasowka",
            "createdAt": "2023-01-17T19:56:59.745Z",
            "updatedAt": "2023-01-18T14:03:10.485Z",
            "publishedAt": "2023-01-18T11:10:34.676Z",
            "content": "<p>Informacje prasowe</p>",
            "__contentType": "api::page.page",
            "navigationItemId": 9,
            "__templateName": "Generic"
        },
        "items": []
    },
    {
        "id": 10,
        "title": "Raporty",
        "menuAttached": false,
        "order": 5,
        "path": "/raporty",
        "type": "WRAPPER",
        "uiRouterKey": "raporty",
        "slug": "raporty",
        "external": false,
        "items": [
            {
                "id": 15,
                "title": "Projekty",
                "menuAttached": false,
                "order": 1,
                "path": "/raporty/projekty",
                "type": "INTERNAL",
                "uiRouterKey": "projekty",
                "slug": "raporty-projekty",
                "external": false,
                "related": {
                    "id": 5,
                    "title": "Projekty",
                    "slug": "projekty",
                    "createdAt": "2023-01-19T09:17:07.993Z",
                    "updatedAt": "2023-01-19T09:18:25.990Z",
                    "publishedAt": "2023-01-19T09:18:25.989Z",
                    "content": "<p>asfasf</p>",
                    "__contentType": "api::page.page",
                    "navigationItemId": 15,
                    "__templateName": "Generic"
                },
                "items": []
            },
            {
                "id": 16,
                "title": "Sprawozdania",
                "menuAttached": false,
                "order": 2,
                "path": "/raporty/sprawozdania",
                "type": "INTERNAL",
                "uiRouterKey": "sprawozdania",
                "slug": "raporty-sprawozdania",
                "external": false,
                "related": {
                    "id": 6,
                    "title": "Sprawozdania",
                    "slug": "sprawozdania",
                    "createdAt": "2023-01-19T09:17:30.152Z",
                    "updatedAt": "2023-01-19T09:18:42.197Z",
                    "publishedAt": "2023-01-19T09:18:42.196Z",
                    "content": "<p>sdgbf</p>",
                    "__contentType": "api::page.page",
                    "navigationItemId": 16,
                    "__templateName": "Generic"
                },
                "items": []
            },
            {
                "id": 17,
                "title": "Kontrola zarządcza",
                "menuAttached": false,
                "order": 3,
                "path": "/raporty/kontrola-zarzadcza",
                "type": "INTERNAL",
                "uiRouterKey": "kontrola-zarzadcza",
                "slug": "raporty-kontrola-zarzadcza",
                "external": false,
                "related": {
                    "id": 7,
                    "title": "Kontrola zarządcza",
                    "slug": "kontrola-zarzadcza",
                    "createdAt": "2023-01-19T09:17:48.587Z",
                    "updatedAt": "2023-01-19T09:18:17.232Z",
                    "publishedAt": "2023-01-19T09:18:17.230Z",
                    "content": "<p>asfsafa</p>",
                    "__contentType": "api::page.page",
                    "navigationItemId": 17,
                    "__templateName": "Generic"
                },
                "items": []
            },
            {
                "id": 18,
                "title": "Petycje",
                "menuAttached": false,
                "order": 4,
                "path": "/raporty/petycje",
                "type": "INTERNAL",
                "uiRouterKey": "petycje",
                "slug": "raporty-petycje",
                "external": false,
                "related": {
                    "id": 8,
                    "title": "Petycje",
                    "slug": "petycje",
                    "createdAt": "2023-01-19T09:18:59.748Z",
                    "updatedAt": "2023-01-19T09:19:00.744Z",
                    "publishedAt": "2023-01-19T09:19:00.742Z",
                    "content": "<p>vdfb</p>",
                    "__contentType": "api::page.page",
                    "navigationItemId": 18,
                    "__templateName": "Generic"
                },
                "items": []
            }
        ]
    },
    {
        "id": 11,
        "title": "Procedury",
        "menuAttached": false,
        "order": 6,
        "path": "/procedury",
        "type": "INTERNAL",
        "uiRouterKey": "procedury",
        "slug": "procedury",
        "external": false,
        "related": {
            "id": 9,
            "title": "Procedury",
            "slug": "procedury",
            "createdAt": "2023-01-19T09:19:19.768Z",
            "updatedAt": "2023-01-19T09:19:25.228Z",
            "publishedAt": "2023-01-19T09:19:25.227Z",
            "content": "<p>bgdgbbfvfaav</p>",
            "__contentType": "api::page.page",
            "navigationItemId": 11,
            "__templateName": "Generic"
        },
        "items": []
    },
    {
        "id": 12,
        "title": "Prosty język",
        "menuAttached": false,
        "order": 7,
        "path": "/prosty-jezyk",
        "type": "INTERNAL",
        "uiRouterKey": "prosty-jezyk",
        "slug": "prosty-jezyk",
        "external": false,
        "related": {
            "id": 10,
            "title": "Prosty język",
            "slug": "prosty-jezyk",
            "createdAt": "2023-01-19T09:19:44.845Z",
            "updatedAt": "2023-01-19T09:19:46.036Z",
            "publishedAt": "2023-01-19T09:19:46.035Z",
            "content": "<p>fbffd</p>",
            "__contentType": "api::page.page",
            "navigationItemId": 12,
            "__templateName": "Generic"
        },
        "items": []
    },
    {
        "id": 13,
        "title": "Struktura organizacyjna",
        "menuAttached": false,
        "order": 8,
        "path": "/struktura-organizacyjna",
        "type": "INTERNAL",
        "uiRouterKey": "struktura-organizacyjna",
        "slug": "struktura-organizacyjna",
        "external": false,
        "related": {
            "id": 11,
            "title": "Struktura organizacyjna",
            "slug": "struktura-organizacyjna",
            "createdAt": "2023-01-19T09:20:11.642Z",
            "updatedAt": "2023-01-19T09:20:13.051Z",
            "publishedAt": "2023-01-19T09:20:13.049Z",
            "content": "<p>ffdbfdbdfb</p>",
            "__contentType": "api::page.page",
            "navigationItemId": 13,
            "__templateName": "Generic"
        },
        "items": []
    },
    {
        "id": 14,
        "title": "Strategia NFZ",
        "menuAttached": false,
        "order": 9,
        "path": "/strategia-nfz",
        "type": "INTERNAL",
        "uiRouterKey": "strategia-nfz",
        "slug": "strategia-nfz",
        "external": false,
        "related": {
            "id": 3,
            "title": "Strategia NFZ",
            "slug": "strategia-nfz",
            "createdAt": "2023-01-17T20:25:03.860Z",
            "updatedAt": "2023-01-19T09:16:30.512Z",
            "publishedAt": "2023-01-18T11:10:40.966Z",
            "content": "<p>asfas</p>",
            "__contentType": "api::page.page",
            "navigationItemId": 14,
            "__templateName": "Generic"
        },
        "items": []
    },
    
]