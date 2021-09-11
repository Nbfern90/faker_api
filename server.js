const express = require('express');
const app = express();
const port = 8000;
const faker = require('faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/", (req, res) => {
      res.json({"Message":"Hello World"});
  });

class User {
  constructor(){
    this._id = faker.datatype.number(),
    this.firstName = faker.name.firstName(),
    this.lastName = faker.name.lastName(),
    this.phoneNumber = faker.phone.phoneNumber(),
    this.email = faker.internet.email(),
    this.password = faker.internet.password()
  }
}

class Company {
  constructor(){
    this._id= faker.datatype.number(),
    this.name= faker.company.companyName(),
    this.address = {
      street : faker.address.secondaryAddress(),
      city : faker.address.cityName(),
      state : faker.address.state(),
      zipCode : faker.address.zipCode(),
      country : faker.address.countryCode()

    }
  }
}


app.get("/api/users/new",(req,res)=> {
  let user1 = new User()
  console.log(user1)
  res.json({"result": user1})
})

app.get("/api/comapnies/new",(req,res)=> {
  let company1 = new Company()
  console.log(company1)
  res.json({"result": company1})
})

app.get("/api/user/company",(req,res)=> {
  let user1 = new User()
  let company1 = new Company()
  res.json({"user": user1, "company": company1})
})





app.listen(port, () => console.log("I am running on port " + port))
