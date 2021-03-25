import './style/main.scss';
import MainView from './components/views/mainView';
import WalletView from './components/views/walletView';

window.addEventListener('DOMContentLoaded', async () => {
  const targetEl = document.querySelector('#root');
  const mainView = new MainView();
  const walletView = new WalletView();
  const mainViewHTML = await mainView.init();
  targetEl.innerHTML += `
    ${mainViewHTML}
  `;

  walletView.addEvent();
});
