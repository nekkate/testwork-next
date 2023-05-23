import { FC, useState } from "react";

import { ITypeFormInput } from "./types";
import { StyledFormList, StyledLabel, StyledFormSpan, StyledFormInput } from "./styled";
import { input } from '../../ui/elements/input';

export interface InputProps {
  items: ITypeFormInput[];
}

export const InputForm: FC<InputProps> = (item: InputProps) => {
  return (
    <StyledFormList>
      {item.items.map((items) =>  {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        var [input, setInput] = useState(items.valueInput);
        return (
        <StyledLabel key={items.key} >
          <StyledFormSpan>{items.spanName}</StyledFormSpan>
          <StyledFormInput type={items.typeInput} value={input} name={items.spanName} onChange={(e)=> setInput(e.target.value)} ></StyledFormInput>
          </StyledLabel>
      )})}
    </StyledFormList>
  );
};
