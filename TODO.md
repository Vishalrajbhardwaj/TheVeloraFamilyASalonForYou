# Role-Based Dashboard Implementation

## Tasks
- [ ] Modify AuthPage.tsx to redirect all logged-in users to 'admin' dashboard
- [ ] Update AdminDashboard.tsx to implement role-based access control:
  - Admin: full access (all bookings, user management)
  - Manager: bookings management, manage staff/users, add services/photos/reviews, update user roles to staff/manager
  - Staff: only assigned bookings, can update status
  - User: only own bookings, view-only
- [ ] Update Navbar.tsx to show role-appropriate navigation (hide admin features for lower roles)
- [ ] Test role-based redirects and access control
