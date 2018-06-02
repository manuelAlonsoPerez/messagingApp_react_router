import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component{
    renderField(field){
        const { meta } = field; 
        const className =`form-group ${ meta.touched && meta.error ? 'has-danger' : ''}` ;


        return (
            <div className={ className } >
                <label>{field.label}</label>
                <input 
                    type = 'text'
                    className='form-control'
                    // onChange = {field.input.onChange}
                    // onFocus = {field.input.onFocus}
                    // onBlur = {field.input.onBlur}
                    // or in one line:
                    { ...field.input }
                />
                <div className='text-help'>
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        );
    }
    onSubmit(values){
        //console.log(values);
        this.props.createPost(values, () => this.props.history.push('/') );
    }
    render(){
        // Es6 for const handleSubmit = this.props.handleSubmit
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name='title'
                    label='Title:'
                    // Accepts a component or a function  NEEDED to render the field component
                    component={this.renderField}
                />
                <Field
                    name='categories'
                    label='Categories:'
                    component={this.renderField}
                />
                <Field
                    name='content'
                    label='Content:'
                    component={this.renderField}
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link className='btn btn-danger' to='/'>Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    // Validates the input from values
    if(!values.title){
        errors.title = 'Please enter a title';
    }
    if(!values.categories){
        errors.categories = 'Please enter a category';
    }
    if(!values.content){
        errors.content = 'Please enter some content';
    }
    // If errors is empty the form its fine to submit(validates), 
    // otherwise returns the error
    return errors;

}
// Assign a unique name to form property, wires reduxForm to
// our PostsNew component 
export default reduxForm({
    //Es6syntax = (validate: validate,)
    validate,
    form: 'PostsNewForm'
})(
    connect( null, { createPost } )(PostsNew)
);