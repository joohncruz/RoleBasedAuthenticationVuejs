const Admin = () => System.import('./components/admin/admin.vue');
const Resident = () => System.import('./components/resident/resident.vue');
const Login = () => System.import('./components/login/login.vue');

import Hello from './components/Hello.vue';

export const routes = [
    { 
        path: '', 
        name: 'hello', 
        component: Hello, 
        titulo: 'Hello'
    },
    { 
        path: '/login', 
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
        component: Hello
    }
];