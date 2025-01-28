import express from 'express'

const router = express.Router()



router.get('/ping', (req, res) => {
    res.json({ message: 'Pong!' });
})

router.get("/message", (req, res) => {
    res.render("messages", {});
});


export default router;