import Link from "next/link"

export default function ProductCard({ imagePath, title, price }) {
  return (
    <Link href="ProductListing">
    <div className="bg-white  md:w-[17rem] w-[100%]">
    
      <img 
        src={imagePath} 
        alt={title} 
        className="w-full  object-cover"
        />
      <div className="pt-4 pb-4">
        <h2 className="text-custom-purple-dark headline-five  mb-[1px]">{title}</h2>
        <p className="text-custom-purple-dark headline-five">{price}</p>
      </div>
    </div>
        </Link>
  );
}