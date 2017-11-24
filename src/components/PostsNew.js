import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{

  renderField(field){
    return (
      <div className = "row">
        <div className ="input-field col s12 l10">
          <h3>{field.label}</h3>
          <input type="text"  {...field.input} />  
          {/* <label>{field.label}</label>       */}
        </div> 
      </div>
    )
  }

  render(){
    return(
      <form>
        <Field name="title" component = {this.renderField} label="Title"/>
        <Field name="tags" component = {this.renderField} label="category"/>
        <Field name="content" component = {this.renderField} label="Post Content"/>    
                     
      </form>
    );
  }
}

function validate(values) {
 //console.log(values)
 const errors = {};

 //validate the inputs from 'values'
 if(!values.title){
   errors.title = "Enter title!";
 }
 if(!values.category){
   errors.category = "Enter category";
 }
 if(!values.content){
   errors.content = "Enter some content";
 }

 //if errors is empty, the form is fine to submit

 //if errors has *any* properties, redux form assumes form is invalid

 return errors;
}
//
export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew);