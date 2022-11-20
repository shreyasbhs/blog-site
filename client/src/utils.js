const getSignUpForm = (form) =>{


    let formInputData = Array.from(form.children).map( node =>{
      if(node.tagName.toLowerCase() == 'input')
        return node;
      } );
    let body = {};
    formInputData.forEach( field =>{
      if(field && field.getAttribute('type')!='submit'){
          body[field.getAttribute('name')] = field.value;
      }
      });
    // console.log(formInputData);
    let password = formInputData[5]; 
    let confirmPassword = formInputData[7];
    console.log(password.value, confirmPassword.value);
    if(confirmPassword.value != password.value){
        confirmPassword.setCustomValidity('This should match the password entered above');
        confirmPassword.reportValidity();
        password.value = "";
        confirmPassword.value = "";
        setTimeout(() =>{confirmPassword.setCustomValidity('');},5000);
        return null;
     }
    else{
        
        // confirmPassword.reportValidity();
        console.log(body);
        return body;
    }
    
        // form.reportValidity();
        // password.value = '';
        // confirmPassword.value = '';
        
    
  
  
  
  }

  module.exports = {
      getSignUpForm: getSignUpForm,
  
  };

