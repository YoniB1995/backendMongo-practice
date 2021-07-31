const express = require('express');
const app = express();
const pool = require('../database/database')

const getStudent = (req,res) =>{
    pool.query(`select * from students`,(err,students,field)=>{
        if (err) throw err;
        res.send(students)
        
    })
}

const addStudent = (req,res) =>{
    pool.query(`insert into students values(6,'roddy','richh',28)`,(err,students,field)=>{
        if (err) throw err;
        res.send(students);
    })
}

const deleteStudent = (req,res) =>{
    pool.query(`delete from students where fname = "yakov" `,(err,students,field)=>{
        if (err) throw err;
        res.send(students);
    })
}

const updateStudent = (req,res) =>{
    pool.query(`update students set studentID = 5, fname = "Yitzhak" , lname = "kasie" , age = 21 where fname='david' `,(err,students,field)=>{
        if (err) throw err;
        res.send(students);
    })
}


module.exports = {getStudent,addStudent,updateStudent,deleteStudent}