import {cn} from "@/utils/css";
import {LuBuilding, LuBuilding2, LuPersonStanding, LuWarehouse} from "react-icons/lu";

const Pricing = ({ blok }) => {
    if (!blok || !blok.body) {
        return <div>Pricing blok incorrect: {JSON.stringify(blok)}</div>;
    }
    const icons = [
        {
            name: 'Free',
            icon: (props) => <LuPersonStanding {...props} />
        },
        {
            name: 'Plus',
            icon: (props) => <LuWarehouse {...props} />
        },
        {
            name: 'Business',
            icon: (props) => <LuBuilding {...props} />
        },
        {
            name: 'Enterprise',
            icon: (props) => <LuBuilding2 {...props} />
        }
    ];

    return (
        <>
                <div className="mt-20 flow-root">
                    <div className="mx-auto mt-10 grid max-w-md grid-cols-1 items-stretch gap-8 text-left md:max-w-3xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
                        {blok.body.map((tier, index) => (
                            <div
                                key={`tier-${tier.name}`}
                                className={cn(
                                    tier.mostPopular
                                        ? 'ring-2 ring-cornflower-blue-600'
                                        : 'ring-1 ring-gray-200',
                                    'flex flex-col rounded-2xl p-8',
                                )}
                            >
                                <h3
                                    id={`tier-${tier.name}`}
                                    className="flex items-center gap-3 text-3xl font-bold text-cornflower-blue-600"
                                >
                                    {icons.filter(it => it.name === tier.name)[0].icon() }
                                    {tier.name}
                                    {tier.mostPopular ? (
                                        <span className="inline-flex items-center whitespace-nowrap rounded-md bg-marian-blue-50 px-2 py-1 text-xs xl:hidden">
                      Most popular
                    </span>
                                    ) : null}
                                </h3>
                                <p className="mt-6 text-base font-medium leading-6 text-gray-900 xl:min-h-[6rem]">
                                    {tier.description}
                                </p>
                                <div className="my-8 border-b border-gray-900/10 pb-8 text-base">
                                    <p className="flex items-baseline gap-x-1">
                                        {typeof tier.price === 'string' ? (
                                            <>
                        <span className="text-3xl font-medium tracking-tight text-gray-900">
                          {tier.price}
                        </span>
                                            </>
                                        ) : (
                                            <>
                        <span className="text-3xl font-bold tracking-tight text-gray-900">
                          {tier.price.monthly}
                        </span>
                                                <span className="ml-1 text-lg font-semibold leading-6 text-gray-900 xl:ml-0 xl:mt-0.5">
                          / month
                        </span>
                                            </>
                                        )}
                                    </p>
                                    {/*{'maximum' in tier.cloudAccounts ? (*/}
                                    {/*    <p className="mt-0.5 md:mb-6 xl:mb-12">*/}
                                    {/*        maximum of {tier.cloudAccounts.maximum} cloud account*/}
                                    {/*    </p>*/}
                                    {/*) : (*/}
                                    {/*    <>*/}
                                    {/*        <p className="mt-0.5">*/}
                                    {/*            {tier.cloudAccounts.included} cloud accounts included*/}
                                    {/*        </p>*/}
                                    {/*        <p>*/}
                                    {/*            (${tier.cloudAccounts.additionalCost} / month per*/}
                                    {/*            additional account)*/}
                                    {/*        </p>*/}
                                    {/*    </>*/}
                                    {/*)}*/}
                                </div>
                                <div className="gap-y-2 text-base">
                                    <p>{tier.scanFrequency} scans</p>
                                    {/*<p>*/}
                                    {/*    {tier.seats.included*/}
                                    {/*        ? `${tier.seats.included} seats included${tier.seats.maximum ? ` (${tier.seats.maximum} max)` : ''}`*/}
                                    {/*        : `${tier.seats.maximum} seat${tier.seats.maximum === 1 ? '' : 's'} maximum`}*/}
                                    {/*</p>*/}
                                </div>
                                <p className="mt-6 text-base font-semibold text-gray-900">
                                    {index === 0
                                        ? 'Features:'
                                        : `Everything in ${blok.body[index - 1].name}, and:`}
                                </p>
                                <ul
                                    role="list"
                                    className={`mt-1.5 space-y-1.5 text-sm leading-6 text-gray-600 ${index < 2 ? 'md:min-h-[14.625rem]' : 'md:min-h-[10.875rem]'} xl:min-h-[17.625rem]`}
                                >
                                    {/*{tier.features.map((feature, index) => (*/}
                                    {/*    <li*/}
                                    {/*        key={`feature-${slugger.slug(tier.name)}-${index}`}*/}
                                    {/*        className="flex gap-x-2"*/}
                                    {/*    >*/}
                                    {/*        <LuCheck*/}
                                    {/*            className="my-0.5 h-5 w-5 flex-none text-cornflower-blue-600"*/}
                                    {/*            aria-hidden="true"*/}
                                    {/*        />*/}
                                    {/*        {feature}*/}
                                    {/*    </li>*/}
                                    {/*))}*/}
                                </ul>
                                <p className="mt-6 text-base font-semibold text-gray-900">
                                    Support:
                                </p>
                                <ul
                                    role="list"
                                    className="mt-1.5 grow space-y-1.5 text-sm leading-6 text-gray-600"
                                >
                                    {/*{tier.support.map((option, index) => (*/}
                                    {/*    <li*/}
                                    {/*        key={`support-${slugger.slug(tier.name)}-${index}`}*/}
                                    {/*        className="flex gap-x-2"*/}
                                    {/*    >*/}
                                    {/*        <LuCheck*/}
                                    {/*            className="my-0.5 h-5 w-5 flex-none text-cornflower-blue-600"*/}
                                    {/*            aria-hidden="true"*/}
                                    {/*        />*/}
                                    {/*        {option}*/}
                                    {/*    </li>*/}
                                    {/*))}*/}
                                </ul>
                                {/*<ButtonLink*/}
                                {/*    variant={tier.mostPopular ? 'default' : 'outline'}*/}
                                {/*    className="mt-9 block text-center"*/}
                                {/*>*/}
                                {/*    /!*{tier.cta}*!/*/}
                                {/*</ButtonLink>*/}
                            </div>
                        ))}
                    </div>
                </div>

        </>
);
};

export default Pricing;
