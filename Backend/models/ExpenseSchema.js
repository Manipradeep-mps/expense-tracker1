const express=require('express')
const mongose=require('mongoose')


const expenseSchema=new mongose.Schema({
    title:String,
    amount:Number,
    date:String
});
const expense=mongose.model("Expense",expenseSchema);

module.exports=expenseSchema