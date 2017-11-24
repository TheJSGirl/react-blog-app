import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component{

  renderField(field){
    return (
      <div className = "row">
        <div className ="input-field col s12 l10 ">
          <h3>{field.label}</h3>
          <input type="text"  {...field.input}  />  
          {/* <label>{field.label}</label>       */}
        </div> 
        <div className="red-text">
          {field.meta.touched ? field.meta.error : ''}          
        </div>
        
      </div>
    )
  }

onSubmit(values) {
  console.log(values);

}
  render(){
   const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field name="title" component = {this.renderField} label="Title"/>
        <Field name="category" component = {this.renderField} label="category"/>
        <Field name="content" component = {this.renderField} label="Post Content"/>    
        <button type="submit" className="waves-effect waves-light btn blue">Submit</button> &nbsp;
        <Link to='/posts' className="waves-effect waves-light btn red">Cancel</Link>   
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