import { FC } from "react";

import { ITypeIconForm } from "./types";
import Image from "next/image";
import { StyledContainerImg, StyledDivIcon, StyledText } from "./styled";

export interface IconProps {
  items: ITypeIconForm;
}

export const IconForm: FC<IconProps> = (item: IconProps) => {
  return (
    <>
      <StyledDivIcon>
        <StyledContainerImg>
          <Image src={item.items.src} width={item.items.width} height={item.items.height} alt={item.items.alt} priority={true}/>
        </StyledContainerImg>
        <StyledText>{item.items.nameSpan}</StyledText>
      </StyledDivIcon>
    </>
  );
};