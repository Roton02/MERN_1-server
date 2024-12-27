type TerrorSources = {
  path: string | number | '';
  message: string;
}[];

export default TerrorSources;

export type TGenericResponseError = {
  statusCode: number;
  success: boolean;
  message: string;
  errorSources: TerrorSources;
};
