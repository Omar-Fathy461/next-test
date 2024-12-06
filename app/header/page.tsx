import Link from "next/link"

interface ILinks {
    home: string;
    products: string;
    productDetails: string;
}

const page = () => {

    const links: ILinks = {
        home: "/",
        products: "/products",
        productDetails: "/products/productDetails"
    }

    return (
        <div className="flex justify-between">
            {
                Object.entries(links).map(([key, value], i: number) => (
                    <Link key={i} href={value}>
                        {key}
                    </Link>
                ))
            }
        </div>
    )
}

export default page