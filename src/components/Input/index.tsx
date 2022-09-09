import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IInputProps2 } from "../../interfaces/components";
import Tooltip from "../Tooltip";

import { StyledInput, StyledSelect } from "./styles";

const CustomInput = ({ id, label, register, error, select, options, cep, ...rest }: IInputProps2) => {
  const [blur, setBlur] = useState(false);
  const { cepError, cepRequest} =  useContext(AuthContext);

  const setBorder = () => {
    return error || (cep && cepError)
      ? "1px solid var(--color-negative)"
      : blur
      ? "1px solid var(--black)"
      : "1px solid transparent";
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {select ? (
        <StyledSelect
          border={setBorder}
          {...register(id as string)}
          onClick={() => setBlur(true)}
          onBlur={() => setBlur(false)}
          defaultValue={options && options[0].value}
        >
          {options?.map((option) => {
            return (
              <option value={option.value} key={option.id}>
                {option.value}
              </option>
            );
          })}
        </StyledSelect>
      ) : (
        <>
          <StyledInput border={setBorder}>
            <input
              {...rest}
              {...register(id as string)}
              onClick={() => setBlur(true)}
              onBlur={(e) => {
                if (cep) {
                  setBlur(false);
                  cepRequest(e);
                } else {
                  setBlur(false);
                }
              }}
            />
            {(error || (cep && cepError)) && (
              <Tooltip>{cepError && cep ? "CEP inválido" : error}</Tooltip>
            )}
          </StyledInput>
        </>
      )}
    </>
  );
};

export default CustomInput;
