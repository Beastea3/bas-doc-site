import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f01'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5c0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '980'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4c3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1ca'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ba8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '5dc'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'd3a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '3e9'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'a6b'),
            routes: [
              {
                path: '/category/core-concetp',
                component: ComponentCreator('/category/core-concetp', '88b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/attestation',
                component: ComponentCreator('/core_concept/attestation', 'e16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/composability',
                component: ComponentCreator('/core_concept/composability', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/delegating',
                component: ComponentCreator('/core_concept/delegating', 'de9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/onchain_vs_offchain',
                component: ComponentCreator('/core_concept/onchain_vs_offchain', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/ownership&access_control',
                component: ComponentCreator('/core_concept/ownership&access_control', 'ec1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/resolver',
                component: ComponentCreator('/core_concept/resolver', 'b10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/revocation',
                component: ComponentCreator('/core_concept/revocation', '4a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/core_concept/schema',
                component: ComponentCreator('/core_concept/schema', 'b4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explorer/attestation',
                component: ComponentCreator('/explorer/attestation', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explorer/overview',
                component: ComponentCreator('/explorer/overview', '256'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/explorer/schema',
                component: ComponentCreator('/explorer/schema', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/quick_start',
                component: ComponentCreator('/quick_start', '3b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sdk/js',
                component: ComponentCreator('/sdk/js', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/attestation_in_gf',
                component: ComponentCreator('/tutorials/attestation_in_gf', '54f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/create_schema',
                component: ComponentCreator('/tutorials/create_schema', '05d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/delegate',
                component: ComponentCreator('/tutorials/delegate', '1f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/make_attestation',
                component: ComponentCreator('/tutorials/make_attestation', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/reference_attestation',
                component: ComponentCreator('/tutorials/reference_attestation', '4c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/resolver',
                component: ComponentCreator('/tutorials/resolver', '002'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tutorials/revoke',
                component: ComponentCreator('/tutorials/revoke', '311'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/use_case/license',
                component: ComponentCreator('/use_case/license', '916'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/use_case/voting',
                component: ComponentCreator('/use_case/voting', 'f4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '98e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
