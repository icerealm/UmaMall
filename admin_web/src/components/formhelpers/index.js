import React from 'react';
import numeral from 'numeral';
import { Label, ErrorFeedBack } from '../helpers';
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