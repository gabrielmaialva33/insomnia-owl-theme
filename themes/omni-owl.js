module.exports = {
  name: "omni-owl",
  displayName: "Omni Owl Theme",
  theme: {
    background: {
      default: "#13111B",
      success: "#67E480",
      notice: "#E7dE79",
      warning: "#E89E64",
      danger: "#E96379",
      surprise: "#7159C1",
      info: "#78D1E1",
    },
    foreground: {
      default: "#E1E1E6",
      success: "#F8F8F2",
      notice: "#F8F8F2",
      warning: "#F8F8F2",
      danger: "#F8F8F2",
      surprise: "#F8F8F2",
      info: "#F8F8F2",
    },
    highlight: {
      default: "rgba(167, 129, 201, 0.5)",
      xxs: "rgba(167, 129, 201, 0.05)",
      xs: "rgba(167, 129, 201, 0.1)",
      sm: "rgba(167, 129, 201, 0.2)",
      md: "rgba(167, 129, 201, 0.4)",
      lg: "rgba(167, 129, 201, 0.6)",
      xl: "rgba(167, 129, 201, 0.8)",
    },
    styles: {
      sidebar: {
        background: {
          default: "#13111B",
        },
      },
      dialog: {
        background: {
          default: "#13111B",
        },
      },
      paneHeader: {
        background: {
          success: "#67E480",
          notice: "#E7DE79",
          warning: "#E89E64",
          danger: "#E96379",
          surprise: "#7159C1",
          info: "#78D1E1",
        },
        foreground: {
          default: "#E1E1E6",
          success: "#41414D",
          notice: "#41414D",
          warning: "#41414D",
          danger: "#41414D",
          surprise: "#E1E1E6",
          info: "#41414D",
        },
      },
      transparentOverlay: {
        background: {
          default: "rgba(40, 42, 54, 0.5)",
        },
      },
    },
    rawCss: `
      .swagger-ui .opblock-description-wrapper, .swagger-ui .opblock-external-docs-wrapper, .swagger-ui .opblock-title_normal {
        color: #E89E64;
        font: 400 14px/1.5 "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }

      .example {
        background: #231c2c !important;
        background-color: #231c2c !important;
      }

      .microlight {
        background: #231c2c !important;
        background-color: #231c2c !important;
      }

      .body-param__example.microlight {
        background: #231c2c !important;
        background-color: #231c2c !important;
      }

      .language-json {
        border: 0 !important;
      }

      #swagger-ui-wrapper.microlight {
        background: #13111B;
        background-color: #13111B;
      }

      #swagger-ui-wrapper code {
        background-color: #13111B;
      }
    `,
  },
};
