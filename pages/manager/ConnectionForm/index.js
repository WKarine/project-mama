import { brandColors } from "../../../constantes/colors";

const ConnectionForm = () => (
  <div className="card-panel">
    <form>
      <div class="input-field">
        <input id="email" type="email" class="validate" />
        <label for="email">Email</label>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" />
        <label for="password">Password</label>
      </div>

      <button class="btn waves-effect waves-light" type="submit" name="action">
        se connecter
        <i class="material-icons right">send</i>
      </button>
    </form>
    <style jsx>{``}</style>
  </div>
);

export default ConnectionForm;
