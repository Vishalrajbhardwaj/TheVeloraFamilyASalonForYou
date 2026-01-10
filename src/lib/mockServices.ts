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
  // --- 6. HAIR- CARE (8 Services) ---
  { id: '1', name: 'Eyebrows', description: 'Threading', category: 'HAIR- CARE', price: '30', duration: 15, gender: 'unisex' },
  { id: '2', name: 'Forehead', description: 'Threading', category: 'HAIR- CARE', price: '20', duration: 10, gender: 'unisex' },
  { id: '3', name: 'Upper Lips', description: 'Threading', category: 'HAIR- CARE', price: '20', duration: 10, gender: 'unisex' },
  { id: '4', name: 'Chin', description: 'Threading', category: 'HAIR- CARE', price: '20', duration: 10, gender: 'unisex' },
  { id: '5', name: 'Nose', description: 'Threading', category: 'HAIR- CARE', price: '20', duration: 10, gender: 'unisex' },
  { id: '6', name: 'Lower Lip', description: 'Threading', category: 'HAIR- CARE', price: '40', duration: 10, gender: 'unisex' },
  { id: '7', name: 'Cheeks', description: 'Threading', category: 'HAIR- CARE', price: '40', duration: 15, gender: 'unisex' },
  { id: '8', name: 'Side Lock / Full Face', description: 'Threading', category: 'HAIR- CARE', price: '200', duration: 30, gender: 'unisex' },

  // --- 17. WAXING (Face: 9 Services) ---
  { id: '9', name: 'Upper Lip (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '70', duration: 15, gender: 'unisex' },
  { id: '10', name: 'Forehead (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '80', duration: 15, gender: 'unisex' },
  { id: '11', name: 'Lower Lip (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '70', duration: 15, gender: 'unisex' },
  { id: '12', name: 'Nose (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '80', duration: 15, gender: 'unisex' },
  { id: '13', name: 'Chin (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '100', duration: 15, gender: 'unisex' },
  { id: '14', name: 'Cheeks (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '180', duration: 20, gender: 'unisex' },
  { id: '15', name: 'Side Locks (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '180', duration: 20, gender: 'unisex' },
  { id: '16', name: 'Neck (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '180', duration: 20, gender: 'unisex' },
  { id: '17', name: 'Full Face (Face Wax)', description: 'Brazilian/Cream', category: 'WAXING', price: '400', duration: 45, gender: 'unisex' },

  // --- 17. WAXING (Body: 10 Services) ---
  { id: '18', name: 'Underarms (Body Wax)', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '100 - 200', duration: 15, gender: 'female' },
  { id: '19', name: 'Full Hand (Body Wax)', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '200 - 400', duration: 45, gender: 'female' },
  { id: '20', name: 'Half Legs (Body Wax)', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '200 - 450', duration: 30, gender: 'female' },
  { id: '21', name: 'Full Legs (Body Wax)', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '400 - 850', duration: 60, gender: 'female' },
  { id: '22', name: 'Full Front (Chest) Wax', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '350 - 500', duration: 45, gender: 'female' },
  { id: '23', name: 'Half Front Wax', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '200 - 250', duration: 30, gender: 'female' },
  { id: '24', name: 'Full Back Wax', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '350 - 500', duration: 45, gender: 'female' },
  { id: '25', name: 'Half Back Wax', description: 'Normal/Oil/Rica/Roll-on', category: 'WAXING', price: '200 - 250', duration: 30, gender: 'female' },
  { id: '26', name: 'Bikini Wax', description: 'Premium Wax', category: 'WAXING', price: '1299 - 1699', duration: 60, gender: 'female' },
  { id: '27', name: 'Full Body Wax', description: 'Normal/Oil/Rica', category: 'WAXING', price: '1400 - 2600', duration: 120, gender: 'female' },

  // --- 2. BLEACH (10 Services) ---
  { id: '28', name: 'Face + Neck Bleach', description: null, category: 'BLEACH', price: '350', duration: 30, gender: 'unisex' },
  { id: '29', name: 'Half Hand Bleach', description: null, category: 'BLEACH', price: '350', duration: 20, gender: 'unisex' },
  { id: '30', name: 'Full Hand Bleach', description: null, category: 'BLEACH', price: '400', duration: 30, gender: 'unisex' },
  { id: '31', name: 'Half Front Bleach', description: null, category: 'BLEACH', price: '300', duration: 25, gender: 'unisex' },
  { id: '32', name: 'Full Front Bleach', description: null, category: 'BLEACH', price: '600', duration: 35, gender: 'unisex' },
  { id: '33', name: 'Half Back Bleach', description: null, category: 'BLEACH', price: '300', duration: 25, gender: 'unisex' },
  { id: '34', name: 'Full Back Bleach', description: null, category: 'BLEACH', price: '600', duration: 35, gender: 'unisex' },
  { id: '35', name: 'Half Leg Bleach', description: null, category: 'BLEACH', price: '350', duration: 30, gender: 'unisex' },
  { id: '36', name: 'Full Leg Bleach', description: null, category: 'BLEACH', price: '700', duration: 45, gender: 'unisex' },
  { id: '37', name: 'Full Body Bleach', description: null, category: 'BLEACH', price: '2699', duration: 90, gender: 'unisex' },

  // --- 2. BLEACH (D-TAN Section - 11 Services) ---
  { id: '38', name: 'Face D-Tan', description: null, category: 'BLEACH', price: '400', duration: 20, gender: 'unisex' },
  { id: '39', name: 'Underarm D-Tan', description: null, category: 'BLEACH', price: '200', duration: 15, gender: 'unisex' },
  { id: '40', name: 'Half Hand D-Tan', description: null, category: 'BLEACH', price: '350', duration: 20, gender: 'unisex' },
  { id: '41', name: 'Full Hand D-Tan', description: null, category: 'BLEACH', price: '400', duration: 30, gender: 'unisex' },
  { id: '42', name: 'Half Front D-Tan', description: null, category: 'BLEACH', price: '300', duration: 25, gender: 'unisex' },
  { id: '43', name: 'Full Front D-Tan', description: null, category: 'BLEACH', price: '600', duration: 35, gender: 'unisex' },
  { id: '44', name: 'Half Back D-Tan', description: null, category: 'BLEACH', price: '300', duration: 25, gender: 'unisex' },
  { id: '45', name: 'Full Back D-Tan', description: null, category: 'BLEACH', price: '600', duration: 35, gender: 'unisex' },
  { id: '46', name: 'Half Leg D-Tan', description: null, category: 'BLEACH', price: '350', duration: 30, gender: 'unisex' },
  { id: '47', name: 'Full Leg D-Tan', description: null, category: 'BLEACH', price: '700', duration: 45, gender: 'unisex' },
  { id: '48', name: 'Full Body D-Tan', description: null, category: 'BLEACH', price: '2699', duration: 90, gender: 'unisex' },

  // --- 5. FACIAL (17 Services) ---
  { id: '49', name: 'Fruits Facial (Basic)', description: null, category: 'FACIAL', price: '800', duration: 45, gender: 'unisex' },
  { id: '50', name: 'Silver Facial (Basic)', description: null, category: 'FACIAL', price: '1000', duration: 50, gender: 'unisex' },
  { id: '51', name: 'Gold Facial (Basic)', description: null, category: 'FACIAL', price: '1200', duration: 60, gender: 'unisex' },
  { id: '52', name: 'Diamond Facial (Basic)', description: null, category: 'FACIAL', price: '1300', duration: 60, gender: 'unisex' },
  { id: '53', name: 'Pearl Facial (Basic)', description: null, category: 'FACIAL', price: '1400', duration: 60, gender: 'unisex' },
  { id: '54', name: 'Whitening Facial (Advance)', description: null, category: 'FACIAL', price: '1500', duration: 70, gender: 'unisex' },
  { id: '55', name: 'Sea White Facial', description: null, category: 'FACIAL', price: '1600', duration: 70, gender: 'unisex' },
  { id: '56', name: 'Shine Glow Facial', description: null, category: 'FACIAL', price: '1700', duration: 70, gender: 'unisex' },
  { id: '57', name: 'Power Mask Facial', description: null, category: 'FACIAL', price: '1800', duration: 75, gender: 'unisex' },
  { id: '58', name: 'Bridal Vitamin C Facial', description: null, category: 'FACIAL', price: '1900', duration: 90, gender: 'unisex' },
  { id: '59', name: 'Bridal Radiance Facial', description: null, category: 'FACIAL', price: '2000', duration: 90, gender: 'unisex' },
  { id: '60', name: 'Aqua Facial', description: null, category: 'FACIAL', price: '2300', duration: 80, gender: 'unisex' },
  { id: '61', name: 'Hydra Boost Facial', description: null, category: 'FACIAL', price: '2800', duration: 90, gender: 'unisex' },
  { id: '62', name: 'Corian Glass Facial', description: null, category: 'FACIAL', price: '3000', duration: 90, gender: 'unisex' },
  { id: '63', name: 'Remylaure Brand Facial (Standard)', description: null, category: 'FACIAL', price: '3500', duration: 90, gender: 'unisex' },
  { id: '64', name: 'Remylaure Brand Facial (Premium)', description: null, category: 'FACIAL', price: '5000', duration: 100, gender: 'unisex' },
  { id: '65', name: 'Remylaure Brand Facial (Luxury)', description: null, category: 'FACIAL', price: '8000', duration: 120, gender: 'unisex' },

  // --- 14. MANICURE & PEDICURE (12 Services) ---
  { id: '66', name: 'Basic Pedicure', description: null, category: 'MENICURE & PEDICURE', price: '400', duration: 40, gender: 'unisex' },
  { id: '67', name: 'Spa Pedicure', description: null, category: 'MENICURE & PEDICURE', price: '500', duration: 50, gender: 'unisex' },
  { id: '68', name: 'Crystal Pedicure', description: null, category: 'MENICURE & PEDICURE', price: '600', duration: 50, gender: 'unisex' },
  { id: '69', name: 'Deluxe Pedicure', description: null, category: 'MENICURE & PEDICURE', price: '1200', duration: 60, gender: 'unisex' },
  { id: '70', name: 'Luxury Pedicure', description: null, category: 'MENICURE & PEDICURE', price: '1500', duration: 60, gender: 'unisex' },
  { id: '71', name: 'Velora Special Pedicure', description: null, category: 'MENICURE & PEDICURE', price: '1700', duration: 70, gender: 'unisex' },
  { id: '72', name: 'Basic Manicure', description: null, category: 'MENICURE & PEDICURE', price: '500', duration: 35, gender: 'unisex' },
  { id: '73', name: 'Spa Manicure', description: null, category: 'MENICURE & PEDICURE', price: '700', duration: 45, gender: 'unisex' },
  { id: '74', name: 'Crystal Manicure', description: null, category: 'MENICURE & PEDICURE', price: '800', duration: 45, gender: 'unisex' },
  { id: '75', name: 'Deluxe Manicure', description: null, category: 'MENICURE & PEDICURE', price: '1700', duration: 60, gender: 'unisex' },
  { id: '76', name: 'Luxury Manicure', description: null, category: 'MENICURE & PEDICURE', price: '1800', duration: 60, gender: 'unisex' },
  { id: '77', name: 'Velora Special Manicure', description: null, category: 'MENICURE & PEDICURE', price: '2000', duration: 70, gender: 'unisex' },

  // --- 3. BODY & FACE POLISHING (10 Services) ---
  { id: '78', name: 'Hand / Back / Stomach Polishing', description: null, category: 'BODY & FACE POLISHING', price: '700', duration: 45, gender: 'unisex' },
  { id: '79', name: 'Half Leg Polishing', description: null, category: 'BODY & FACE POLISHING', price: '700', duration: 45, gender: 'unisex' },
  { id: '80', name: 'Full Leg Polishing', description: null, category: 'BODY & FACE POLISHING', price: '1000', duration: 60, gender: 'unisex' },
  { id: '81', name: 'Full Body Polishing', description: null, category: 'BODY & FACE POLISHING', price: '3000+', duration: 120, gender: 'unisex' },
  { id: '82', name: 'Skin Boost (Face Polishing)', description: null, category: 'BODY & FACE POLISHING', price: '2000', duration: 45, gender: 'unisex' },
  { id: '83', name: 'Whitening (Face Polishing)', description: null, category: 'BODY & FACE POLISHING', price: '2500', duration: 50, gender: 'unisex' },
  { id: '84', name: 'Vitamin C (Face Polishing)', description: null, category: 'BODY & FACE POLISHING', price: '3000', duration: 50, gender: 'unisex' },
  { id: '85', name: 'O3+ Diamond (Face Polishing)', description: null, category: 'BODY & FACE POLISHING', price: '3500', duration: 60, gender: 'unisex' },
  { id: '86', name: 'Professional Brightening (Face)', description: null, category: 'BODY & FACE POLISHING', price: '5000', duration: 75, gender: 'unisex' },
  { id: '87', name: 'Premium Face Polishing', description: 'Advanced', category: 'BODY & FACE POLISHING', price: '5000+', duration: 80, gender: 'unisex' },

  // --- 4. CLEAN-UP (5 Services) ---
  { id: '88', name: 'Fruit (Teenagers)', description: null, category: 'CLEAN-UP', price: '500', duration: 30, gender: 'unisex' },
  { id: '89', name: 'Whitening Clean-up', description: null, category: 'CLEAN-UP', price: '900', duration: 40, gender: 'unisex' },
  { id: '90', name: 'Acne Control', description: null, category: 'CLEAN-UP', price: '700', duration: 40, gender: 'unisex' },
  { id: '91', name: 'Under Eye Clean-up', description: null, category: 'CLEAN-UP', price: '700', duration: 30, gender: 'unisex' },
  { id: '92', name: 'Ultra Brightening', description: null, category: 'CLEAN-UP', price: '1000', duration: 45, gender: 'unisex' },

  // --- 16. SHAMPOO (3 Services) ---
  { id: '93', name: 'Hair Wash QOD', description: null, category: 'SHAMPOO', price: '300', duration: 20, gender: 'unisex' },
  { id: '94', name: 'Hair Wash Olaplex', description: null, category: 'SHAMPOO', price: '400', duration: 20, gender: 'unisex' },
  { id: '95', name: 'Hair Wash L’Oréal / Schwarzkopf', description: null, category: 'SHAMPOO', price: '500', duration: 25, gender: 'unisex' },

  // --- 10. HAIR SPA (6 Services) ---
  { id: '96', name: 'Moisturizing Spa', description: null, category: 'HAIR SPA', price: '1500', duration: 60, gender: 'unisex' },
  { id: '97', name: 'Protein Spa', description: null, category: 'HAIR SPA', price: '1600', duration: 60, gender: 'unisex' },
  { id: '98', name: 'Detox Spa', description: null, category: 'HAIR SPA', price: '1800', duration: 60, gender: 'unisex' },
  { id: '99', name: 'Hair Fall Spa', description: null, category: 'HAIR SPA', price: '2000', duration: 60, gender: 'unisex' },
  { id: '100', name: 'Anti Dandruff Spa', description: null, category: 'HAIR SPA', price: '1500', duration: 60, gender: 'unisex' },
  { id: '101', name: 'Korean Hair Spa', description: null, category: 'HAIR SPA', price: '2500', duration: 75, gender: 'unisex' },

  // --- 9. HAIR CUT (Women: 3 / Men: 4 = 7 Services) ---
  { id: '102', name: 'Women Basic Cut', description: null, category: 'HAIR CUT (Women)', price: '300', duration: 30, gender: 'female' },
  { id: '103', name: 'Women U / V Cut', description: null, category: 'HAIR CUT (Women)', price: '250', duration: 30, gender: 'female' },
  { id: '104', name: 'Women Layers', description: null, category: 'HAIR CUT (Women)', price: '400 - 600', duration: 45, gender: 'female' },
  { id: '105', name: 'Men Basic Cut', description: null, category: 'HAIR CUT (Men)', price: '200', duration: 20, gender: 'male' },
  { id: '106', name: 'Men Fade / Pompadour', description: null, category: 'HAIR CUT (Men)', price: '250 - 300', duration: 30, gender: 'male' },
  { id: '107', name: 'Men Advanced Cut', description: null, category: 'HAIR CUT (Men)', price: '350 - 400', duration: 35, gender: 'male' },
  { id: '108', name: 'Kids Hair Cut', description: 'Advanced', category: 'HAIR CUT (Men)', price: '350', duration: 25, gender: 'unisex' },

  // --- 11. HAIR TREATMENTS (6 Services) ---
  { id: '109', name: 'Olaplex Treatment', description: null, category: 'HAIR TREATMENTS', price: '3000+', duration: 120, gender: 'unisex' },
  { id: '110', name: 'Nanoplastia', description: null, category: 'HAIR TREATMENTS', price: '5999+', duration: 180, gender: 'unisex' },
  { id: '111', name: 'Botox Treatment', description: null, category: 'HAIR TREATMENTS', price: '5500+', duration: 150, gender: 'unisex' },
  { id: '112', name: 'Botoplex', description: null, category: 'HAIR TREATMENTS', price: '5999+', duration: 180, gender: 'unisex' },
  { id: '113', name: 'Keratin Treatment', description: null, category: 'HAIR TREATMENTS', price: '5500+', duration: 150, gender: 'unisex' },
  { id: '114', name: 'Rebonding / Smoothening', description: null, category: 'HAIR TREATMENTS', price: '4500+', duration: 200, gender: 'unisex' },

  // --- 7. HAIR COLOR (4 Services) ---
  { id: '115', name: 'Root Touch Up', description: null, category: 'HAIR COLOR', price: '800+', duration: 60, gender: 'unisex' },
  { id: '116', name: 'Global Color', description: null, category: 'HAIR COLOR', price: '3000+', duration: 120, gender: 'unisex' },
  { id: '117', name: 'Balayage', description: null, category: 'HAIR COLOR', price: '5500+', duration: 180, gender: 'unisex' },
  { id: '118', name: 'Highlights', description: 'Per strip', category: 'HAIR COLOR', price: '400', duration: 15, gender: 'unisex' },

  // --- 15. NAIL ART (6 Services) ---
  { id: '119', name: 'Basic Nail Art', description: 'Per finger', category: 'NAIL ART', price: '20 - 60', duration: 10, gender: 'female' },
  { id: '120', name: 'Glitter / Chrome / Marble', description: 'Art', category: 'NAIL ART', price: '60 - 120', duration: 15, gender: 'female' },
  { id: '121', name: '3D / Jewellery Art', description: 'Art', category: 'NAIL ART', price: '90 - 120', duration: 20, gender: 'female' },
  { id: '122', name: 'Gel Extensions', description: null, category: 'NAIL ART', price: '1599', duration: 90, gender: 'female' },
  { id: '123', name: 'Acrylic Extensions', description: null, category: 'NAIL ART', price: '2199', duration: 100, gender: 'female' },
  { id: '124', name: 'Nail Removal', description: null, category: 'NAIL ART', price: '499', duration: 30, gender: 'female' },

  // --- 13. MAKEUP & 12. HAIR STYLE (5 Services) ---
  { id: '125', name: 'Basic Makeup', description: null, category: 'MAKEUP', price: '8999', duration: 90, gender: 'female' },
  { id: '126', name: 'HD Makeup', description: null, category: 'MAKEUP', price: '17999', duration: 120, gender: 'female' },
  { id: '127', name: 'Bridal Makeup', description: null, category: 'MAKEUP', price: '24999+', duration: 180, gender: 'female' },
  { id: '128', name: 'Hair Style', description: null, category: 'Hair Style', price: '499 - 1499', duration: 45, gender: 'female' },
  { id: '129', name: 'Saree / Dupatta Draping', description: null, category: 'MAKEUP', price: '250 / 100', duration: 20, gender: 'female' }
];