import React from 'react';
import numeral from 'numeral';
import Dropzone from 'react-dropzone';
import { Label, ErrorFeedBack } from '../helpers';
import { SubTitleSection } from '../helpers';
import * as Color from '../helpers/color';


export function renderInputField(field) {
    const { meta: { touched, error } } = field;
    const formClassNm = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
        <div className={formClassNm}>
            <Label color={Color.label_text_color}>{field.displayLabel}</Label>
            <input
                className="form-control"
                type={field.type}
                maxLength={field.maxLength || 10}
                disabled={field.disabled || false}
                step="any"
                {...field.input}
            />
            <ErrorFeedBack>
                {touched ? error : ''}
            </ErrorFeedBack>
        </div>
    );
}

export function renderInputTextAreaField(field){
    const { meta: { touched, error } } = field;
    const formClassNm = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
        <div className={formClassNm}>
            <Label color={Color.label_text_color}>{field.displayLabel}</Label>
            <textarea
                className="form-control"
                type={field.type}
                maxLength={field.maxLength || 50}
                {...field.input}
            />
            <ErrorFeedBack>
                {touched ? error : ''}
            </ErrorFeedBack>
        </div>
    );
}

export function renderDropdownField(field) {
    const { meta: { touched, error} } = field;
    const formClassNm = `form-group ${touched && error ? 'has-danger' : ''}`;

    if ( field.data.length == 0 )
        return <div></div>

    let options = _.map(field.data, e => {
        return <option key={e.id} value={e.id}>{e.name}</option>
    })
    return (
        <div className={formClassNm}>
            <Label color={Color.label_text_color}>{field.displayLabel}</Label>
            <select 
                value={field.input.value}
                className="form-control"
                {...field.input}>
                <option value=''></option>
                {options}
            </select>
            <ErrorFeedBack>
                {touched ? error : ''}
            </ErrorFeedBack>
        </div>
    );
}

export const renderDropzoneInput = (field) => {
    const files = field.input.value;
    return (
      <div>
        <Dropzone
          accept="image/jpeg, image/png"
          style={{"width" : "100%", 
                  "height" : "5em", 
                  "borderStyle": "dashed",
                  "color": field.color}}
          multiple={true}
          name={field.name}
          onDrop={( filesToUpload, e ) => {
                if (filesToUpload.length > 3) {
                    window.alert('จำนวน files เกินกว่าที่กำหนด')
                }else {
                    field.input.onChange(filesToUpload)
                }
              }
          }
          onDropAccepted = {
              () => {
                  field.fileHandler(field.input);
              }
          }
        >
          <div>สามารถลากไฟล์วางที่กรอบนี้หรือคลิกทีกรอบเพื่อที่จะหาไฟล์ที่ต้องการ upload</div>
        </Dropzone>
        {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        <SubTitleSection style={{"marginTop": "0.5em"}} color={Color.label_text_color}>
            ไฟล์ที่ได้ลากมาวางไว้: {files === undefined || 
                               files === null || 
                               files.length === 0 || 
                               files[0].name === undefined ? 'N/A':''}
        </SubTitleSection>
        {files && Array.isArray(files) && (
          <ul>
            { 
                files.filter(file => file.name != null).map((file, i) => 
                    <li key={i}>{file.name}</li>
                ) 
            }
          </ul>
        )}
      </div>
    );
} 


export const convert_to_price_obj = (value, type = 'baht') => {
    let elem = value.split(".")
    let major = elem[0]
    let minor = elem[1] || 0
    return {major, minor, type}
}