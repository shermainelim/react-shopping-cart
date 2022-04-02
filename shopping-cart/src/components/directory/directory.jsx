import CategoryItems from "../category-item/category-item";
import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
