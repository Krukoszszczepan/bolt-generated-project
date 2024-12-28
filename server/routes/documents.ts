import express from 'express';
    import multer from 'multer';

    const upload = multer({ dest: 'uploads/' });
    const router = express.Router();

    // Upload document
    router.post('/', upload.single('file'), (req, res) => {
      // Implementation here
    });

    export const documentsRouter = router;
