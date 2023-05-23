import { FC, useState } from "react";
import { StyledSection, StyledUl } from "./styled";
import { Container } from "@/components/ui/elements/container";
import { TitleMain } from "../intro-wrapper/styled";
import { Form } from "../form/form";
import {
  ITypeAccountData,
  ITypeIconForm,
  ITypeFormInput,
  ITypeFormOption,
  ITypeFormatData,
  TimeFormats,
  DateFormats,
} from "../form/types";
import { InputForm } from "../form/input-form";
import { OptionForm } from "../form/input-select";

export const SettingWrapper: FC = () => {
  const AccountProps: ITypeAccountData = {
    icon: {
      nameSpan: "Account",
      src: "account-icon.svg",
      alt: "Image svg account",
      width: 31,
      height: 39,
    } as ITypeIconForm,
    inputs: [
      {
        key: 1,
        spanName: "Password",
        typeInput: "password",
        valueInput: "******",
      },
      {
        key: 2,
        spanName: "First Name",
        typeInput: "text",
        valueInput: "David",
      },
      {
        key: 3,
        spanName: "",
        typeInput: "text",
        valueInput: "Anytypeson",
      },
    ] as ITypeFormInput[],
  };
  const [timeFormat, setTimeFormat] = useState(TimeFormats.twenty as string)
  const [dateFormat, setDateFormat] = useState(DateFormats.yearFirst as string)

  const FormatProps: ITypeFormatData = {
    icon: {
      nameSpan: "Format",
      src: "time-icon.svg",
      alt: "Image svg format",
      width: 50,
      height: 50,
    } as ITypeIconForm,
    options: [
      {
        key: 10,
        spanName: "Time format",
        ariaLabels: [
          TimeFormats.twenty,
          TimeFormats.twelve
        ],
        value: timeFormat,
        onChange: (value) => setTimeFormat(value)
      },
      {
        key: 11,
        spanName: "Date format",
        ariaLabels: [
          DateFormats.yearFirst,
          DateFormats.dayFirst
        ],
        value: dateFormat,
        onChange: (value) => setDateFormat(value) 
      },
    ] as ITypeFormOption[],
  };

  return (
    <StyledSection as="section">
      <Container>
        <TitleMain>Setting</TitleMain>
        <StyledUl>
          <Form icon={AccountProps.icon}>
            <InputForm items={AccountProps.inputs}></InputForm>
          </Form>
          <Form icon={FormatProps.icon}>
              <OptionForm items={FormatProps.options}></OptionForm>
          </Form>
        </StyledUl>
      </Container>
    </StyledSection>
  );
};
