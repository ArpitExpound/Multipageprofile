const fs = require('fs').promises;
const path = require('path');
const userFile = path.join(__dirname, '../users.json');

async function readUsers() {
  try {
    const data = await fs.readFile(userFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeUsers(users) {
  await fs.writeFile(userFile, JSON.stringify(users, null, 2));
}

exports.getAllUsers = readUsers;

exports.getUserById = async (id) => {
  const users = await readUsers();
  return users.find(u => u.id === id);
};

exports.createUser = async (user) => {
  const users = await readUsers();
  const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = { id, ...user };
  users.push(newUser);
  await writeUsers(users);
  return newUser;
};

exports.updateUser = async (id, updates) => {
  const users = await readUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...updates };
  await writeUsers(users);
  return users[index];
};

exports.deleteUser = async (id) => {
  const users = await readUsers();
  const newUsers = users.filter(u => u.id !== id);
  if (users.length === newUsers.length) return false;
  await writeUsers(newUsers);
  return true;
};


exports.findByEmail = async (email) => {
  const users = await readUsers();
  return users.find(u => u.email.toLowerCase().trim() === email.toLowerCase().trim());
};

exports.setResetToken = async (email, token, expires) => {
  const users = await readUsers();
  const index = users.findIndex(u => u.email.toLowerCase().trim() === email.toLowerCase().trim());
  if (index === -1) return false;
  users[index].resetToken = token;
  users[index].tokenExpiry = expires;
  await writeUsers(users);
  return true;
};

exports.findByResetToken = async (token) => {
  const users = await readUsers();
  return users.find(u => u.resetToken === token && Date.now() < u.tokenExpiry);
};

exports.clearResetToken = async (id) => {
  const users = await readUsers();
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return false;
  delete users[index].resetToken;
  delete users[index].tokenExpiry;
  await writeUsers(users);
  return true;
};

