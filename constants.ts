import { Product, NavItem, GalleryItem, ProcessStep, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Начало', href: '#home' },
  { label: 'Предимства', href: '#features' },
  { label: 'Продукти', href: '#products' },
  { label: 'Процес', href: '#process' },
  { label: 'Галерия', href: '#gallery' },
  { label: 'За Нас', href: '#about' },
  { label: 'Контакти', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Унипаваж MD80',
    category: 'Павета',
    image: 'https://images.unsplash.com/photo-1517646331032-9e8563c523a1?q=80&w=800&auto=format&fit=crop',
    description: 'Вибропресовани павета с висока плътност. Идеални за тежко натоварване и индустриални зони.'
  },
  {
    id: 2,
    title: 'Плоча Urban 40x40',
    category: 'Плочи',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=800&auto=format&fit=crop',
    description: 'Минималистичен дизайн за модерни градски пространства. Специално покритие против плъзгане.'
  },
  {
    id: 3,
    title: 'Бордюр CityLine',
    category: 'Бордюри',
    image: 'https://images.unsplash.com/photo-1623945417387-c5053b93728f?q=80&w=800&auto=format&fit=crop',
    description: 'Прецизни линии за очертаване на алеи и улици. Устойчив на соли и замръзване.'
  },
  {
    id: 4,
    title: 'Facade Stone X',
    category: 'Декорация',
    image: 'https://images.unsplash.com/photo-1486749816008-8df0c34e6224?q=80&w=800&auto=format&fit=crop',
    description: '3D текстуриран бетон за окачени фасади. Отлична топлоизолация и модерна визия.'
  },
  {
    id: 5,
    title: 'Еко Грид 2.0',
    category: 'Еко решения',
    image: 'https://images.unsplash.com/photo-1662497677353-06698642a849?q=80&w=800&auto=format&fit=crop',
    description: 'Паркинг елементи, позволяващи озеленяване. Дренажна система за отвеждане на водата.'
  },
  {
    id: 6,
    title: 'Zen Planter L',
    category: 'Градина',
    image: 'https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=800&auto=format&fit=crop',
    description: 'Масивни бетонни кашпи с архитектурен бетон. Подходящи за обществени сгради.'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1624322474936-a337a3461239?q=80&w=1200&auto=format&fit=crop',
    title: 'Резиденция Лозенец',
    category: 'Частен дом'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1596627680452-f63334e3658d?q=80&w=1200&auto=format&fit=crop',
    title: 'Бизнес Парк София',
    category: 'Обществени площи'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200&auto=format&fit=crop',
    title: 'Хотел Море',
    category: 'Басейни и алеи'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1633633818318-622f6795b8d2?q=80&w=1200&auto=format&fit=crop',
    title: 'Вила Витоша',
    category: 'Ландшафт'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Проектиране',
    description: 'Създаваме 3D модел и избираме правилната рецепта за бетон според натоварването.'
  },
  {
    id: 2,
    number: '02',
    title: 'Вибропресоване',
    description: 'Използваме немска технология за уплътняване на бетона под високо налягане.'
  },
  {
    id: 3,
    number: '03',
    title: 'Обработка',
    description: 'Повърхностна обработка за постигане на желания финиш - мит бетон, шлайфан или гладък.'
  },
  {
    id: 4,
    number: '04',
    title: 'Контрол',
    description: 'Лабораторен тест на всяка партида за якост на натиск и износоустойчивост.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Арх. Иван Петров',
    role: 'Главен Архитект, "Урбан Дизайн"',
    content: 'Декорстил са единствените, които успяха да изпълнят специфичния цвят и текстура, които изисквахме за проекта.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Мария Илиева',
    role: 'Ландшафтен Дизайнер',
    content: 'Качеството на паветата е безупречно. Вече 5 години обектът изглежда като нов, въпреки тежките зимни условия.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  }
];

export const COMPANY_INFO = {
  phone: '+359 888 123 456',
  email: 'office@decorstyle.bg',
  address: 'Индустриална зона, София, България',
  workingHours: 'Пон - Пет: 08:00 - 17:00'
};