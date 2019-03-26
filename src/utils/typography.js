import Typography from "typography";
import githubTheme from "typography-theme-github";
// import styles from "../sass/palette.scss";
// const gold = styles.gold;
githubTheme.includeNormalize = true;
githubTheme.baseFontSize = "18px";
githubTheme.scaleRatio = 3.0;
githubTheme.blockMarginBottom = 1;
githubTheme.bodyFontFamily = [
  "Source Sans Pro",
  "Arial",
  "Helvetica",
  "Segoe UI",
  "sans-serif"
];
githubTheme.headerFontFamily = [
  "Archivo Narrow",
  "Arial",
  "Helvetica",
  "Segoe UI",
  "sans-serif"
];

githubTheme.overrideThemeStyles = () => ({
  h1: {
    borderBottom: `none`,
    fontFamily: `"Julius Sans One","Arial","Helvetica","Segoe UI","sans-serif"`,
    fontWeight: `100`
  },
  h2: {
    borderBottom: `none`,
    letterSpacing: `.11em`
  },
  h3: {
    letterSpacing: `.025em`
  }
});

const typography = new Typography(githubTheme);

export default typography;
