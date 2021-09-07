import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue';
import UploadPhoto from './pages/UploadPhoto.vue';

export const routes = [
   { path: '', component: Home },
   { path: '/contact', component: Contact },
   { path: '/upload', component: UploadPhoto },
];