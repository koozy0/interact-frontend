import React from 'react';

const Input = ({ label, inputType, value, ...rest }) => (
  <div style={styles.formField} className='form-field'>
    <div style={styles.formFieldWrapper}>
      <div style={styles.formFieldFlex}>
        <div style={styles.formFieldInfix}>
          <span
            style={styles.formFieldLabelWrapper}
            className='form-field-label-wrapper'
          >
            <label
              style={styles.formFieldLabel}
              className={
                value ? 'form-field-label' : 'form-field-label form-field-empty'
              }
            >
              {label}
            </label>
          </span>
          {inputType === 'textarea' ? (
            <textarea style={styles.formFieldInput} {...rest}></textarea>
          ) : (
            <input style={styles.formFieldInput} {...rest} />
          )}
        </div>
      </div>
      <div style={styles.formFieldUnderline}>
        <div style={styles.formFieldRipple} className='form-field-ripple'></div>
      </div>
    </div>
  </div>
);

export default Input;

const styles = {
  formField: {
    position: 'relative',
    width: '100%',
    display: 'inline-block',
    textAlign: 'left',
  },
  formFieldWrapper: {
    paddingBottom: '20px',
    position: 'relative',
  },
  formFieldFlex: {
    display: 'inline-flex',
    alignItems: 'baseline',
    width: '100%',
  },
  formFieldInfix: {
    padding: '7px 0',
    display: 'block',
    position: 'relative',
    flex: 'auto',
    minWidth: '0',
    width: '180px',
    borderTop: '13.5px solid transparent',
  },
  formFieldInput: {
    font: 'inherit',
    background: '0 0',
    backgroundColor: 'unset !important',
    color: 'currentColor',
    border: 'none',
    outline: '0',
    padding: '0',
    margin: '0',
    width: '100%',
    maxWidth: '100%',
    verticalAlign: 'bottom',
    textAlign: 'inherit',
  },
  formFieldLabelWrapper: {
    position: 'absolute',
    left: '0',
    boxSizing: 'content-box',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    top: '-13.5px',
    paddingTop: '13.5px',
  },
  formFieldLabel: {
    transform: 'perspective(100px)',
    display: 'block',
    position: 'absolute',
    font: 'inherit',
    fontSize: '16px',
    pointerEvents: 'none',
    width: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    transformOrigin: '0 0',
    top: '20.5px',
    transition:
      'transform .4s cubic-bezier(.25,.8,.25,1), color .4s cubic-bezier(.25,.8,.25,1), width .4s cubic-bezier(.25,.8,.25,1)',
  },
  formFieldUnderline: {
    height: '1px',
    backgroundColor: 'var(--light)',
    position: 'absolute',
    bottom: '20px',
    pointerEvents: 'none',
    width: '100%',
    transform: 'scaleY(1.0001)',
  },
  formFieldRipple: {
    top: '0',
    height: '2px',
    overflow: 'hidden',
    position: 'absolute',
    left: '0',
    width: '100%',
    transformOrigin: '50%',
    transform: 'scaleX(.5)',
    opacity: '0',
    transition: 'background-color .3s cubic-bezier(.55, 0, .55, .2)',
    backgroundColor: 'var(--light)',
  },
};
