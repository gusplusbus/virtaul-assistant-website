import { virtualTeacher} from './components/virtual-teacher';
import {codeEditor }from './components/code-editor';
import menu from './components/menu';
import sidebar from './components/sidebar';
import './styles/tailwind.css';
import './styles/menu.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {openModal} from './components/open-model'

menu();
sidebar();
virtualTeacher();
codeEditor();
openModal();