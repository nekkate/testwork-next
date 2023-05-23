export interface ITypeIconForm {
  nameSpan: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ITypeFormInput {
    spanName: string;
    typeInput: string;
    valueInput: string;
    key: number;
  }
 
export enum DateFormats {
  dayFirst= "dd/mm/yyyy",
  yearFirst="yyyy/mm/dd"
}

export enum TimeFormats {
  twenty= "24-hours",
  twelve="12-hour"
}

  export interface ITypeFormOption {
    spanName: string;
    ariaLabels: string[];
    key: number;
    value: string;
    onChange(string: string): void; 
  }

  export interface ITypeFormBalance {
    dtName:  string,
    ddName: string,
    key: number,
}

  export interface ITypeFormatData {
    icon: ITypeIconForm;
    options: ITypeFormOption[];
  }

  export interface ITypeAccountData {
    icon: ITypeIconForm;
    inputs: ITypeFormInput[];
  }

   export interface ITypeWalletData {
    icon: ITypeIconForm;
    balances: ITypeFormBalance[],
    inputs: ITypeFormInput[];
  }

  
  export interface ITypeAccountProps{
    icon: ITypeIconForm;
    children?: string | JSX.Element | JSX.Element[]
  }
  

