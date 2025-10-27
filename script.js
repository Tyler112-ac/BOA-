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
    const loading = $('loading');
    if (loading) loading.classList.add('active');
    setTimeout(() => {
      const userName = $('user-name');
      if (userName) userName.textContent = username;
      const welcomeName = $('welcome-name');
      if (welcomeName) welcomeName.textContent = username;
      show('dashboard');
      if (loading) loading.classList.remove('active');
    }, 5000); // 5 seconds for login
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
if (menuTap) menuTap.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('menu-screen');
    if (loading) loading.classList.remove('active');
  }, 3000); // 3 seconds
});

// Menu Items
const menuAccounts = $('menu-accounts');
if (menuAccounts) menuAccounts.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const menuTransfer = $('menu-transfer');
if (menuTransfer) menuTransfer.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('transfer');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const menuZelle = $('menu-zelle');
if (menuZelle) menuZelle.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('zelle');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const menuBill = $('menu-bill');
if (menuBill) menuBill.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('bills');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const menuDeposit = $('menu-deposit');
if (menuDeposit) menuDeposit.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('deposit');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const menuInvest = $('menu-invest');
if (menuInvest) menuInvest.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('invest');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// Back from Menu
const backMenu = $('back-menu');
if (backMenu) backMenu.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// Inbox Tap
const inboxTap = $('inbox-tap');
if (inboxTap) inboxTap.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('inbox');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// Back from Inbox
const backInbox = $('back-inbox');
if (backInbox) backInbox.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// Bottom Nav
const navTransfer = $('nav-transfer');
if (navTransfer) navTransfer.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('transfer');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const navBill = $('nav-bill');
if (navBill) navBill.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('bills');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const navDeposit = $('nav-deposit');
if (navDeposit) navDeposit.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('deposit');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const navInvest = $('nav-invest');
if (navInvest) navInvest.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('invest');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// Back Buttons
const backZelle = $('back-zelle');
if (backZelle) backZelle.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const backTransfer = $('back-transfer');
if (backTransfer) backTransfer.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const backDeposit = $('back-deposit');
if (backDeposit) backDeposit.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const backBills = $('back-bills');
if (backBills) backBills.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const backInvest = $('back-invest');
if (backInvest) backInvest.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// Account Taps
const checkingCard = $('checking-card');
if (checkingCard) checkingCard.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('checking-transactions');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const savingsCard = $('savings-card');
if (savingsCard) savingsCard.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('savings-transactions');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// View Buttons
const viewChecking = $('view-checking');
if (viewChecking) viewChecking.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('checking-transactions');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const viewSavings = $('view-savings');
if (viewSavings) viewSavings.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('savings-transactions');
    if (loading) loading.classList.remove('active');
  }, 3000);
});

// Back from Transactions
const backChecking = $('back-checking');
if (backChecking) backChecking.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
const backSavings = $('back-savings');
if (backSavings) backSavings.addEventListener('click', () => {
  const loading = $('loading');
  if (loading) loading.classList.add('active');
  setTimeout(() => {
    show('dashboard');
    if (loading) loading.classList.remove('active');
  }, 3000);
});
