import {renderTab, initTabRenderer} from '../tabRenderer.js';
import {setActiveTab, initSidebar} from '../TabNavigator.js';

const LAST_TAB_KEY = 'neuro_last_tab';

function currentTab() {
  return location.hash.replace('#/', '') ||
    localStorage.getItem(LAST_TAB_KEY) || 'home.boot';
}

export function initRouter() {
  initTabRenderer();
  initSidebar(id => navigate(id));
  window.addEventListener('hashchange', () => navigate(currentTab(), false));
  navigate(currentTab(), false);
}

export function navigate(id, updateHash = true) {
  if (updateHash) location.hash = `/#/${id}`;
  localStorage.setItem(LAST_TAB_KEY, id);
  renderTab(id);
  setActiveTab(id);
}

document.addEventListener('DOMContentLoaded', initRouter);
