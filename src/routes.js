const Admin = () => System.import('./components/admin/admin.vue');
const Resident = () => System.import('./components/resident/resident.vue');
const Login = () => System.import('./components/login/login.vue');

export const routes = [
    { 
        path: '', 
        name: 'login', 
        component: Login, 
        titulo: 'Login'
    },
    { 
        path: '/admin', 
        name: 'admin', 
        component: Admin, 
        titulo: 'Administrator',
        meta: { 
            requiresAuth: true,
            adminAuth: true,
            residentAuth: false
        }
    },
    { 
        path: '/resident', 
        name: 'resident', 
        component: Resident, 
        titulo: 'Resident',
        meta: { 
            requiresAuth: true,
            adminAuth: false,
            residentAuth: true
        }
    },
    { 
        path: '*', 
        component: Login
    }
];

export const authenticationRule = (to, from, next) => {

  if(to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('lbUser'))

    if(!authUser || !authUser.username) {
      next({name: 'login'})
    }
    else if(to.meta.adminAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if(authUser.role == 'admin') {
        next()
      }else {
        next('/resident')
      }            
    } else if (to.meta.residentAuth) {
      const authUser = JSON.parse(window.localStorage.getItem('lbUser'))
      if(authUser.role == 'resident') {
        next()
      } else {
        next('/admin')
      }
    }
  } else {
    next();
  } 
};