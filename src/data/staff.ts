export interface Staff {
  id: string;
  name: string;
  specialization: string | null;
}

const STAFF_LIST: Staff[] = [
  { id: 'st1', name: 'ANJALI', specialization: 'Beautician , Hair & MakeUp Artist' },
  { id: 'st2', name: 'Hemant', specialization: 'UNisex Hair Artist' },
  { id: 'st3', name: 'SHIVANGI', specialization: 'Hair, Beauty , MakeUp & Nail' },
  { id: 'st4', name: 'VARSHA', specialization: 'Beautician , Hair & MakeUp Artist' },
];

export const fetchStaff = async (): Promise<Staff[]> => {
  // simulate async fetch
  await new Promise((r) => setTimeout(r, 200));
  return STAFF_LIST;
};

export default STAFF_LIST;
