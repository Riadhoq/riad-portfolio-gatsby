import Typography from "typography"
import githubTheme from "typography-theme-github";
import styles from "../sass/palette.scss";
const colorGold = styles.colorGold;

githubTheme.baseFontSize = "18px";
githubTheme.scaleRatio = 2.5;
githubTheme.bodyFontFamily = ['Open Sans', 'Arial', 'Helvetica', 'Segoe UI', 'sans-serif'];
githubTheme.headerFontFamily = ['Open Sans', 'Arial', 'Helvetica', 'Segoe UI', 'sans-serif'];
githubTheme.headerWeight = 300;

githubTheme.overrideThemeStyles = () => ({
    h1: {
        borderBottom: `none`,
        color: colorGold
    },
    h2: {
        borderBottom: `none`,
        color: colorGold
    }
});

const typography = new Typography(githubTheme);

export default typography