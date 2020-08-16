import HomePage from './pages/home/index';
import HotDieForgingPage from './pages/HotDieForgingPage/index';
import MechanicalProcessingPage from './pages/MechanicalProcessingPage/index';
import SamplesPage from './pages/SamplesPage/index';
import ContactsPage from './pages/ContactsPage/index';

const URLs = [
  { path: '/', name: 'Главная', component: HomePage },
  { path: '/hot-die-forging', name: 'Горячая объемная штамповка', component: HotDieForgingPage },
  { path: '/mechanical-processing', name: 'Механическая обработка', component: MechanicalProcessingPage },
  { path: '/samples', name: 'Образцы изделий', component: SamplesPage },
  { path: '/contacts', name: 'Контакты', component: ContactsPage },
]

export default URLs;