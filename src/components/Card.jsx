function Card(props){

    return (
        <div className="bg-white/90 rounded-2xl p-8 flex flex-col items-center text-center max-w-96 gap-3 z-10">
            {props.children}
        </div>
    );
}

export default Card;