import { FC, useEffect, useState } from "react";
import {
  StyledLabel,
  StyledFormSpan,
  StyledSelectContainer,
  StyledSelect,
  StyledFormOption,
} from "./styled";

export interface SelectProps {
  label: string;
  key: string;
  value: string;
  items: string[];
  onChange(value: string): void;
}

export const Select: FC<SelectProps> = (data: SelectProps) => {
  const [value, setValue] = useState(data.value);
  useEffect(() => {
    data.onChange(value);
  }, [value]);
  return (
    <li key={data.key}>
      <StyledLabel>
        <StyledFormSpan> {data.label}</StyledFormSpan>
        <StyledSelectContainer>
          <StyledSelect
            onChange={(e) => setValue(e.target.value)}
            value={value}
          >
            {data.items.map((item) => (
              <StyledFormOption key={item} aria-label={item}>
                {item}
              </StyledFormOption>
            ))}
          </StyledSelect>
        </StyledSelectContainer>
      </StyledLabel>
    </li>
  );
};
