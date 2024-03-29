export interface APIResponse {
  status: number;
  message: string;
  data?: Array<object> | object;
}
