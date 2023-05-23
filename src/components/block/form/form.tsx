import { FC } from "react";
import { StyledContainer } from "../setting-wrapper/styled";
import { IconForm } from "./icon-form";
import { ITypeAccountProps } from "./types";


export const Form: FC<ITypeAccountProps> = (data: ITypeAccountProps) => {
  return (
    <StyledContainer>
      <IconForm items={data.icon}></IconForm>
      {data.children}
    </StyledContainer>
  );
};
