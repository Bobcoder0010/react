import express from 'express';
import { post} from '../controllers/post.js';

const router = express.Router();

router.post("/post", post);
export default router;

