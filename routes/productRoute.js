const express = require("express");
const router = express.Router()

// get all product
router.get("/products", (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "iPhone 15",
            productPrice: "$1300",
        },

        {
            productName: "iPhone 14",
            productPrice: "$1200",
        },

        {
            productName: "iPhone 13",
            productPrice: "$1100",
        }
    ])
})

// to get a single product
router.get("/products/:id", (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "iPhone 15",
            productPrice: "$1300",
        }
    ])
})

// to create a product
router.post("/products", (req, res) => {
    res.status(200)
    res.json({
        message: "product added successfully"
    })
})

// to update a product
router.put("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message: "product have been updates sucessfully"
    })
})

// to delete a product
router.delete("/products/:id", (req, res) => {
    res.status(200)
    res.json({
        message: "product have been deleted successfully"
    })
})



module.exports = router