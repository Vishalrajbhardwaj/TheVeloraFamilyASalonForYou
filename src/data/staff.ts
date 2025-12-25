export interface Staff {
  id: string;
  name: string;
  specialization: string | null;
}

const STAFF_LIST: Staff[] = [
  { id: 'st1', name: 'Asha', specialization: 'Hair' },
  { id: 'st2', name: 'Ravi', specialization: 'Grooming' },
  { id: 'st3', name: 'SHIVANGI', specialization: 'Makeup' },
  { id: 'st4', name: 'HEMANT', specialization: 'Styling' },
];

export const fetchStaff = async (): Promise<Staff[]> => {
  // simulate async fetch
  await new Promise((r) => setTimeout(r, 200));
  return STAFF_LIST;
};

export default STAFF_LIST;