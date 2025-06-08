export interface RowsBasicFormValues<T> {
  rows: T[];
}

export interface HeadersBasicFormValue {
  headers: Header[];
}

interface Header {
  type: "text" | "image" | "button" | "buttonsList";
  name: string;
}
