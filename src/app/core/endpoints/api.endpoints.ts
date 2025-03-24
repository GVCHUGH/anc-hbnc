import { environment } from '../../../env/environments';

const baseURL = environment.base_url;
export const apiEndpoints = {
  allANC: `${baseURL}/allANC`,
  allHBNC: `${baseURL}/allHBNC`,
  //   addANC: `${baseURL}/allanc`,
};
