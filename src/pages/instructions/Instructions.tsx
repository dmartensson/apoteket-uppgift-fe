import styles from "./instructions.module.css";

export const InstructionsPage = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1>Arbetsuppgift Frontend</h1>
        <p>
          Bygg en simpel produktlistning samt varukorg för en ehandelsplats.
        </p>
        <h2>Kravspecifikation</h2>
        <ul className={styles.list}>
          <li>
            Kunden ska kunna se en produktlista. Den aktuella listan kan hämtas
            genom ett HTTP GET till
            <br />
            <code>/api/products</code>
          </li>
          <li>
            Kunden ska kunna lägga varor i sin varukorg. Varukorgen är
            implementerad med hjälp av http session state. Varor läggs till
            genom ett HTTP POST till
            <br />
            <code>/api/cart</code>
            <br />
            Skicka in ett JSON-objekt enligt formen
            <br />
            <code>{`{ "Id": 1, "Quantity": 2 }`}</code>
            <br />
            Observera att anropet kan vara långsamt och att fel kan uppstå!
          </li>
          <li>
            Kunden ska kunna se sin varukorg (antal varor och totalpris).
            Information om korgens innehåll kan hämtas via ett HTTP GET till
            <br />
            <code>/api/cart</code>
          </li>
          <li>
            Kunden ska kunna tömmma sin varukorg. Korgen töms genom ett HTTP
            DELETE till <br />
            <code>/api/cart</code>
          </li>
          <li>
            Du behöver skicka in headern <code>X-Key</code> med värdet{" "}
            <code>qwerty</code> vid alla API-anrop.
          </li>
          <li>
            Om varukorgens värde överstiger 5000 kr ska inga fler varor kunna
            läggas till. Detta ska signaleras på ett lämpligt sätt.
          </li>
        </ul>
        <p>
          Undvik en massa npm-plugins, använd så mycket funktionalitet som
          möjligt som finns i vanilla JavaScript och som kommer med React eller
          motivera val av plugin. Du behöver inte tänka på äldre browsers,
          använd funktionalitet som fungerar i nya browsers.
        </p>
        <p>
          Vi är medvetna om att denna spec är vag. Använd din
          problemlösningsförmåga! Det finns inget facit.
        </p>
        <p>
          Inlämning sker som ZIP-fil via XXX Dropbox, Google Drive eller
          OneDrive.
        </p>
        <p>Eventuella frågor mailas till XXX</p>
      </div>
    </main>
  );
};
