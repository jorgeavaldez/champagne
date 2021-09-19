import { useContext } from "react";

import { NearContext } from "./provider";
import { LinkdropUserContext } from "./user_provider";

export function useNear() {
  return useContext(NearContext);
}

export function useLinkdropUser() {
  return useContext(LinkdropUserContext);
}
