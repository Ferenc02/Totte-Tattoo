import express from 'express';
import multer from 'multer';


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, process.env.MEDIA_DIR);
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '-' + file.originalname);
	}
});

export const upload = multer({ storage });