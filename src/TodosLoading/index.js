import "./TodosLoadingOutput.css"

function TodosLoading() {
    return(
        <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-7 bg-slate-400 w-full rounded-md"></div>
            <div className="h-7 bg-slate-400 w-full rounded-md"></div>
            <div className="h-7 bg-slate-400 w-full rounded-md"></div>
            <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
        </div>
    );
}

export { TodosLoading }