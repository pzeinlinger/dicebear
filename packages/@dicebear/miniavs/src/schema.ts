import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  title: 'Options',
  $schema: 'http://json-schema.org/draft-07/schema#',
  properties: {
    blushes: {
      type: 'array',
      items: { type: 'string', enum: ['default'] },
      default: ['default'],
      examples: [['default']],
    },
    blushesProbability: {
      type: 'integer',
      minimum: 0,
      maximum: 100,
      default: 50,
    },
    body: {
      type: 'array',
      items: { type: 'string', enum: ['tShirt', 'golf'] },
      default: ['tShirt', 'golf'],
      examples: [['tShirt'], ['golf']],
    },
    bodyColor: {
      type: 'array',
      items: {
        type: 'string',
        pattern:
          '^([0-9a-zA-Z]+|#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})$',
      },
      default: ['orange', 'blue', 'pink'],
      examples: [['orange'], ['blue'], ['pink']],
    },
    eyes: {
      type: 'array',
      items: { type: 'string', enum: ['normal', 'confident', 'happy'] },
      default: ['normal', 'confident', 'happy'],
      examples: [['normal'], ['confident'], ['happy']],
    },
    glasses: {
      type: 'array',
      items: { type: 'string', enum: ['normal'] },
      default: ['normal'],
      examples: [['normal']],
    },
    glassesProbability: {
      type: 'integer',
      minimum: 0,
      maximum: 100,
      default: 20,
    },
    hair: {
      type: 'array',
      items: {
        type: 'string',
        enum: [
          'balndess',
          'slaughter',
          'ponyTail',
          'long',
          'curly',
          'stylish',
          'elvis',
          'classic02',
          'classic01',
        ],
      },
      default: [
        'balndess',
        'slaughter',
        'ponyTail',
        'long',
        'curly',
        'stylish',
        'elvis',
        'classic02',
        'classic01',
      ],
      examples: [
        ['balndess'],
        ['slaughter'],
        ['ponyTail'],
        ['long'],
        ['curly'],
        ['stylish'],
        ['elvis'],
        ['classic02'],
        ['classic01'],
      ],
    },
    hairColor: {
      type: 'array',
      items: {
        type: 'string',
        pattern:
          '^([0-9a-zA-Z]+|#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})$',
      },
      default: ['brown', 'black', 'red'],
      examples: [['brown'], ['black'], ['red']],
    },
    head: {
      type: 'array',
      items: { type: 'string', enum: ['normal', 'wide', 'thin'] },
      default: ['normal', 'wide', 'thin'],
      examples: [['normal'], ['wide'], ['thin']],
    },
    mouth: {
      type: 'array',
      items: { type: 'string', enum: ['default', 'missingTooth'] },
      default: ['default', 'missingTooth'],
      examples: [['default'], ['missingTooth']],
    },
    mustache: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['pencilThinBeard', 'pencilThin', 'horshoe', 'freddy'],
      },
      default: ['pencilThinBeard', 'pencilThin', 'horshoe', 'freddy'],
      examples: [['pencilThinBeard'], ['pencilThin'], ['horshoe'], ['freddy']],
    },
    mustacheProbability: {
      type: 'integer',
      minimum: 0,
      maximum: 100,
      default: 20,
    },
    skinColor: {
      type: 'array',
      items: {
        type: 'string',
        pattern:
          '^([0-9a-zA-Z]+|#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})$',
      },
      default: ['yellow', 'white', 'dark'],
      examples: [['yellow'], ['white'], ['dark']],
    },
  },
  additionalProperties: false,
};
