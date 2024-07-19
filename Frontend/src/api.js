export const getAllExpenses=async()=>{
    const response=await fetch('http://localhost:8080/',
    {method:"GET"}
    );
    const data=await response.json();
    console.log(data);
    return data;
}