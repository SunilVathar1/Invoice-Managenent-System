import express from 'express';
import { registerOrganization, loginOrganization } from '../controllers/organizationController';

const router = express.Router();

router.post('/register',registerOrganization);
router.post('/login', loginOrganization);

// gettin this post route to render the ejs file
// router.get('/register', (req, res) => {
//   res.render('OrgRegister.ejs');
// });

// now it will render the login page
// router.get('login', (req, res) => {
//   res.render('OrgLogin.ejs');
// });

export default router;