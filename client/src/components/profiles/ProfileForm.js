//ProfileForm shows a form for a user to add input
import _ from 'lodash'
import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import ProfileField from "./ProfileField";

const FIELDS = [
  { label:'ชื่อ - นามสกุล (ภาษาไทย)', name:'ชื่อ - นามสกุล (ภาษาไทย)' },
  { label:'ชื่อ - นามสกุล (ภาษาอังกฤษ)', name:'ชื่อ - นามสกุล (ภาษาอังกฤษ)' },
  {label:'ชื่อบริษัท/องค์กร (ภาษาไทย)', name:'ชื่อบริษัท/องค์กร (ภาษาไทย)'},  
  {label:'ชื่อบริษัท/องค์กร (ภาษาอังกฤษ)', name:'ชื่อบริษัท/องค์กร (ภาษาอังกฤษ)'},
  {label:'ตำแหน่งในองค์กร (ภาษาไทย)', name:'ตำแหน่งในองค์กร (ภาษาไทย)'},
  {label:'ตำแหน่งในองค์กร (ภาษาอังกฤษ)', name:'ตำแหน่งในองค์กร (ภาษาอังกฤษ)'},
  {label:'ที่อยู่ (ภาษาไทย)', name:'ที่อยู่ (ภาษาไทย)'},
  {label:'ที่อยู่ (ภาษาอังกฤษ)', name:'ที่อยู่ (ภาษาอังกฤษ)'},
  {label:'ลิ้งค์โลเคชั่น', name:'ลิ้งค์โลเคชั่น'},
  {label:'อีเมล์ (1)', name:'อีเมล์ (1)'},
  {label:'อีเมล์ (2)', name:'อีเมล์ (2)'},
  {label:'ลิ้งค์เว็บไซต์', name:'ลิ้งค์เว็บไซต์'},
  {label:'ลิ้งค์ Line', name:'ลิ้งค์ Line'},
  {label:'เบอร์โทรศัพท์ (1)', name:'เบอร์โทรศัพท์ (1)'},
  {label:'เบอร์โทรศัพท์ (2)', name:'เบอร์โทรศัพท์ (2)'},
  {label:'เบอร์โทรศัพท์ (3)', name:'เบอร์โทรศัพท์ (3)'},
  {label:'ลิ้งค์ Facebook', name:'ลิ้งค์ Facebook'},
  {label:'ลิ้งค์ Instagram', name:'ลิ้งค์ Instagram'},
  {label:'ลิ้งค์ Tiktok', name:'ลิ้งค์ Tiktok'},
  {label:'ลิ้งค์ Whatsapp', name:'ลิ้งค์ Whatsapp'},
  {label:'ลิ้งค์ LinkedIn', name:'ลิ้งค์ LinkedIn'},
  {label:'ไฟล์โลโก้บริษัทหรือภาพอื่นๆที่ต้องการพิมพ์ลงนามบัตร', name:'โลโก้'},
  {label:'ไฟล์รูปบุคคลเจ้าของบัตร Profile Picture', name:'รูปบุคคล'}
  
]


class ProfileForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name}) => {
      return <Field key={name} component={ProfileField} type="text" label={label} name={name}/>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/profiles" className='red btn-flat white-text'>
            Cancle
          </Link>
          <button type="submit" className='teal btn-flat right white-text'>
            Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title'
  }

  return errors
}

export default reduxForm({
  validate, 
  form: 'profileForm'
})(ProfileForm)