const Riwaayaat = ({riwaayaat}) => {
    return (
      <div>
         <ul className="p-5">
           {riwaayaat.map(riwaaya => {
             return <li key={riwaaya}>{riwaaya}</li>
           })}
         </ul>
      </div>
    );
}

export default Riwaayaat;