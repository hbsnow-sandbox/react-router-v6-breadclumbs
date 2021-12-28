import aspida from "@aspida/fetch";

import api from "./$api";
import mock from "./$mock";

const fetchConfig: Required<Parameters<typeof aspida>>[1] = {
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  throwHttpErrors: true,
};

export const client = import.meta.env.DEV
  ? mock(aspida(fetch, fetchConfig), { delayMSec: 500, log: true })
  : api(aspida(fetch, fetchConfig));
