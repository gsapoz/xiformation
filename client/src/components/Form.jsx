function Form({ formation, data, list }) {
  return (
    <div class="form-container">
      <form>
        <label for="name">LW</label>
        <input type="text" id="LW" value={data[250].name} />

        <label for="email">CF</label>
        <input type="text" id="CF" value={data[0].name} />

        <label for="phone">RW</label>
        <input type="text" id="RW" value={formation} />

        <label for="address1">LCM</label>
        <input type="text" id="LCM" />

        <label for="address2">CM</label>
        <input type="text" id="CM" />

        <label for="city">RCM</label>
        <input type="text" id="RCM" />

        <label for="state">LB</label>
        <input type="text" id="LB" />

        <label for="zip">LCB</label>
        <input type="text" id="LCB" />

        <label for="country">RCB</label>
        <input type="text" id="RCB" />

        <label for="username">RB</label>
        <input type="text" id="RB" />

        <label for="password">GK</label>
        <input type="text" id="GK" />
      </form>
      <h4>XI Formation!</h4>
    </div>
  );
}

export default Form;
