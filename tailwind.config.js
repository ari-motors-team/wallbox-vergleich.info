module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },

    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(130px, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
      },
      gridTemplateRows: {
        "auto-fit": "repeat(auto-fit, minmax(0, 1fr))",
        "auto-fill": "repeat(auto-fill, minmax(0, 1fr))",
      },
      screens: {
        xs: "410px",
      },
      backgroundImage: {
        "radial-green": "radial-gradient(circle, #00774c 0%, #004225 100%)",
        "horizontal-green": "linear-gradient(135deg, #004225 0%, #417538 100%)",
        "radial-green-invert":
          "radial-gradient(circle, #00774c 0%, #004225 100%)",
        "horizontal-green-invert":
          "linear-gradient(135deg, #417538 0%, #004225 100%)",
        "vertical-grey": "linear-gradient(180deg, #fafafa 0%, #d9d9d9 100%)",
        "center-grey":
          "linear-gradient(180deg, #ffffff 0%, #e6e6e6 65.11%, #ffffff 100%)",
      },
      borderWidth: {
        6: "6px",
      },
      fontSize: {
        xxs: "10px",
      },
      boxShadow: (theme) => ({
        card: "2px 4px 20px -4px rgba(0,0,0,0.75)",
        "product-card": "2px 2px 10px 3px rgba(0,0,0,0.5)",
        "configurator-card": `0 0 0 2px ${theme("colors.green.dark")}`,
        "configurator-card-selected": `0 0 0 4px ${theme(
          "colors.green.light"
        )}`,
        gifShadow: "0px 0px 10px 0px rgba(239, 84, 36, 0.3)",
        header: "0 2px 24px 0 rgba(0,0,0,0.5)",
        dropdown: "0 2px 6px 0 rgba(44,63,83,0.25)",
        dropdown2: "2px 2px 6px 1px rgba(44,63,83,0.25)",
        test: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px",
        angelos1: "0 0 0 1px #243280;",
      }),
      blur: {
        xs: "2px",
      },
      colors: {
        grey: {
          lightest: "#F2F2F2",
          lighter: "#E7EDF3",
          light: "#CCCCCC",
          dark: "#6e6e6e",
          darker: "#4e4e4e",
          moredark: "#415264",
          darkest: "#212121",
          superdark: "#030F1C",
          border: "#D0DDEA",
          nav: "#b1a7a7",
        },
        yellow: {
          lightest: "",
          lighter: "",
          light: "#ffd166",
          dark: "",
          darker: "",
          darkest: "",
        },
        blue: {
          extralight: "#F2F9FF",
          lightest: "#727CF5",
          lighter: "#6F89A5",
          light: "#356aa6",
          dark: "#243280",
          darker: "#1F1E80",
          darkest: "#5A3DF5",
          extra: "#2C3F53",
          extrablue: "#706FB6",
        },
        orange: {
          lightest: "",
          lighter: "#FFAB00",
          light: "#f35625",
          dark: "#EF5424",
          darker: "",
          darkest: "",
        },
        green: {
          lightest: "",
          lighter: "#6AB578",
          light: "#0B8E78",
          dark: "",
          darker: "",
          darkest: "",
        },
      },
      spacing: {
        18: "4.5rem",
      },
      zIndex: {
        "-20": "-20",
        "-10": "-10",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
