import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <textarea
        {...input}
        rows={rows}
        placeholder={placeholder}
        type={type}
      ></textarea>
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextArea;
