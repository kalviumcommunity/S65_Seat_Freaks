const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();


router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Signup failed", details: error.message });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, "secret", { expiresIn: "7d" });
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Login failed", details: error.message });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-passwordHash");
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: "User not found" });
    }
});

module.exports = router;