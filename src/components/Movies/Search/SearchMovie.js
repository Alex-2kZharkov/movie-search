import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
  },

  cssLabel: {
    color: "rgba(255,255,255,0.66)",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `white !important`,
    },
  },

  cssFocused: {
    color: "white",
    fontSize: "1.2rem",
  },

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },
});

const SearchMovie = ({ value, handler, classes }) => {
  return (
    <div className="search-box">
      <TextField
        id="standard-name"
        label="Type movie name"
        className={classes.textField}
        value={value}
        onChange={handler}
        margin="normal"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
          inputMode: "numeric",
        }}
      />
    </div>
  );
};

export default withStyles(styles)(SearchMovie);
