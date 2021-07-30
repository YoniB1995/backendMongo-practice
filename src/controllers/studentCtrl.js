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
    pool.query(`insert into students values(5,'david','talala',28)`,(err,students,field)=>{
        if (err) throw err;
        res.send(students)
    })
}


module.exports = {getStudent,addStudent}