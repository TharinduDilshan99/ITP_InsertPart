import React, { useState } from 'react';
import axios from "axios";


export default function AddWard(){

    
    const [ward_name, setWardName] = useState("");
    const [ward_catogory, setCatogory] = useState("");
    const [total_bed_amount, setBedAmount] = useState("");
    const [empty_beds, setEmptyBeds] = useState("");

    

    function sendData(e){
      e.preventDefault();
      

      const newWard ={
        ward_name,
        ward_catogory,
        total_bed_amount,
        empty_beds
      }

      
       axios.post("http://localhost:8070/ward/wardadd",newWard).then(()=>{
         alert("Ward Added")

       }).catch((err)=>{
          alert(err)
       })


    }
    

    return(
      
       
      <div className="add_ward">
      
         
           <form onSubmit={sendData}> 
           <center><h1>ADD WARD</h1></center>

              <div className="gl-1">
                  <label for="ward_name" className="form-label">Ward Name</label>
                  <input type="text" className="form-control" id="ward_name" placeholder="Enter Ward Name" 
                  onChange={(e)=>{
                    setWardName(e.target.value);
                  }}/>
              </div>

              <div className="gl-2">
                  <label for="ward_catogory" className="form-label">Ward Catogory</label>
                  <input type="text" className="form-control" id="ward_catogory" placeholder="Enter Ward Catogory" 
                  onChange={(e)=>{
                    setCatogory(e.target.value);
                  }}/>
              </div>

              <div className="gl-3">
                  <label for="total_bed_amount" className="form-label">Total Bed Amount</label>
                  <input type="text" className="form-control" id="total_bed_amount" placeholder="Enter Total Bed Amount" 
                  onChange={(e)=>{
                    setBedAmount(e.target.value);
                  }}/>
              </div>

              <div className="gl-4">
                  <label for="empty_beds" className="form-label">Enter Empty Beds Amount</label>
                  <input type="text" className="form-control" id="empty_beds" placeholder="Enter Empty Bed Amount" 
                  onChange={(e)=>{
                    setEmptyBeds(e.target.value);
                  }}/>
              </div>

              <br></br>
                  <button type="submit" className="btn btn-primary">Add Ward</button>
                  <button type="submit" className="btn1 btn-primary">Cancel</button>
           </form>
       </div>







       
       
    
    )


}