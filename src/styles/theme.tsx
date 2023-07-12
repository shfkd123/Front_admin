import { extendTheme } from "@chakra-ui/react";
import StyleBox from "./components/StyleBox";
import StyleButton from "./components/StyleButton";
import StyleInput from "./components/StyleInput";

const theme = extendTheme({
  fonts: {
    header: `‘Noto Sans KR’, sans-serif`,
    body: `‘Noto Sans KR’, sans-serif`,
  },
  components: {
    Button: StyleButton,
    // Box: StyleButton,
    // Input: StyleInput,
  },
});

export default theme;
