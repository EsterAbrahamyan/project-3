export default function Main() {
    return (
      <div>
        <h3>Տեսականի</h3>
        <div className="content">
          <div className="leftmenu">
            <form>
              <fieldset className="column1">
                <legend>Տորթեր</legend>
                <div className="column_box">
                  <input type="checkbox" id="harSanakan" name="torhter" />
                  <label for="harSanakan">հարսանեկան</label>
                </div>
                <div className="column_box">
                  <input type="checkbox" id="tsnnundyan" name="torhter" />
                  <label for="tsnnundyan">ծննդյան</label>
                </div>
                <div className="column_box">
                  <input type="checkbox" id="tematik" name="torhter" />
                  <label for="tematik">թեմատիկ</label>
                </div>
              </fieldset>
  
              <fieldset className="column2">
                <legend>Խմորեղեն</legend>
                <div className="column_box">
                  <input type="checkbox" id="phaxlav" name="khmoreghen" />
                  <label for="phaxlav">Փախլավա</label>
                </div>
                <div className="column_box">
                  <input type="checkbox" id="mikado" name="khmoreghen" />
                  <label for="mikado">Միկադո</label>
                </div>
                <div className="column_box">
                  <input type="checkbox" id="napoleon" name="khmoreghen" />
                  <label for="napoleon">Նապոլեոն</label>
                </div>
                <div className="column_box">
                  <input type="checkbox" id="harbac_bal" name="khmoreghen" />
                  <label for="harbac_bal">Հարբած բալ</label>
                </div>
                <div className="column_box">
                  <input type="checkbox" id="tghamardou_ideal" name="khmoreghen" />
                  <label for="tghamardou_ideal">Տղամարդու Իդեալ</label>
                  </div>
                  </fieldset>
                </form>
                </div>
                </div>
                </div>
    )
}


                
  