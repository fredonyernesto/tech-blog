const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        if (postData.length > 0) {
            const posts = postData.map(post => post.get({ plain: true }));
            return res.render('homepage', {
                posts,
                logged_in: req.session.logged_in
            });
        } else {
            return res.render('homepage', {
                logged_in: req.session.logged_in
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['name']
                }
            ]
        });

        if (postData.length > 0) {
            const posts = postData.map(post => post.get({ plain: true }));
            return res.render('dashboard', {
                posts,
                logged_in: req.session.logged_in
            });
        } else {
            return res.render('dashboard', {
                logged_in: req.session.logged_in
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
