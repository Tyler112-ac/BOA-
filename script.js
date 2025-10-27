const USERS = {
  'Dolly': 'tylerluvdolly112',
  'Dianne': 'tylerluvdianne112',
  'Zera': 'tylerluvzera112'
};

const $ = id => document.getElementById(id);
const show = id => {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = $(id);
  if (target) target.classList.add('active');
};

let pwdVisible = false;
const togglePwd = $('toggle-pwd');
if (togglePwd) togglePwd.addEventListener('click', () => {
  pwdVisible = !pwdVisible;
  const input = $('login-password');
  if (input) input.type = pwdVisible ? 'text' : 'password';
  togglePwd.classList.toggle('off', !pwdVisible);
});

const btnLogin = $('btn-login');
if (btnLogin) btnLogin.addEventListener('click', () => {
  const username = $('login-username') ? $('login-username').value.trim() : '';
  const password = $('login-password') ? $('login-password').value : '';
  const msg = $('login-msg');
  if (msg) msg.textContent = '';

  if (USERS[username] && USERS[username] === password) {
    const userName = $('user-name');
    if (userName) userName.textContent = username;
    const welcomeName = $('welcome-name');
    if (welcomeName) welcomeName.textContent = username;
    show('dashboard');
  } else {
    if (msg) msg.textContent = 'Incorrect User ID or Password';
  }
});

const btnLogout = $('btn-logout');
if (btnLogout) btnLogout.addEventListener('click', () => {
  show('login');
  const loginUsername = $('login-username');
  if (loginUsername) loginUsername.value = '';
  const loginPassword = $('login-password');
  if (loginPassword) loginPassword.value = '';
});

// Menu Tap
const menuTap = $('menu-tap');
if (menuTap) menuTap.addEventListener('click', () => show('menu-screen'));

// Menu Items
const menuAccounts = $('menu-accounts');
if (menuAccounts) menuAccounts.addEventListener('click', () => show('dashboard'));
const menuTransfer = $('menu-transfer');
if (menuTransfer) menuTransfer.addEventListener('click', () => show('transfer'));
const menuZelle = $('menu-zelle');
if (menuZelle) menuZelle.addEventListener('click', () => show('zelle'));
const menuBill = $('menu-bill');
if (menuBill) menuBill.addEventListener('click', () => show('bills'));
const menuDeposit = $('menu-deposit');
if (menuDeposit) menuDeposit.addEventListener('click', () => show('deposit'));
const menuInvest = $('menu-invest');
if (menuInvest) menuInvest.addEventListener('click', () => show('invest'));

// Back from Menu
const backMenu = $('back-menu');
if (backMenu) backMenu.addEventListener('click', () => show('dashboard'));

// Inbox Tap
const inboxTap = $('inbox-tap');
if (inboxTap) inboxTap.addEventListener('click', () => show('inbox'));

// Back from Inbox
const backInbox = $('back-inbox');
if (backInbox) backInbox.addEventListener('click', () => show('dashboard'));

// Bottom Nav
const navTransfer = $('nav-transfer');
if (navTransfer) navTransfer.addEventListener('click', () => show('transfer'));
const navBill = $('nav-bill');
if (navBill) navBill.addEventListener('click', () => show('bills'));
const navDeposit = $('nav-deposit');
if (navDeposit) navDeposit.addEventListener('click', () => show('deposit'));
const navInvest = $('nav-invest');
if (navInvest) navInvest.addEventListener('click', () => show('invest'));

// Back Buttons
const backZelle = $('back-zelle');
if (backZelle) backZelle.addEventListener('click', () => show('dashboard'));
const backTransfer = $('back-transfer');
if (backTransfer) backTransfer.addEventListener('click', () => show('dashboard'));
const backDeposit = $('back-deposit');
if (backDeposit) backDeposit.addEventListener('click', () => show('dashboard'));
const backBills = $('back-bills');
if (backBills) backBills.addEventListener('click', () => show('dashboard'));
const backInvest = $('back-invest');
if (backInvest) backInvest.addEventListener('click', () => show('dashboard'));

// Account Taps
const checkingCard = $('checking-card');
if (checkingCard) checkingCard.addEventListener('click', () => show('checking-transactions'));
const savingsCard = $('savings-card');
if (savingsCard) savingsCard.addEventListener('click', () => show('savings-transactions'));

// Back from Transactions
const backChecking = $('back-checking');
if (backChecking) backChecking.addEventListener('click', () => show('dashboard'));
const backSavings = $('back-savings');
if (backSavings) backSavings.addEventListener('click', () => show('dashboard'));