import './style/main.scss';
import MainView from './components/views/mainView';
import WalletView from './components/views/walletView';

window.addEventListener('DOMContentLoaded', async () => {
  const targetEl = document.querySelector('#root');
  const mainView = new MainView();
  const mainViewHTML = await mainView.init();
  targetEl.innerHTML += `
    ${mainViewHTML}
  `;

  mainView.walletView.addEvent();
});
