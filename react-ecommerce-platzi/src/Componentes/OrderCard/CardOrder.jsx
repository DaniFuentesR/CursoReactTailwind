


function OrderCard (props) {

    const { id, title, imageUrl, price, handleDelete} = props

        let renderTrashIcon 

        if (handleDelete) {
            renderTrashIcon = <span className="cursor-pointer" onClick={()=> handleDelete(id)}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>
        </span>
        }
            
    return(
        
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 py-5">
                <figure className="w-20 h-20 border rounded-lg">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-semibold px-3">{title}</p>
            </div>

            <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{price}</p>

                {renderTrashIcon}
                
            </div>
        </div>
    )
};

export {OrderCard}; 


