import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../types.js';

export const glasses: ComponentGroup = {
  variant01: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path fill-rule="evenodd" clip-rule="evenodd" d="M482 429c13 2 26 7 37 15 3-2 7-2 10 0a94 94 0 0 1 39 90c9-6 20-8 30-5-1-34 16-68 44-87 11-7 25-12 39-12 9 0 19 2 27 7l4 1 5 1c10 7 18 16 23 26 8 16 10 33 8 51-3 29-20 57-45 72-14 8-31 13-47 11-13-2-25-8-35-17-9-8-15-19-19-31-1-4-6-7-9-9-9-3-18 0-26 5l-5 7c-7 19-21 36-39 47a99 99 0 0 1-57 14c-31-1-60-18-76-45a92 92 0 0 1 30-127c18-11 41-16 62-14Zm35 19 1 4c0 2 2 3 4 5 12 8 22 19 27 33a81 81 0 0 1-56 111c-26 6-55-1-75-19a82 82 0 0 1-23-90c9-25 32-45 59-51 21-5 43-2 63 6v1Zm190-1c-1-1-1-2-3-2-8-4-17-5-26-4-15 2-29 9-40 20a88 88 0 0 0-26 77c2 13 9 26 19 36 9 7 19 11 30 12 14 1 27-4 39-11 25-18 40-52 35-82a63 63 0 0 0-23-41l-4-3-1-2Z" fill="${colors.glasses.value}"/>`,
  variant02: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path d="M690 460h30c9 1 17 1 26 4 3 1 5 4 4 8-4 5-10 6-16 7v29c-2 14-3 29-8 43-4 11-15 19-25 23-8 3-17 5-25 6-11 1-22-1-33-2-6-1-12-1-17-4-6-4-12-10-15-17-2-6-5-12-6-19-1-10-2-21 0-31-12-2-24-4-36-1l-4 5-1 11c-1 12-2 25-6 36-3 9-9 16-16 22l-15 8c-24 7-48 12-73 11-16-1-33-4-47-12-13-7-25-18-32-31l-4-13-1-23v-21c-7-1-13 0-19-4-3-2-4-7-1-10 3-4 9-5 14-7 15-6 29-8 45-11l19-2c18-2 36-3 54-2 19 0 37 1 56 4 8 1 15 5 22 9l10 11 24 3 12 1 2-9 7-8c9-5 19-7 28-10l47-4Z" fill="${colors.glasses.value}"/><path d="M707 480c6 2 13 8 13 15 1 4-3 8-7 8-6-1-9-7-12-11-2-2-4-2-4-5 0-5 6-8 10-7ZM524 487c8 1 15 5 20 11 3 4 4 10 2 14s-7 6-12 4c-3-2-4-5-6-8-2-2-4-3-7-3l-12-5c-2-2-2-5 0-7 3-5 9-7 15-6Z" fill="#fff"/>`,
  variant03: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path fill-rule="evenodd" clip-rule="evenodd" d="M485 464c18 2 36 4 53 10a1666 1666 0 0 0 38 10c5 1 10 2 15 1a176 176 0 0 1 15-1l8-4 3-2a163 163 0 0 1 85-11l15 2c5 0 9 2 13 3 4 2 7 3 11 3 3 1 6 2 7 4 2 3 0 6-3 7l-9 2h-3c2 18-3 38-11 55-6 11-14 21-25 27-9 6-22 9-33 10-11 0-24-2-34-7-9-4-17-13-21-22a63 63 0 0 1-6-36l3-21-7 1c-7 1-14 2-21 0l-9-1h-4v21c-4 18-13 35-25 49-6 6-13 12-21 16-12 6-25 11-39 14a94 94 0 0 1-75-16c-9-7-18-16-25-27s-10-24-11-37c0-7 1-15 3-22a123 123 0 0 0-11 5h-4c-1-2 0-4 2-5 5-6 13-9 20-12l4-1 28-10a278 278 0 0 1 74-5Zm-57 16h33a553 553 0 0 1 86 13c1 12 0 26-3 38-5 14-15 28-29 36l-22 11c-10 3-21 4-31 5-8 0-17-2-25-5l-22-10c-9-7-17-14-23-23-7-12-10-26-9-39l2-13v-6h1a129 129 0 0 1 36-7h6Zm269 4-21-3a157 157 0 0 0-56 12c-2 6-3 12-3 19-1 9-1 20 2 29 4 8 10 16 18 20 8 3 17 4 25 4 11 0 22-2 30-9 10-8 16-20 19-32 4-12 4-25 5-37l-19-3Z" fill="${colors.glasses.value}"/>`,
  variant04: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path fill-rule="evenodd" clip-rule="evenodd" d="M720 460c9 0 17 1 26 4 3 1 5 4 4 8l-4 3-3 3-9 4v21l-2 19-1 6c-1 7-2 14-5 21-3 10-10 17-19 22-5 3-10 5-16 6l-4 1c-12 3-25 2-37 1l-15-2c-7-1-14-6-18-12-5-4-6-9-9-15v-1c-3-7-3-15-4-23v-4a74 74 0 0 1 1-16c-8-4-17-3-25-2h-3l-12 5a169 169 0 0 1-8 52c-3 6-7 11-12 16l-1 1c-6 7-15 11-23 14a256 256 0 0 1-89 9l-27-6a53 53 0 0 1-22-17 99 99 0 0 1-18-50c-1-11-2-21-1-32-6-1-11-2-15-6 0-3 2-5 3-7l11-4 2-2c14-5 28-7 42-10l21-2 10-1c16-1 31-2 47-1h10l24 2h3c10 1 20 2 28 6l10 6 6 5 4 5 12 2h5l7 1 12 1 1-5c1-3 2-6 5-9a57 57 0 0 1 26-11l21-4a302 302 0 0 0 18-1l38-2 5 1Zm-20 12h23c-2 9-3 18-3 28l-2 19c0 8-1 17-4 25-1 6-3 11-8 15-7 6-15 8-23 11-11 1-22 1-32-1l-4-1c-6-1-13-3-16-7-5-6-7-14-9-21v-2c-2-14 0-29 2-43l1-8 9-3 8-2c7-3 13-5 20-5 13-3 25-5 38-5Zm-148 18c-3-5-7-7-12-8a554 554 0 0 0-130-1l-27 4-1 10v14c0 12 1 24 4 36 2 6 5 12 9 17l1 3 9 12c5 4 12 7 18 9a153 153 0 0 0 62 0l26-7c7-2 15-5 20-11 5-5 9-13 11-20l3-21 2-13 1-6c1-6 1-12 4-18Z" fill="${colors.glasses.value}"/>`,
  variant05: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) =>
    `<path fill-rule="evenodd" clip-rule="evenodd" d="M686 525h37a1149 1149 0 0 0 13 1c7 0 13 1 17 6 3 3 3 7 0 9-4 4-10 4-16 3 2 11 1 21-5 31-4 6-10 9-17 12-14 7-30 11-45 12-9 1-17 0-24-2-7-1-15-3-21-7a35 35 0 0 1-14-24l-2-4-11-2h-1a81 81 0 0 0-23 1h-4l-15 2-2 3-2 4-1 4v3c-2 10-8 18-16 23-9 6-21 9-32 11a183 183 0 0 1-83-10c-6-4-12-8-15-15-4-8-4-17-2-25h-4l-9-1c-3-1-4-3-3-6 2-4 8-6 12-8 6-2 12-4 19-4l55-7c24-3 48-3 72 1l9 4 7 3h3l9 2 23-1 4-1c3 1 5-2 8-4l5-4c7-3 15-4 22-5l6-1 32-3 14-1Zm38 18v8c0 4 0 10-2 14-1 4-4 6-7 8-13 6-27 10-42 12-11 2-22 0-33-3-9-2-16-9-18-18-2-4-2-9-2-13v-3a1133 1133 0 0 0 37-2l17-2a258 258 0 0 1 40-1h10Zm-197 8h-10c-13-1-27 0-40 1l-19 2a1435 1435 0 0 1-41 5l1 8 1 11c1 6 6 8 10 11a86 86 0 0 0 29 8c21 3 41 4 61-3 8-3 15-7 19-14 4-9 4-20 3-29h-14Z" fill="${colors.glasses.value}"/>`,
};
