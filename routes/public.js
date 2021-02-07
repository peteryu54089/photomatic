'use strict'

const Router = require('koa-router');
const index = require('../controllers/index');
const db = require('../controllers/db');
const classic = require('../controllers/classic');
const darkroom = require('../controllers/darkroom');
const plus = require('../controllers/plus');
const photobooth = require('../controllers/photobooth');

const router = new Router();

router.get('/', index);
router.get('/db', db);
router.get('/classic-black', classic.black);
router.get('/classic-price', classic.price);
router.get('/classic-photobooth', classic.photobooth);
router.get('/darkroom-film', darkroom.film);
router.get('/darkroom-class', darkroom.class);
router.get('/darkroom-lab', darkroom.lab);
router.get('/darkroom-price', darkroom.price);
router.get('/darkroom-photobooth', darkroom.photobooth);
router.get('/plus-color', plus.color);
router.get('/plus-profile', plus.profile);
router.get('/plus-film', plus.film);
router.get('/plus-price', plus.price);
router.get('/plus-photobooth', plus.photobooth);
router.get('/photobooth-about', photobooth.about);

module.exports = router;

