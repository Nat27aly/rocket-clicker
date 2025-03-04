function Separator(props){

    return (
        <div className="flex items-center py-3 w-full">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-600">{props.label}</span>
            <div className="flex-grow border-t border-gray-600 "></div>
        </div>
    );
}

export default Separator;