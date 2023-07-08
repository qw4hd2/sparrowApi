const express = require('express');
const {signup,signin} = require('./../controllers/userController')
const {FetchAllUser} = require("./../controllers/admin/user/userFetchAllController");
const profileImage = require('./../middleware/profileImages/profileMulter');
const homeSliderImages = require("./../middleware/homeSliderImages/homeSliderImages"); 
const PopUpImages = require("./../middleware/popUpImages/popUpImages");
const EventImages = require('./../middleware/EventImages/EventImages');
const {UploadSlider,getHomeSliderAll} = require('./../controllers/homeController/homeController');
const {CreatepopUp,getpopUpAll} = require("./../controllers/popUpController/popUpController");
const {CreateEvent,getEventAll,DeleteEvent} = require("./../controllers/EventController/EventController");
const router = express.Router();
const  checkUnique  = require("./../middleware/checkUniqueEntry")
router.post("/auth/signup",checkUnique,profileImage.array('image'),signup);
router.post('/auth/signin', signin);
router.post('/home/slider/upload',homeSliderImages.array('image'),UploadSlider);
router.get('/fetch/homeSlider/allDetails',getHomeSliderAll);
router.post('/create/popUp/post',PopUpImages.array('image'),CreatepopUp);
router.get('/fetch/all/popup',getpopUpAll);
router.post('/event/add/post',EventImages.array('image'),CreateEvent);
router.get('/fetch/All/events',getEventAll);
router.get('/user/All/UserData',FetchAllUser);
router.delete('/event/remover/:id',DeleteEvent);
module.exports=router;