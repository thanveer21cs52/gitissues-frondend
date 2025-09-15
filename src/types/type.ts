export interface Issue {
  number: number;
  state: "OPEN" | "CLOSED";
  title: string;
  body: string;
  user?: { login: string };
  comments?: number;
}
