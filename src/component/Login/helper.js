/* eslint-disable */
import React from 'react';
function validateForm( check, data, field, err) {
    const { name , pass } = data;

    // khali error ayega tou undefine ki boolen false ? kay agay wala chakyga
    var errors = err ? err : {
        hasError: false,
        errorsObj: {}
    }

// saari field ek saath check ya
//  ek ek karkay type kartay waqt check

let Validation = {
    //name kay elem ki validation
    name: {
        //array of conditions
        Validate: [{
            condition: name.length < 3,
            message: "Please Specify Your Full name .",
        },
        {
            condition: /\d/.test(name) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(name),
            message: "Name can not contain Numbers or Any Special Character.",
        },
        ]
            ,elem: 'name'
    },
//password
pass: {
    //array of conditions
    Validate: [{
        condition: name.length < 1,
        message: "Password cant be less than 6 characters .",
    },
    
    {
        condition: name === pass,
        message: "Password cant contain name",
    },
    ]
    ,elem: 'pass'
}
}
//automatic kaam
if ( check === "all") {
  for (var i in Validation){
      var conArray = Validation[i].Validate;
                     //initialize karadiya
      errors.errorsObj[Validation[i].elem]={message: [] } //initialize karadiya nxt time psh
      for (var j=0; j< conArray.length;j++){
          if (conArray[j].condition){
              errors.hasError=true;
              errors.errorsObj[Validation[i].elem].message.push(conArray[j].message)
          }
      }//conditon checking kaam
      ///length nae hai tou key delete kardou
      if (!errors.errorsObj[Validation[i].elem].message.length){
          delete errors.errorsObj[Validation[i].elem]
      }
  }
  return errors
}

//jub on change pay khelo
if ( check === "each") {
    
        var conArray = Validation[field].Validate;
                       //initialize karadiya
        errors.errorsObj[Validation[field].elem]={message: [] } //initialize karadiya nxt time psh
        for (var j=0; j< conArray.length;j++){
            if (conArray[j].condition){
                errors.hasError=true;
                errors.errorsObj[Validation[field].elem].message.push(conArray[j].message)
            }
        }//conditon checking kaam
        ///length nae hai tou key delete kardou
        if (!errors.errorsObj[Validation[field].elem].message.length){
            delete errors.errorsObj[Validation[field].elem] 
        }
    return errors
  }



















}
const Loader = () => {
    return (
        <div className="LoaderContainer" >
            <div className="loader">
                <div className="lds-ring">
                    <div></div> <div></div> <div></div> <div></div><div></div> <div></div>


                </div>

            </div>
        </div>
    )
}
export { validateForm, Loader };