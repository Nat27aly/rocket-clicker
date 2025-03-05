function Input(props) {

    return (
        <div className="flex flex-col justify-start text-start gap-1 w-full">
            {props.label && (
                <label className="font-medium" htmlFor={props.name}>{props.label}</label>
            )}
            <input
                type={props.type}
                id={props.name}
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className={'bg-white rounded-lg flex border-[1px] border-gray-300 w-full h-10 px-3 focus:outline-2 outline-offset-2 outline-gray-400'}
            />
        </div>
    );
}


export default Input;