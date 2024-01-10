import {Router} from "express";
import {sendemailuser} from '../controllers/email.controllers.js'
const emailRouter=Router()

emailRouter.route('/').post(sendemailuser)

export default emailRouter