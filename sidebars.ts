import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Welcome to BAS',
    },
    {
      type: 'doc',
      id: 'quick_start',
      label: 'Quick Start',
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core_concept/schema',
        'core_concept/composability',
        'core_concept/ownership&access_control',
        'core_concept/delegating',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/create_schema',
        'tutorials/make_attestation',
        'tutorials/attestation_in_gf',
        'tutorials/delegate',
      ],
    },
    {
      type: 'category',
      label: 'Explorer',
      items: [
        'explorer/overview',
        'explorer/schema',
        'explorer/attestation',
      ],
    },
    {
      type: 'category',
      label: 'BNB Passport',
      items: [
        'passport/introduction',
        'passport/interface',
        'passport/sdk',
      ],
    },
    {
      type: 'category',
      label: 'Manage Attestation in Greenfield',
      items: [
        'manage attestation in greenfield on BNB Chain/overview',
      ],
    },
    {
      type: 'doc',
      id: 'graphql',
      label: 'GraphQL',
    },
  ],
};

export default sidebars;
