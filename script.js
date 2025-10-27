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

const showLoading = (duration, callback) => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    if (loading) loading.classList.remove('active');
    callback();
  }, duration);
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
    showLoading(5000, () => {
      const userName = $('user-name');
      if (userName) userName.textContent = username;
      const welcomeName = $('welcome-name');
      if (welcomeName) welcomeName.textContent = username;
      show('dashboard');
    });
  } else {
    if (msg) msg.textContent = 'Incorrect User ID or Password';
  }
});

const btnLogout = $('btn-logout');
if (btnLogout) btnLogout.addEventListener('click', () => {
  showLoading(3000, () => {
    show('login');
    const loginUsername = $('login-username');
    if (loginUsername) loginUsername.value = '';
    const loginPassword = $('login-password');
    if (loginPassword) loginPassword.value = '';
  });
});

// Menu Tap
const menuTap = $('menu-tap');
if (menuTap) menuTap.addEventListener('click', () => showLoading(3000, () => show('menu-screen')));

// Menu Items
const menuAccounts = $('menu-accounts');
if (menuAccounts) menuAccounts.addEventListener('click', () => showLoading(3000, () => show('dashboard')));
const menuTransfer = $('menu-transfer');
if (menuTransfer) menuTransfer.addEventListener('click', () => showLoading(3000, () => show('transfer')));
const menuZelle = $('menu-zelle');
if (menuZelle) menuZelle.addEventListener('click', () => showLoading(3000, () => show('zelle')));
const menuBill = $('menu-bill');
if (menuBill) menuBill.addEventListener('click', () => showLoading(3000, () => show('bills')));
const menuDeposit = $('menu-deposit');
if (menuDeposit) menuDeposit.addEventListener('click', () => showLoading(3000, () => show('deposit')));
const menuInvest = $('menu-invest');
if (menuInvest) menuInvest.addEventListener('click', () => showLoading(3000, () => show('invest')));

// Back from Menu
const backMenu = $('back-menu');
if (backMenu) backMenu.addEventListener('click', () => showLoading(3000, () => show('dashboard')));

// Inbox Tap
const inboxTap = $('inbox-tap');
if (inboxTap) inboxTap.addEventListener('click', () => showLoading(3000, () => show('inbox')));

// Back from Inbox
const backInbox = $('back-inbox');
if (backInbox) backInbox.addEventListener('click', () => showLoading(3000, () => show('dashboard')));

// Bottom Nav
const navTransfer = $('nav-transfer');
if (navTransfer) navTransfer.addEventListener('click', () => showLoading(3000, () => show('transfer')));
const navBill = $('nav-bill');
if (navBill) navBill.addEventListener('click', () => showLoading(3000, () => show('bills')));
const navDeposit = $('nav-deposit');
if (navDeposit) navDeposit.addEventListener('click', () => showLoading(3000, () => show('deposit')));
const navInvest = $('nav-invest');
if (navInvest) navInvest.addEventListener('click', () => showLoading(3000, () => show('invest')));

// Back Buttons
const backZelle = $('back-zelle');
if (backZelle) backZelle.addEventListener('click', () => showLoading(3000, () => show('dashboard')));
const backTransfer = $('back-transfer');
if (backTransfer) backTransfer.addEventListener('click', () => showLoading(3000, () => show('dashboard')));
const backDeposit = $('back-deposit');
if (backDeposit) backDeposit.addEventListener('click', () => showLoading(3000, () => show('dashboard')));
const backBills = $('back-bills');
if (backBills) backBills.addEventListener('click', () => showLoading(3000, () => show('dashboard')));
const backInvest = $('back-invest');
if (backInvest) backInvest.addEventListener('click', () => showLoading(3000, () => show('dashboard')));

// Account Taps
const checkingCard = $('checking-card');
if (checkingCard) checkingCard.addEventListener('click', () => showLoading(3000, () => show('checking-transactions')));
const savingsCard = $('savings-card');
if (savingsCard) savingsCard.addEventListener('click', () => showLoading(3000, () => show('savings-transactions')));

// VIEW Buttons
const viewChecking = $('view-checking');
if (viewChecking) viewChecking.addEventListener('click', () => showLoading(3000, () => show('checking-transactions')));
const viewSavings = $('view-savings');
if (viewSavings) viewSavings.addEventListener('click', () => showLoading(3000, () => show('savings-transactions')));

// Back from Transactions
const backChecking = $('back-checking');
if (backChecking) backChecking.addEventListener('click', () => showLoading(3000, () => show('dashboard')));
const backSavings = $('back-savings');
if (backSavings) backSavings.addEventListener('click', () => showLoading(3000, () => show('dashboard')));
