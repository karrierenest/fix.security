const Customers = ({ blok }) => {

    return(
        <div className="bg-gray-50 py-16 sm:py-24" id="customers">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-balance text-center text-2xl font-bold leading-8 text-gray-900">
                    {blok.caption}
                </h2>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 lg:mt-10 lg:justify-between lg:gap-x-0">
                    {blok.pictures.map((customer, index) => (
                        <div key={`customer-${index}`}>
                            <span className="sr-only">{customer.alt}</span>
                            <img className="h-8 max-w-[8rem] lg:h-10 lg:max-w-[10rem]" src={customer.filename} alt={customer.alt || "Hero Image"}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
        ;
};

export default Customers;
