import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { BlogList } from './features/blog/blog-list/blog-list';
import { BlogDetail } from './features/blog/blog-detail/blog-detail';
import { About } from './features/about/about';
import { NotFound } from './features/not-found/not-found';
import { Privacy } from './features/privacy/privacy';
import { Terms } from './features/terms/terms';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'عدسة - عالم التصوير الفوتوغرافي',
  },
  {
    path: 'blog',
    component: BlogList,
    title: 'المدونة - عدسة',
  },
  {
    path: 'blog/:slug',
    component: BlogDetail,
    title: 'مقال - عدسة',
  },
  {
    path: 'privacy',
    component: Privacy,
    title: 'سياسة الخصوصية - عدسة',
  },
  {
    path: 'terms',
    component: Terms,
    title: 'شروط الخدمة - عدسة',
  },
  {
    path: 'about',
    component: About,
    title: 'من نحن - عدسة',
  },
  {
    path: 'not-found',
    component: NotFound,
    title: 'الصفحة غير موجودة - عدسة',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    title: 'الصفحة غير موجودة - عدسة',
  },
];
