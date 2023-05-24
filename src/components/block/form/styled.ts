import styled from "styled-components";
import { ul } from "@/components/ui/elements/ul";
import { p } from "@/components/ui/elements/p";
import { li } from "@/components/ui/elements/li";

export const StyledDivIcon = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colorSnow};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  
`;

export const StyledIcon = styled.div`
  margin: 28px 0 20px 0;
  position: relative;
`;

export const StyledFormList = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 18px;
  padding: 2% 2%;
`;

export const StyledLabel = styled.label`
  background-color: ${(props) => props.theme.colorWhisper};
  display: grid;
  grid-template-columns: 37% 58%;
  column-gap: 5%;
  align-items: center;
  padding: 5px;
  border-radius: 5px;

  
`;

export const StyledFormSpan = styled.span`
  display: flex;
  justify-content: end;
`;

export const StyledFormInput = styled.input`
  outline: none;
  border: none;
  padding: 10px 5px 10px 20px;
  width: 100%;
  border-radius: 5px;

  &::after {
    color: black;
  }

  @media (max-width: 550px) {
    font-size: 12px;
    line-height: 16px;
  };
`;

export const StyledText = styled(p)`
  margin-bottom: 37px;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
 
`;

export const StyledContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorGainsboro};
  border-radius: 50%;
  width: 98px;
  height: 98px;
  margin: 28px 0 20px 0;
`;

export const StyledFormOption = styled.option`
  outline: none;
  border: none;
  padding: 10px 5px 10px 20px;
  width: 100%;
  border-radius: 5px;
`;

export const StyledSelect = styled.select`
  border: none;
  padding: 7px 12px;
  border-radius: 5px;
  outline: none;
  appearance: none;
  position: relative;
  width: 100%;
`;
export const StyledSelectContainer = styled.div`
  position: relative;

  &:after {
    content: url(arrow-select.svg);
    width: 14px;
    height: 12px;
    position: absolute;
    right: 8px;
    top: 5px;
  }
`;

export const BalanceList = styled(ul)`
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
`;

export const StyledBalance = styled.div`
  background-color: ${(props) => props.theme.colorWhite};
  flex-direction: column;
  align-items: center;
  margin: 21px 12px;
  padding: 10px 20px 10px 20px;
`;

export const BalanceDl = styled.dl`
  display: flex;
  justify-content: space-between;
  padding: 7px 13px;
`;

export const BalanceListItem = styled(li)`
  background-color: ${(props) => props.theme.colorWhisper2};

  &:nth-child(odd) {
    background-color: ${(props) => props.theme.colorGainsboro};
  }
`;

export const StyledBalanceTitle = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const StyledUpdateDate = styled.li`
  justify-content: center;
  display: flex;
`;
