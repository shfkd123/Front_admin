const StyleButton = {
  baseStyle: {
    borderRadius: "base",
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "#982841",
      color: "#982841",
    },
    solid: {
      bg: "#982841",
      color: "white",
    },
  },
  defaultProps: {
    variant: "outline",
  },
};
export default StyleButton;
