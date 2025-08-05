const model = require('../models/authModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arptripathi15@gmail.com',
    pass: 'ubfpurihdtlmbron'
  }
});

exports.getAllUsers = async (req, res) => {
  const users = await model.getAllUsers();
  const safeUsers = users.map(({ password, ...rest }) => rest);
  res.json({ statusCode: 200, message: "Users fetched successfully", data: safeUsers });
};

exports.getUserById = async (req, res) => {
  const user = await model.getUserById(parseInt(req.params.id));
  if (user) {
    const { password, ...userWithoutPassword } = user;
    res.json({ statusCode: 200, message: "User found", data: userWithoutPassword });
  } else {
    res.status(404).json({ statusCode: 404, message: "User not found", data: null });
  }
};

exports.register = async (req, res) => {
  const { name, email, password, phonenumber } = req.body;
  if (!name || !email || !password || !phonenumber) {
    return res.status(400).json({ statusCode: 400, message: "All fields are required", data: null });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const existing = await model.findByEmail(normalizedEmail);
  if (existing) {
    return res.status(409).json({ statusCode: 409, message: "Email already registered", data: null });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = await model.createUser({ name, email: normalizedEmail, password: hashedPassword, phonenumber });
  const { password: _, ...userWithoutPassword } = newUser;

  res.status(201).json({ statusCode: 201, message: "User signed up successfully", data: userWithoutPassword });
};

exports.updateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const updated = await model.updateUser(id, req.body);
  if (updated) {
    const { password, ...safeUser } = updated;
    res.json({ statusCode: 200, message: "User updated successfully", data: safeUser });
  } else {
    res.status(404).json({ statusCode: 404, message: "User not found", data: null });
  }
};

exports.deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = await model.deleteUser(id);
  if (deleted) {
    res.json({ statusCode: 200, message: "User deleted successfully", data: null });
  } else {
    res.status(404).json({ statusCode: 404, message: "User not found", data: null });
  }
};

exports.login = async (req, res) => {
  const email = req.body.email?.toLowerCase().trim();
  const { password } = req.body;
  const user = await model.findByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ statusCode: 401, message: "Invalid email or password", data: null });
  }

  const { password: _, ...userWithoutPassword } = user;
  res.json({ statusCode: 200, message: "Login successful", data: userWithoutPassword });
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ statusCode: 400, message: "Email is required", data: null });
    }

    const sanitizedEmail = email.trim().toLowerCase();
    const user = await model.findByEmail(sanitizedEmail);

    if (!user) {
      return res.status(404).json({ statusCode: 404, message: "User not found", data: null });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + 3600000; // 1 hour

    await model.setResetToken(sanitizedEmail, token, expires);

    const resetLink = `http://localhost:3000/reset/${token}`; // React frontend route

    await transporter.sendMail({
      from: 'your@gmail.com',
      to: sanitizedEmail,
      subject: 'Password Reset Request',
      html: `<p>You requested a password reset.</p><p><a href="${resetLink}">Click here to reset your password</a></p>`
    });

    res.status(200).json({
      statusCode: 200,
      message: 'Password reset link sent to email',
      data: null
    });

  } catch (err) {
    console.error("Error in forgotPassword:", err);
    res.status(500).json({ statusCode: 500, message: "Internal server error", data: null });
  }
};

exports.resetPasswordWithToken = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ statusCode: 400, message: "Password is required", data: null });
    }

    const user = await model.findByResetToken(token);

    if (!user) {
      return res.status(400).json({ statusCode: 400, message: "Invalid or expired token", data: null });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await model.updateUser(user.id, { password: hashedPassword });
    await model.clearResetToken(user.id);

    res.status(200).json({
      statusCode: 200,
      message: "Password reset successfully",
      data: null
    });

  } catch (err) {
    console.error("Error in resetPassword:", err);
    res.status(500).json({ statusCode: 500, message: "Internal server error", data: null });
  }
};


