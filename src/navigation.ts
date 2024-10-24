import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Servicios',
      links: [
        {
          text: 'Frecuencia',
          href: getPermalink('#'),
        },
        {
          text: 'Universal 888',
          href: getPermalink('#'),
        },
        {
          text: 'Fobias',
          href: getPermalink('#'),
        },
        {
          text: 'Depresiones',
          href: getPermalink('#'),
        },
        {
          text: 'Traumas',
          href: getPermalink('#'),
        },
      ],
    },
    {
      text: 'Compañía',
      links: [
        {
          text: 'Acerca de',
          href: getBlogPermalink(),
        },
        {
          text: 'Blog',
          href: getPermalink(),
        },
      ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Frecuencia', href: '#' },
        { text: 'Universal 888', href: '#' },
        { text: 'Fobias', href: '#' },
        { text: 'Depresiones', href: '#' },
        { text: 'Traumas', href: '#' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Acerca de', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
};
