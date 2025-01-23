import { Router } from 'express';


const router = new Router();

let food = [
    { name: "Hamburguesa", price: "100" },
    { name: "Banana", price: "40" },
    { name: "Soda", price: "20" },
    { name: "Ensalada", price: "20" },
    { name: "Pizza", price: "20" }
];

const userMock = {
    name: "Hilda",
    last_name: "Martinez",
    role: 'user'
}

router.get('/food', (req, res) => {

    const data = {
        user: userMock,
        food: food,
        isAdmin: userMock.role === 'admin' // retorna un boolean
    }

    return res.render('food', data)
})




export default router;