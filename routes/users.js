import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router=express.Router();

let users=[
     {
    "firstName": "John",
    "lastName": "Doe",
    "age": 23,
    "id": "c67a20d0-a318-4e2c-8d67-0170c6942394"
  },
  {
    "firstName": "Tom",
    "lastName": "Harry",
    "age": 33,
    "id": "c502ccde-3904-4416-ab50-dff52b502514"
  }
]
router.get("/",(req,res)=>{
    res.send(users);
});

router.post("/",(req,res)=>{
    const user=req.body;
    const id=uuidv4()
    users.push({...user,id});
    res.send(`User :${user.firstName} added successfully`);
})

router.get("/:id",(req,res)=>{
    let {id}=req.params;
    const foundUser=users.find((user)=>user.id==id);
    res.send(foundUser);

})

router.delete("/:id",(req,res)=>{
    let {id}=req.params;
    users=users.filter((user)=>user.id!=id);
    res.send(users);
});

router.patch("/:id",(req,res)=>{
    let {id}=req.params;
    let {firstName,lastName,age}=req.body;
    let user=users.find((user)=>user.id==id);
    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastname=lastName;

    }
    if(age){
        user.age=age;
    }
    res.send(`User with id ${id} updated successfully`);
})
export default router;