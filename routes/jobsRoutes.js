import express from 'express';
const router = express.Router();
import testUser from '../middleware/testUser.js'



import { createJob,deleteJob,updateJob,showStats,getAllJob } from '../controllers/jobsController.js';

router.route('/').post(testUser,createJob).get(getAllJob);
//remember id
router.route('/stats').get(showStats)
router.route('/:id').delete(testUser,deleteJob).patch(testUser,updateJob)


export default router;