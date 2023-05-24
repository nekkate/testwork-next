import { Container } from "@/components/ui/elements/container";
import { FC } from "react";
import { Form } from "../form/form";
import { InputForm } from "../form/input-form";


import {
  ITypeWalletData,
  ITypeFormBalance,
  ITypeIconForm,
  ITypeFormInput,
} from "../form/types";
import { StyledUl, StyledSection, TitleMain } from "./styled";
import { BalanceForm } from "../form/balance-form";

export const WalletWrapper: FC = () => {
  const FormatProps: ITypeWalletData = {
    icon: {
      nameSpan: "Wallet KD27801",
      src: "wallet-icon.svg",
      alt: "Image svg wallet",
      width: 40,
      height: 40,
    } as ITypeIconForm,

    inputs: [
      {
        key: 4,
        spanName: "Email",
        typeInput: "text",
        valueInput: "123@msi.tu",
      },
      {
        key: 5,
        spanName: "Phone",
        typeInput: "phone",
        valueInput: "-23-568-8987-89",
      },
    ] as ITypeFormInput[],

    balances: [
      {
        key: 6,
        dtName: "Aviable",
        ddName: "27.45 GBP",
      },
      {
        key: 7,
        dtName: "Reserved",
        ddName: "0.00 GBP",
      },
      {
        key: 8,
        dtName: "Total",
        ddName: "27.45 GBP",
      },
    ] as ITypeFormBalance[],
  };

  return (
    <StyledSection>
      <Container>
        <TitleMain>Wallets</TitleMain>
        <StyledUl>
          <Form icon={FormatProps.icon}>
            <div>
              <BalanceForm items={FormatProps.balances}></BalanceForm>
              <InputForm items={FormatProps.inputs}></InputForm>
            </div>
          </Form>
        </StyledUl>
      </Container>
    </StyledSection>
  );
};
