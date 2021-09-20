const express=require('express');
const cors = require('cors');
const pool = require('./db');

//LOCALHOST CONFIGURANTION
const app=express();
app.use(cors());
app.use(express.json());
app.listen(5555,()=>{
    console.log('Servidor Rodando na porta 5555');
});

//ROUTES

//------ PRODUCTS ------ 

//create product
app.post('/createProduct', async(req,res)=>{
    try{
        const data = req.body;
        const name = data.product_name;
        const type = data.product_type;
        const desc = data.product_description;
        const price = data.product_price;
        const stock = data.product_stock;
        const producer = data.product_producer;
        const newProduct = await pool.query(
            "INSERT INTO product (product_name, product_type, product_description, product_price, product_stock, product_producer) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
             [name, type, desc, price, stock, producer] 
            );
        res.json(newProduct.rows[0]);
    }catch(error){
        console.log(error);
    }
})

//list all products
app.get('/listAllProducts/:producer', async(req,res)=>{
    try{
        const { producer } = req.params;
        console.log(producer);
        const allProducts = await pool.query("SELECT * FROM product WHERE product_producer=$1", [producer]);
        console.log(allProducts.rows[0]);
        res.json(allProducts.rows[0]);
    }catch(error){
        console.log(error);
    }
})


//---------- PRODUCER ----------

//create new producer
app.post('/createProducer', async(req,res)=>{
    try{
        const data = req.body;
        const name = data.producer_name;
        const email = data.producer_email;
        const cpf = data.producer_cpf;
        const phone = data.producer_phone;
        const address = data.producer_address;
        const newProducer = await pool.query(
            "INSERT INTO producer (producer_name,producer_email, producer_cpf, producer_phone, producer_address) VALUES ($1, $2, $3, $4, $5) RETURNING *",
             [name, email, cpf, phone, address] 
            );
        res.json(newProducer.rows[0]);
    }catch(error){
        console.log(error);
    }
})

//view profile
app.get('/profile/:email', async(req,res)=>{
    try{
        const { email } = req.params;
        console.log(email);
        const profile = await pool.query("SELECT * FROM producer WHERE producer_email=$1", [email]);
        console.log(profile.rows[0]);
        res.json(profile.rows[0]);
    }catch(error){
        console.log(error);
    }
})
