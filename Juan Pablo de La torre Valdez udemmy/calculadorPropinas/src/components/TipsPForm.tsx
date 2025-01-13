

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },]

    type TipsPFormProp = {
        setTip:React.Dispatch<React.SetStateAction<number>>
        tip:number
    }
const TipsPForm = ({setTip,tip}:TipsPFormProp) => {


    return (
        <div>
            <h3 className="font-black text-2xl">Propinas:</h3>
            <form action="">
                {
                    tipOptions.map((t) => (
                        <div className="flex gap-2" key={t.id}>
                            <label htmlFor={t.id}>{t.label}</label>
                            <input type="radio" id={t.id} name = "tip" value={t.value} onChange={e=>setTip(+e.target.value)} checked={t.value===tip} />
                        </div>
                    ))
                }
            </form>

        </div>


    );
}

export default TipsPForm;