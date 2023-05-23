import { FC } from "react";
import {
  StyledBalance,
  StyledBalanceTitle,
  BalanceList,
  BalanceListItem,
  BalanceDl,
} from "./styled";
import { ITypeFormBalance } from "./types";

export interface BalanceProps {
  items: ITypeFormBalance[];
}

export const BalanceForm: FC<BalanceProps> = (item: BalanceProps) => {
  return (
    <StyledBalance>
      <StyledBalanceTitle>Balance</StyledBalanceTitle>
      <BalanceList>
        {item.items.map((items) => (
          <BalanceListItem key={items.key}>
            <BalanceDl>
              <dt> {items.dtName} </dt>
              <dd> {items.ddName} </dd>
            </BalanceDl>
          </BalanceListItem>
        ))}
      </BalanceList>
    </StyledBalance>
  );
};
