export interface Staff {
  id: string;
  name: string;
  specialization: string | null;
  photo?: string;
}

const STAFF_LIST: Staff[] = [
  { id: 'st1', name: 'SHIVANGI', specialization: 'Hair, Beauty , MakeUp & Nail', photo: '/TheVeloraFamilyASalonForYou/gallery/sia.jpeg' },
  { id: 'st2', name: 'Hemant Mahobiya', specialization: '8 year experience Unisex Hair Artist', photo: '/TheVeloraFamilyASalonForYou/gallery/hemant.jpeg' },
  { id: 'st3', name: 'Anjali Pasi', specialization: '5 year experience Makeup Artist & Beautician', photo: '/TheVeloraFamilyASalonForYou/gallery/anjali.jpeg' },
  { id: 'st4', name: 'Varsha Barmaiya', specialization: '7 year experience Beautician', photo: '/TheVeloraFamilyASalonForYou/gallery/vandana.jpeg' },
  { id: 'st5', name: 'Dipanshu Sen', specialization: '5 year experience Unisex Hair Artist', photo: '/TheVeloraFamilyASalonForYou/gallery/dipanshu.jpeg' },

];


export const fetchStaff = async (): Promise<Staff[]> => {
  // simulate async fetch
  await new Promise((r) => setTimeout(r, 200));
  return STAFF_LIST;
};

export default STAFF_LIST;
