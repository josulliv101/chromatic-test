import Cookies from "js-cookie";
import { ChromaticTestProviderProps } from "./components/ChromaticTestProvider";
import { isDevelopment } from "./constants";

export const apiFetch = async (
  context: ChromaticTestProviderProps,
  endpoint: string,
  fetchOptions: RequestInit = {}
): Promise<Response> => {
  const headers = new Headers(fetchOptions.headers);

  const apiToken = localStorage.getItem("apiToken");
  const sessionToken = Cookies.get("sessionid");
  if (apiToken && isDevelopment) {
    headers.append("Authorization", `Bearer ${apiToken}`);
  } else if (sessionToken !== null) {
    headers.append("Authorization", `Session ${sessionToken}`);
  }
  fetchOptions.headers = headers;
  return await fetch(context.apiUrl + endpoint.substring(1), fetchOptions);
};
