import React from 'react';
import styled from 'styled-components';
import { useController } from 'react-hook-form';

const InputWrapper = styled.fieldset<{ isError?: boolean }>`
  width: 100%;
  max-width: 320px;
  background: #ffffff;
  border: 1px solid ${(props) => (props.isError ? 'red' : '#dcdee0')};
  box-sizing: border-box;
  border-radius: 4px;
  legend {
    color: ${(props) => (props.isError ? 'red' : '#828282')};
  }
`;

const Legend = styled.legend`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
`;
const Input = styled.input`
  border: none;
  outline: none;
  height: 100%;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin: 4px;
`;

const ControlWrapper = styled.div`
  margin-bottom: 20px;
`;

type CFC<T> = React.FC<Parameters<typeof useController>[0] & T>;

type FieldsetInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  isError?: Record<string, any>;
};
export const FieldsetInput: CFC<FieldsetInputProps> = ({
  name,
  rules,
  defaultValue,
  control,
  label,
  isError,
  ...rest
}) => {
  const {
    field: { ref, ...props },
  } = useController({ name, rules, defaultValue: defaultValue ?? '', control });

  return (
    <ControlWrapper>
      <InputWrapper isError={Boolean(isError?.message)}>
        <Legend>{label}</Legend>
        <Input {...rest} {...props} ref={ref} />
      </InputWrapper>
      {isError?.message && <ErrorMessage>{isError.message}</ErrorMessage>}
    </ControlWrapper>
  );
};
