// River Map Node Data
// Each zone represents a section of the knowledge river

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  slug: string; // URL path to the article
}

export interface Zone {
  id: string;
  number: number;
  name: string;
  nameEn: string; // English name for the zone
  color: {
    bg: string;      // Background color of the circle
    border: string;  // Border color
    text: string;    // Text color inside circle
  };
  status: 'active' | 'coming-soon';
  articles: Article[];
}

export const zones: Zone[] = [
  {
    id: 'foundations',
    number: 1,
    name: 'Foundations',
    nameEn: 'Headwaters',
    color: {
      bg: '#E6F1FB',
      border: '#85B7EB',
      text: '#185FA5',
    },
    status: 'active',
    articles: [
      {
        id: 'rendering',
        title: 'Understanding Rendering: SSR, CSR, and SSG',
        description: 'A deep dive into different rendering strategies for modern web applications.',
        date: '2026-04-12',
        slug: '/blog/understanding-rendering',
      },
      {
        id: 'how-websites-work',
        title: 'How Websites Work: The Journey from Click to Display',
        description: 'Understanding the five-stage process that happens between clicking a link and seeing a webpage.',
        date: '2026-04-12',
        slug: '/blog/how-websites-work',
      },
    ],
  },
  {
    id: 'systems',
    number: 2,
    name: 'Systems',
    nameEn: 'Transfer Zone',
    color: {
      bg: '#E1F5EE',
      border: '#5DCAA5',
      text: '#0F6E56',
    },
    status: 'coming-soon',
    articles: [],
  },
  {
    id: 'projects',
    number: 3,
    name: 'Projects',
    nameEn: 'Delta',
    color: {
      bg: '#FAEEDA',
      border: '#EF9F27',
      text: '#854F0B',
    },
    status: 'active',
    articles: [
      {
        id: 'lumen-intro',
        title: 'Lumen - light up every moment',
        description: 'An app to help you track and optimize your energy throughout the day.',
        date: '2026-03-01',
        slug: '/blog/lumen',
      },
      {
        id: 'lumen-milestone-1',
        title: 'Lumen milestone#1 - From Needs to Architecture',
        description: 'Architecture is not chosen — it is derived, by working backward from user needs to data.',
        date: '2026-03-17',
        slug: '/blog/lumen-milestone1---web-architecture-design',
      },
      {
        id: 'lumen-milestone-2',
        title: 'Lumen milestone#2',
        description: 'Continuing the journey of building Lumen.',
        date: '2026-03-19',
        slug: '/blog/lumen-milestone-2',
      },
    ],
  },
];

// Helper function to get all articles flattened
export function getAllArticles(): (Article & { zoneId: string })[] {
  return zones.flatMap(zone =>
    zone.articles.map(article => ({
      ...article,
      zoneId: zone.id,
    }))
  );
}

// Helper function to get zone by id
export function getZoneById(id: string): Zone | undefined {
  return zones.find(zone => zone.id === id);
}
