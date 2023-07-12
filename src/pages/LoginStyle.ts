import { defineStyleConfig } from "@chakra-ui/react";

export const BoxStyles = defineStyleConfig({
  baseStyle: {
    display: "flex",
    flexDir: "column",
    alignItems: "center",
    justifyContent: "center",
    minH: "100vh",
  },
});
