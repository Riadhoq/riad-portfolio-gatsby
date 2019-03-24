import Typography from "typography";
import githubTheme from "typography-theme-github";
// import styles from "../sass/palette.scss";
// const gold = styles.gold;
githubTheme.includeNormalize = true;
githubTheme.baseFontSize = "18px";
githubTheme.scaleRatio = 3.0;
githubTheme.bodyFontFamily = [
  "Source Sans Pro",
  "Arial",
  "Helvetica",
  "Segoe UI",
  "sans-serif"
];
githubTheme.headerFontFamily = [
  "Julius Sans One",
  "Arial",
  "Helvetica",
  "Segoe UI",
  "sans-serif"
];

githubTheme.overrideThemeStyles = () => ({
  h1: {
    borderBottom: `none`,
    fontWeight: `100`
  },
  h2: {
    borderBottom: `none`,
    fontFamily: `"Archivo Narrow","Arial","Helvetica","Segoe UI","sans-serif"`,
    letterSpacing: `2px`
  }
});

const typography = new Typography(githubTheme);

export default typography;
