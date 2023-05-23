import { FC, useEffect, useState } from "react";

import { DateFormats, ITypeFormOption, TimeFormats } from "./types";
import {
  StyledFormList,
  StyledLabel,
  StyledFormSpan,
  StyledSelect,
  StyledFormOption,
  StyledSelectContainer,
  StyledUpdateDate
} from "./styled";

export interface OptionProps {
  items: ITypeFormOption[];
}

const getFormattedDate = (date: Date, format: string) => {
  const day = date.getDay().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  switch (format) {
    case DateFormats.dayFirst:
      return `${day}/${month}/${year}`;
    case DateFormats.yearFirst:
      return `${year}/${month}/${day}`;
    default:
      throw new Error("Unknown format");
  }
};

const getFormattedTime = (date: Date, format: string) => {
  switch (format) {
    case TimeFormats.twelve:
      return date.toLocaleString("en-US", {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit",
      });
    case TimeFormats.twenty:
      return date.toLocaleString("en-US", {
        hour: "2-digit",
        hour12: false,
        minute: "2-digit",
      });
    default:
      throw new Error("Unknown format");
  }
};

export const OptionForm: FC<OptionProps> = (item: OptionProps) => {
  const [date, setDate] = useState(
    getFormattedDate(new Date(), item.items[1].value)
  );
  const [time, setTime] = useState(
    getFormattedTime(new Date(), item.items[0].value)
  );

  const updateFormat = () => {
    const date = new Date();
    const timeFormat = item.items[0].value;
    const dateFormat = item.items[1].value;
    setDate(getFormattedDate(date, dateFormat));
    setTime(getFormattedTime(date, timeFormat));
  };

  useEffect(
    updateFormat,
    item.items.map((x) => x.value)
  );

  return (
    <StyledFormList>
      {item.items.map((items) => {
        return (
          <li key={items.key}>
            <StyledLabel>
              <StyledFormSpan> {items.spanName}</StyledFormSpan>
              <StyledSelectContainer>
                <StyledSelect
                  onChange={(e) => items.onChange(e.target.value)}
                  value={items.value}
                >
                  {items.ariaLabels.map((item) => (
                    <StyledFormOption key={item} aria-label={item}>
                      {item}
                    </StyledFormOption>
                  ))}
                </StyledSelect>
              </StyledSelectContainer>
            </StyledLabel>
          </li>
        );
      })}
      <StyledUpdateDate>
        {date} {time}
      </StyledUpdateDate>
    </StyledFormList>
  );
};
