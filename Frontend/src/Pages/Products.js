import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ADDINFO } from "../MainSlice";
import Axios from "axios";
import axios from "axios";






function Products() {
  const dispatch = useDispatch();

   const [info, setInfo] = useState({
     name:"",
     age:"",
     email:"",
     phone:"",
     cv:"",
     lm:""
   })

  const { register,
     handleSubmit,

     formState: { errors },
     reset,
     trigger
     } = useForm();

  const onSubmit = (data) => {
    console.log("CLIIIIIICK");
    axios({
      method: 'post',
      url: "http://localhost:8080/cv/add",
      headers: {}, 
      data: {
        name
        :
        "ala is the worst instructor",
        age
        :
        33,
        email
        :
        "monta@gmail.com",
        phone
        :
          234565566,
        cvLink
        :
        "cvLink",
        lm
        :
        "lm"
      }
    });

      dispatch(ADDINFO(info))
    console.log(data);

   
    
    };

  return (
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Remplir formulaire</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label">Name:</label>
              <input
                type="text"
                className={`form-control ${errors.name && "invalid"}`}
                {...register("name", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("name");
                }}
                onChange={(e)=>setInfo({...info,name:e.target.value})}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Age:</label>
              <input
                              onChange={(e)=>setInfo({...info,age:e.target.value})}

                type="text"
                className={`form-control ${errors.age && "invalid"}`}
               
                onKeyUp={() => {
                  trigger("age");
                }}
              />
              {errors.age && (
                <small className="text-danger">{errors.age.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input
                              onChange={(e)=>setInfo({...info,email:e.target.value})}

                type="text"
                className={`form-control ${errors.email && "invalid"}`}
                
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            
            
      </div>





































            <div className="form-group">
              <label className="col-form-label">Phone:</label>
              <input
                              onChange={(e)=>setInfo({...info,phone:e.target.value})}

                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
               
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            
          </div>






      
          <div className="form-group">
              <label className="col-form-label">Deposer CV:</label>
              <input
                              onChange={(e)=>setInfo({...info,cv:e.target.value})}

                type="text"
                className={`form-control ${errors.CV && "invalid"}`}
                
                onKeyUp={() => {
                  trigger("CV");
                }}
              />
              {errors.CV && (
                <small className="text-danger">{errors.CV.message}</small>
              )}
            </div>


















            <div className="form-group">
              <label className="col-form-label">LM:</label>
              <textarea
                              onChange={(e)=>setInfo({...info,lm:e.target.value})}

                className={`form-control ${errors.message && "invalid"}`}
               
               onKeyUp={() => {
                trigger("message");
              }}
              ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
            <input
              type="submit"
              className="btn btn-primary my-3"
              value="Enregistrer"
            />
          </form>
        </div>
      </div>
    </div> 
    
  );
}

export default Products;