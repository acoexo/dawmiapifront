const chai=require("chai");
const chaiHttp=require("chai-http");
const expect=require("chai").expect;

chai.use(chaiHttp);

const app=require("../index.js");

const url="http://localhost:3000";

describe ("test 2: testeando el post de nombre y precio", ()=>{
    it ("Esperamos un name y un price", (done)=>{
        chai.request(url)
        .post("/api/v1/products")
        .send({name:'pccomputer', price:200})
        .end ((err, res)=>{
            console.log(res.text);
            expect(res).to.have.status(200);
            done()
        })

    })
})

describe ("test 3: testeando el get sin parámetros", ()=>{
    it ("Esperamos 5 products", (done)=>{
        chai.request(url)
        .get("/api/v1/products")
        .end ((err, res)=>{
            console.log(res.text);
            expect(res).to.have.status(200);
            done()
        })

    })
})