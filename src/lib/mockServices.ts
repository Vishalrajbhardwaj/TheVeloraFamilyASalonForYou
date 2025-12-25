export interface Service {
  id: string;
  name: string;
  description: string | null;
  category: string;
  price: string;
  duration: number;
  gender: string;
}

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Eyebrows Threading',
    description: 'Precision eyebrow shaping using twisted cotton thread',
    category: 'grooming',
    price: '30/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '2',
    name: 'Upper Lips Threading',
    description: 'Upper lip hair removal using threading technique',
    category: 'grooming',
    price: '20/-',
    duration: 10,
    gender: 'unisex'
  },
  {
    id: '3',
    name: 'Forehead Threading',
    description: 'Forehead hair removal using threading',
    category: 'grooming',
    price: '20/-',
    duration: 10,
    gender: 'unisex'
  },
  {
    id: '4',
    name: 'Chin Threading',
    description: 'Chin hair removal using threading',
    category: 'grooming',
    price: '20/-',
    duration: 10,
    gender: 'unisex'
  },
  {
    id: '5',
    name: 'Nose Threading',
    description: 'Nose hair removal using threading',
    category: 'grooming',
    price: '20/-',
    duration: 10,
    gender: 'unisex'
  },
  {
    id: '6',
    name: 'Lower Lip Threading',
    description: 'Lower lip hair removal using threading',
    category: 'grooming',
    price: '40/-',
    duration: 10,
    gender: 'unisex'
  },
  {
    id: '7',
    name: 'Cheeks Threading',
    description: 'Cheek hair removal using threading',
    category: 'grooming',
    price: '40/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '8',
    name: 'Side Locks Threading',
    description: 'Side locks hair removal using threading',
    category: 'grooming',
    price: '200/-',
    duration: 20,
    gender: 'unisex'
  },
  {
    id: '9',
    name: 'Face Threading',
    description: 'Complete face threading service',
    category: 'grooming',
    price: '30/-',
    duration: 30,
    gender: 'unisex'
  },
  {
    id: '10',
    name: 'Upper Lip Waxing',
    description: 'Upper lip hair removal using wax',
    category: 'grooming',
    price: '70/- 350/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '11',
    name: 'Forehead Waxing',
    description: 'Forehead hair removal using wax',
    category: 'grooming',
    price: '80/- 400/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '12',
    name: 'Lower Lip Waxing',
    description: 'Lower lip hair removal using wax',
    category: 'grooming',
    price: '70/- 350/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '13',
    name: 'Nose Waxing',
    description: 'Nose hair removal using wax',
    category: 'grooming',
    price: '80/- 450/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '14',
    name: 'Chin Waxing',
    description: 'Chin hair removal using wax',
    category: 'grooming',
    price: '100/- 500/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '15',
    name: 'Cheeks Waxing',
    description: 'Cheek hair removal using wax',
    category: 'grooming',
    price: '180/- 900/-',
    duration: 20,
    gender: 'unisex'
  },
  {
    id: '16',
    name: 'Side Locks Waxing',
    description: 'Side locks hair removal using wax',
    category: 'grooming',
    price: '180/- 900/-',
    duration: 20,
    gender: 'unisex'
  },
  {
    id: '17',
    name: 'Neck Waxing',
    description: 'Neck hair removal using wax',
    category: 'grooming',
    price: '180/- 900/-',
    duration: 20,
    gender: 'unisex'
  },
  {
    id: '18',
    name: 'Full Face Waxing',
    description: 'Complete face waxing service',
    category: 'grooming',
    price: '400/- 2000/-',
    duration: 45,
    gender: 'unisex'
  },
  {
    id: '19',
    name: 'Full Hand Waxing',
    description: 'Full hand hair removal using wax',
    category: 'grooming',
    price: '200/- 400/-',
    duration: 30,
    gender: 'unisex'
  },
  {
    id: '20',
    name: 'Underarms Waxing',
    description: 'Underarms hair removal using wax',
    category: 'grooming',
    price: '100/- 170/-',
    duration: 15,
    gender: 'unisex'
  },
  {
    id: '21',
    name: 'Half Legs Waxing',
    description: 'Half legs hair removal using wax',
    category: 'grooming',
    price: '200/- 450/-',
    duration: 30,
    gender: 'unisex'
  },
  {
    id: '22',
    name: 'Full Legs Waxing',
    description: 'Full legs hair removal using wax',
    category: 'grooming',
    price: '400/- 800/-',
    duration: 60,
    gender: 'unisex'
  },
  {
    id: '23',
    name: 'Full Front Waxing',
    description: 'Full front body hair removal using wax',
    category: 'grooming',
    price: '350/- 450/-',
    duration: 45,
    gender: 'unisex'
  },
  {
    id: '24',
    name: 'Half Front Waxing',
    description: 'Half front body hair removal using wax',
    category: 'grooming',
    price: '200/- 200/-',
    duration: 30,
    gender: 'unisex'
  },
  {
    id: '25',
    name: 'Half Back Waxing',
    description: 'Half back body hair removal using wax',
    category: 'grooming',
    price: '350/- 450/-',
    duration: 45,
    gender: 'unisex'
  },
  {
    id: '26',
    name: 'Full Back Waxing',
    description: 'Full back body hair removal using wax',
    category: 'grooming',
    price: '200/- 200/-',
    duration: 30,
    gender: 'unisex'
  },
  {
    id: '27',
    name: 'Bikini Waxing',
    description: 'Bikini area hair removal using wax',
    category: 'grooming',
    price: '1299/- 1699/-',
    duration: 45,
    gender: 'unisex'
  },
  {
    id: '28',
    name: 'Full Body Waxing',
    description: 'Full body hair removal using wax',
    category: 'grooming',
    price: '1999/- 2499/-',
    duration: 90,
    gender: 'unisex'
  }
];

export default mockServices;
