import { brandColors } from "../../../constantes/colors";

const ConnectionForm = ({ onSubmit }) => (
  <div className="card-panel">
    <form method="post" onSubmit={onSubmit}>
      <div className="input-field">
        <input id="email" type="email" className="validate" name="email" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field">
        <input
          id="password"
          type="password"
          className="validate"
          name="password"
        />
        <label htmlFor="password">Password</label>
      </div>

      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        se connecter
        <i className="material-icons right">send</i>
      </button>
    </form>
    <style jsx>{`
      button {
        background-color: ${brandColors.actual} !important;
      }

      button:hover,
      button:active,
      button:focus {
        background-color: ${brandColors.actualHover} !important;
      }
    `}</style>
  </div>
);

export default ConnectionForm;
