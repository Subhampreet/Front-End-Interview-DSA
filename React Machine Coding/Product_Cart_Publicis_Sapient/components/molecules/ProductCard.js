import Image from "../atoms/Image";
import Typography from "../atoms/Typography";
import Button from "../atoms/Button";

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className="flex items-center p-4 border-b">
      <Image src={product.image} alt={product.title} />
      <div className="ml-4 flex-grow">
        <Typography variant="h3">{product.title}</Typography>
        <Typography>${product.price}</Typography>
      </div>
      <Button onClick={() => onRemove(product.id)}>Remove</Button>
    </div>
  );
};

export default ProductCard;
